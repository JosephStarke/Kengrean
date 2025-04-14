// Game state
const gameState = {
    languageMode: 'korean', // 'korean' or 'english'
    gameMode: 'quiz', // 'quiz', 'endless', 'timed', or 'flashcard'
    selectedBin: null, // 'Alphabet', 'Words', or 'Phrases'
    selectedCategories: [],
    availableCategories: [],
    words: {},
    score: 0,
    correctAnswers: 0,
    totalQuestions: 0,
    currentQuestion: null,
    timer: null,
    timeRemaining: 60,
    questionStartTime: 0,
    confettiInterval: null, // Added for continuous confetti
    // Quiz mode specific properties
    quizWords: [], // Array to hold words for the quiz
    correctlyAnsweredWords: [], // Array to track words answered correctly
    totalUniqueWords: 0, // Total unique words in the quiz
    // Flash card mode specific properties
    flashcards: [], // Array to hold flashcards
    currentCardIndex: 0, // Current card being shown
    cardSide: 'front', // 'front' or 'back'
    correctCards: [], // Cards marked as correct
    incorrectCards: [], // Cards marked as incorrect
};

// Config files for each bin
const configFiles = {
    'Alphabet': 'alphabet_config.json',
    'Words': 'words_config.json',
    'Phrases': 'phrases_config.json'
};

// DOM elements
const setupScreen = document.getElementById('setup-screen');
const gameScreen = document.getElementById('game-screen');
const resultsScreen = document.getElementById('results-screen');
const flashcardScreen = document.getElementById('flashcard-screen');
const binsContainer = document.getElementById('bins-container');
const categoriesContainer = document.getElementById('categories-container');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time-display');
const progressDisplay = document.getElementById('progress-display');
const progressValue = document.getElementById('progress');
const timeValue = document.getElementById('time');
const currentWordDisplay = document.getElementById('current-word');
const playSoundBtn = document.getElementById('play-sound');
const answersContainer = document.getElementById('answers-container');

// Result elements
const finalScoreDisplay = document.getElementById('final-score');
const accuracyDisplay = document.getElementById('accuracy');
const correctAnswersDisplay = document.getElementById('correct-answers');
const totalQuestionsDisplay = document.getElementById('total-questions');

// Flash card elements
const flashcard = document.getElementById('flashcard');
const flashcardFront = document.getElementById('flashcard-front');
const flashcardBack = document.getElementById('flashcard-back');
const flipCardBtn = document.getElementById('flip-card');
const flashcardPlaySoundBtn = document.getElementById('flashcard-play-sound');
const markCorrectBtn = document.getElementById('mark-correct');
const markIncorrectBtn = document.getElementById('mark-incorrect');
const cardProgressDisplay = document.getElementById('card-progress');
const correctCardsDisplay = document.getElementById('correct-cards');

// Audio element for playing mp3s
const audioPlayer = new Audio();
// Use full volume
audioPlayer.volume = 1.0;

// Add event listener to handle audio completion
audioPlayer.addEventListener('ended', () => {
    // Release the audio resource after playback
    audioPlayer.src = '';
});

// Pre-create audio elements for correct and incorrect sounds
const correctAudio = new Audio('sounds/correct.mp3');
const incorrectAudio = new Audio('sounds/incorrect.mp3');

// Use full volume for these sounds
correctAudio.volume = 1.0;
incorrectAudio.volume = 1.0;

// Play sound effects using pre-created audio objects
function playSound(type) {
    if (type === 'correct') {
        // Reset to the beginning before playing
        correctAudio.currentTime = 0;
        correctAudio.play().catch(error => {
            console.warn(`Error playing correct sound: ${error.message}`);
        });
    } else if (type === 'incorrect') {
        // Reset to the beginning before playing
        incorrectAudio.currentTime = 0;
        incorrectAudio.play().catch(error => {
            console.warn(`Error playing incorrect sound: ${error.message}`);
        });
    }
}

// Function to clean up audio resources
function cleanupAudio() {
    audioPlayer.pause();
    audioPlayer.src = '';
    correctAudio.pause();
    incorrectAudio.pause();
}

// Initialize the game
async function initGame() {
    try {
        showLoading('Loading game data...');
        setupEventListeners();

        // Initially hide the categories until a bin is selected
        document.querySelector('.categories-section').style.display = 'none';

        // Set initial state
        gameState.selectedBin = null;
        gameState.selectedCategories = [];
        hideLoading();
    } catch (error) {
        console.error('Error initializing game:', error);
        showErrorMessage('Failed to initialize game. Please try refreshing the page.');
        hideLoading();
    }
}

// Show loading indicator
function showLoading(message) {
    // Create loading overlay if it doesn't exist
    if (!document.getElementById('loading-overlay')) {
        const loadingOverlay = document.createElement('div');
        loadingOverlay.id = 'loading-overlay';
        loadingOverlay.style.position = 'fixed';
        loadingOverlay.style.top = '0';
        loadingOverlay.style.left = '0';
        loadingOverlay.style.width = '100%';
        loadingOverlay.style.height = '100%';
        loadingOverlay.style.backgroundColor = 'rgba(0,0,0,0.7)';
        loadingOverlay.style.display = 'flex';
        loadingOverlay.style.justifyContent = 'center';
        loadingOverlay.style.alignItems = 'center';
        loadingOverlay.style.zIndex = '9999';
        loadingOverlay.style.flexDirection = 'column';

        const spinner = document.createElement('div');
        spinner.className = 'loading-spinner';
        spinner.style.width = '50px';
        spinner.style.height = '50px';
        spinner.style.border = '5px solid #f3f3f3';
        spinner.style.borderTop = '5px solid #3498db';
        spinner.style.borderRadius = '50%';
        spinner.style.animation = 'spin 1s linear infinite';

        const messageElement = document.createElement('div');
        messageElement.id = 'loading-message';
        messageElement.style.color = 'white';
        messageElement.style.marginTop = '20px';
        messageElement.style.fontSize = '18px';

        // Create the keyframe animation
        const styleSheet = document.createElement('style');
        styleSheet.textContent = `
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `;

        document.head.appendChild(styleSheet);
        loadingOverlay.appendChild(spinner);
        loadingOverlay.appendChild(messageElement);
        document.body.appendChild(loadingOverlay);
    }

    // Update message
    document.getElementById('loading-message').textContent = message;
    document.getElementById('loading-overlay').style.display = 'flex';
}

// Hide loading indicator
function hideLoading() {
    const loadingOverlay = document.getElementById('loading-overlay');
    if (loadingOverlay) {
        loadingOverlay.style.display = 'none';
    }
}

// Load configuration from the selected bin's config file
async function loadConfigFile(bin) {
    try {
        const configFile = configFiles[bin];
        if (!configFile) {
            throw new Error(`No configuration file defined for bin: ${bin}`);
        }

        showLoading(`Loading ${bin} data...`);
        const response = await fetch(configFile);

        if (!response.ok) {
            throw new Error(`Failed to load configuration file: ${response.status} ${response.statusText}`);
        }

        const config = await response.json();

        // Set game state from configuration
        gameState.availableCategories = config.categories || [];
        gameState.words = config.words || {};

        console.log(`Configuration loaded successfully for ${bin}`);
        console.log('Categories:', gameState.availableCategories);
        console.log('Words count:', Object.keys(gameState.words).length);

        hideLoading();
        return true;
    } catch (error) {
        console.error(`Error loading configuration file for ${bin}:`, error);

        // Show a more helpful error message
        let errorMessage = `Failed to load ${bin} configuration file (${configFiles[bin]}).`;
        errorMessage += `\n\nPlease make sure you've run the config_${bin.toLowerCase()}_generator.py script first to create this file.`;

        showErrorMessage(errorMessage);
        hideLoading();
        return false;
    }
}

// Select a bin
async function selectBin(bin) {
    if (gameState.selectedBin === bin) {
        return; // Already selected
    }

    // Attempt to load the config file for this bin
    const success = await loadConfigFile(bin);

    if (success) {
        // Update selected bin
        gameState.selectedBin = bin;

        // Update UI to show this bin is selected
        document.querySelectorAll('.bin-btn').forEach(item => {
            if (item.dataset.bin === bin) {
                item.classList.add('selected');
            } else {
                item.classList.remove('selected');
            }
        });

        // Show categories section
        document.querySelector('.categories-section').style.display = 'block';

        // Clear and repopulate categories
        populateCategories();

        // Reset selected categories
        gameState.selectedCategories = [];
    }
}

// Populate the categories grid
function populateCategories() {
    // Clear existing categories
    categoriesContainer.innerHTML = '';

    // Add each category as a clickable item
    gameState.availableCategories.forEach(category => {
        const categoryItem = document.createElement('div');
        categoryItem.className = 'category-item';
        categoryItem.dataset.category = category;

        const categoryBubble = document.createElement('div');
        categoryBubble.className = 'category-bubble';

        // Replace underscores with spaces for display
        const displayName = category.replace(/_/g, ' ');
        categoryBubble.textContent = displayName.charAt(0).toUpperCase() + displayName.slice(1);

        categoryItem.appendChild(categoryBubble);
        categoriesContainer.appendChild(categoryItem);
    });
}

// Select all categories
function selectAllCategories() {
    document.querySelectorAll('.category-item').forEach(item => {
        item.classList.add('selected');
    });
    gameState.selectedCategories = [...gameState.availableCategories];
}

// Deselect all categories
function deselectAllCategories() {
    document.querySelectorAll('.category-item').forEach(item => {
        item.classList.remove('selected');
    });
    gameState.selectedCategories = [];
}

// Set up event listeners
function setupEventListeners() {
    // Language mode selection
    document.getElementById('mode-korean').addEventListener('click', function() {
        document.getElementById('mode-korean').classList.add('active');
        document.getElementById('mode-english').classList.remove('active');
        gameState.languageMode = 'korean';
    });

    document.getElementById('mode-english').addEventListener('click', function() {
        document.getElementById('mode-english').classList.add('active');
        document.getElementById('mode-korean').classList.remove('active');
        gameState.languageMode = 'english';
    });

    // Game mode selection
    document.getElementById('game-quiz').addEventListener('click', function() {
        document.querySelectorAll('.game-btn').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        gameState.gameMode = 'quiz';
    });

    document.getElementById('game-endless').addEventListener('click', function() {
        document.querySelectorAll('.game-btn').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        gameState.gameMode = 'endless';
    });

    document.getElementById('game-timed').addEventListener('click', function() {
        document.querySelectorAll('.game-btn').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        gameState.gameMode = 'timed';
    });

    document.getElementById('game-flashcard').addEventListener('click', function() {
        document.querySelectorAll('.game-btn').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        gameState.gameMode = 'flashcard';
    });

    // Bin selection
    document.addEventListener('click', function (event) {
        const binBtn = event.target.closest('.bin-btn');
        if (binBtn) {
            const binName = binBtn.dataset.bin;
            selectBin(binName);
        }
    });

    // Category selection
    document.addEventListener('click', function (event) {
        const categoryItem = event.target.closest('.category-item');
        if (!categoryItem) return;

        // Toggle selected state
        categoryItem.classList.toggle('selected');

        // Update selected categories
        const allSelected = [...document.querySelectorAll('.category-item.selected')];
        gameState.selectedCategories = allSelected.map(i => i.dataset.category);
    });

    // Select All button
    document.getElementById('select-all').addEventListener('click', selectAllCategories);

    // Deselect All button
    document.getElementById('deselect-all').addEventListener('click', deselectAllCategories);

    // Start Game button
    document.getElementById('start-game').addEventListener('click', () => {
        // Ensure a bin is selected
        if (!gameState.selectedBin) {
            showErrorMessage('Please select a content type (Alphabet, Words, or Phrases) before starting the game.');
            return;
        }

        // Ensure at least one category is selected
        if (gameState.selectedCategories.length === 0) {
            showErrorMessage('Please select at least one category before starting the game.');
            return;
        }

        startGame();
    });

    // Play Sound button
    playSoundBtn.addEventListener('click', playCurrentWordSound);

    // Play Again button
    document.getElementById('play-again').addEventListener('click', () => {
        // Hide results screen
        resultsScreen.style.display = 'none';

        // Reset game state but keep settings
        resetGameButKeepSettings();

        // Start the game again with the same settings
        startGameWithCurrentSettings();
    });

    // Main Menu buttons (include flashcard screen)
    document.querySelectorAll('.main-menu-btn').forEach(btn => {
        btn.addEventListener('click', returnToMainMenu);
    });

    // Add window unload event to clean up audio resources
    window.addEventListener('beforeunload', cleanupAudio);

    // Flash card controls
    flipCardBtn.addEventListener('click', flipCard);
    flashcard.addEventListener('click', flipCard); // Allow clicking the card itself to flip
    flashcardPlaySoundBtn.addEventListener('click', playFlashCardSound);
    markCorrectBtn.addEventListener('click', markCardCorrect);
    markIncorrectBtn.addEventListener('click', markCardIncorrect);
}

// Return to the main menu
function returnToMainMenu() {
    // Stop any ongoing game processes
    if (gameState.timer) {
        clearInterval(gameState.timer);
        gameState.timer = null;
    }

    // Stop confetti if it's running
    stopConfetti();

    // Clean up audio
    cleanupAudio();

    // Hide game and results screens, show setup screen
    gameScreen.style.display = 'none';
    resultsScreen.style.display = 'none';
    flashcardScreen.style.display = 'none';
    setupScreen.style.display = 'block';

    // Reset scroll position
    window.scrollTo(0, 0);
}

// Show error message to the user
function showErrorMessage(message) {
    alert(message);
}

// Initialize the words for quiz mode
function initQuizWords() {
    try {
        // Reset arrays
        gameState.quizWords = [];
        gameState.correctlyAnsweredWords = [];
        
        // Get all selected words
        const allWords = getAllSelectedWords();
        
        // Create a copy for the quiz
        gameState.quizWords = [...allWords];
        
        // Shuffle the quiz words for a random order
        shuffleArray(gameState.quizWords);
        
        // Store the total unique words
        gameState.totalUniqueWords = gameState.quizWords.length;
        
        // Update progress display
        updateProgressDisplay();
    } catch (error) {
        console.error('Error initializing quiz words:', error);
        showErrorMessage('Failed to initialize quiz words. Please try again.');
    }
}

// Update the progress display
function updateProgressDisplay() {
    if (gameState.gameMode === 'quiz') {
        progressValue.textContent = `${gameState.correctlyAnsweredWords.length}/${gameState.totalUniqueWords}`;
    }
}

// Check if a word has been answered correctly
function isWordCorrectlyAnswered(word) {
    return gameState.correctlyAnsweredWords.some(w =>
        w.index === word.index &&
        w.english === word.english &&
        w.korean === word.korean);
}

// Start the game with the selected options
function startGame() {
    try {
        // Scroll to top of page
        window.scrollTo(0, 0);
        
        // Validate setup
        if (!gameState.selectedBin) {
            showErrorMessage('Please select a content type (Alphabet, Words, or Phrases).');
            return;
        }

        if (gameState.selectedCategories.length === 0) {
            showErrorMessage('Please select at least one category.');
            return;
        }

        // Hide setup screen and show game screen
        setupScreen.style.display = 'none';
        gameScreen.style.display = 'none';
        resultsScreen.style.display = 'none';
        flashcardScreen.style.display = 'none';

        // Reset game state
        gameState.score = 0;
        gameState.correctAnswers = 0;
        gameState.totalQuestions = 0;
        gameState.correctlyAnsweredWords = [];

        if (gameState.gameMode === 'quiz') {
            initQuizWords();
            updateProgressDisplay();
            gameScreen.style.display = 'block';
            loadNextQuestion();
        } else if (gameState.gameMode === 'endless' || gameState.gameMode === 'timed') {
            gameScreen.style.display = 'block';

            if (gameState.gameMode === 'timed') {
                // Reset timer and display
                gameState.timeRemaining = 60;
                timeValue.textContent = gameState.timeRemaining;
                timeDisplay.style.display = 'block';
                startTimer();
            } else {
                // Hide timer for endless mode
                timeDisplay.style.display = 'none';
            }

            // Hide progress for non-quiz modes
            progressDisplay.style.display = 'none';

            loadNextQuestion();
        } else if (gameState.gameMode === 'flashcard') {
            initFlashCards();
            updateFlashCardDisplay();
            flashcardScreen.style.display = 'flex';
        }

        updateScoreDisplay();
    } catch (error) {
        console.error('Error starting game:', error);
        showErrorMessage('Failed to start game. Please try again.');
    }
}

// Initialize flash cards
function initFlashCards() {
    try {
        // Reset flash card state
        gameState.flashcards = [];
        gameState.currentCardIndex = 0;
        gameState.cardSide = 'front';
        gameState.correctCards = [];
        gameState.incorrectCards = [];

        // Get all selected words and shuffle them
        const allWords = getAllSelectedWords();
        gameState.flashcards = [...allWords];
        shuffleArray(gameState.flashcards);
        
        // Update the display with counts
        updateFlashCardProgress();
    } catch (error) {
        console.error('Error initializing flash cards:', error);
        showErrorMessage('Failed to initialize flash cards. Please try again.');
    }
}

// Update the flash card display
function updateFlashCardDisplay() {
    try {
        if (gameState.flashcards.length === 0) {
            showErrorMessage('No cards available. Please select more categories.');
            returnToMainMenu();
            return;
        }

        const currentCard = gameState.flashcards[gameState.currentCardIndex];
        
        // Reset card flip state
        gameState.cardSide = 'front';
        flashcard.classList.remove('flipped');
        
        // Set content based on language mode
        if (gameState.languageMode === 'korean') {
            flashcardFront.textContent = currentCard.korean;
            flashcardBack.textContent = currentCard.english;
        } else {
            flashcardFront.textContent = currentCard.english;
            flashcardBack.textContent = currentCard.korean;
        }
        
        // Update progress display
        updateFlashCardProgress();
    } catch (error) {
        console.error('Error updating flash card display:', error);
        showErrorMessage('Failed to update flash card. Please try again.');
    }
}

// Update flash card progress display
function updateFlashCardProgress() {
    const currentIndex = gameState.currentCardIndex + 1;
    const totalCards = gameState.flashcards.length;
    const correctCount = gameState.correctCards.length;
    
    cardProgressDisplay.textContent = `${currentIndex}/${totalCards}`;
    correctCardsDisplay.textContent = correctCount;
}

// Flip the flash card
function flipCard() {
    if (gameState.cardSide === 'front') {
        gameState.cardSide = 'back';
        flashcard.classList.add('flipped');
    } else {
        gameState.cardSide = 'front';
        flashcard.classList.remove('flipped');
    }
}

// Play the current flash card sound
function playFlashCardSound() {
    const currentCard = gameState.flashcards[gameState.currentCardIndex];
    
    // Determine which audio to play based on the card side
    let audioPath;
    if (gameState.cardSide === 'front') {
        // Play the audio for the front side
        audioPath = gameState.languageMode === 'korean' ? currentCard.audioKo : currentCard.audioEn;
    } else {
        // Play the audio for the back side
        audioPath = gameState.languageMode === 'korean' ? currentCard.audioEn : currentCard.audioKo;
    }
    
    // Play the audio
    if (audioPath) {
        audioPlayer.src = audioPath;
        audioPlayer.play().catch(error => {
            console.warn(`Error playing audio: ${error.message}`);
        });
    }
}

// Mark the current card as correct
function markCardCorrect() {
    const currentCard = gameState.flashcards[gameState.currentCardIndex];
    
    // Add to correct cards if not already there
    if (!gameState.correctCards.includes(currentCard)) {
        gameState.correctCards.push(currentCard);
    }
    
    // Remove from incorrect cards if it was there
    const incorrectIndex = gameState.incorrectCards.indexOf(currentCard);
    if (incorrectIndex !== -1) {
        gameState.incorrectCards.splice(incorrectIndex, 1);
    }
    
    // Move to next card
    nextFlashCard();
}

// Mark the current card as incorrect
function markCardIncorrect() {
    const currentCard = gameState.flashcards[gameState.currentCardIndex];
    
    // Add to incorrect cards if not already there
    if (!gameState.incorrectCards.includes(currentCard)) {
        gameState.incorrectCards.push(currentCard);
    }
    
    // Remove from correct cards if it was there
    const correctIndex = gameState.correctCards.indexOf(currentCard);
    if (correctIndex !== -1) {
        gameState.correctCards.splice(correctIndex, 1);
    }
    
    // Move to next card
    nextFlashCard();
}

// Go to the next flash card
function nextFlashCard() {
    // Increment the current card index
    gameState.currentCardIndex++;
    
    // If we've gone through all cards, prepare to reshuffle
    if (gameState.currentCardIndex >= gameState.flashcards.length) {
        // If there are incorrect cards, shuffle them and continue
        if (gameState.incorrectCards.length > 0) {
            gameState.flashcards = [...gameState.incorrectCards];
            gameState.incorrectCards = [];
            shuffleArray(gameState.flashcards);
            gameState.currentCardIndex = 0;
            
            // Show a message about reshuffling
            showErrorMessage('Reshuffling incorrect cards!');
        } else {
            // All cards were correct, show results
            showFlashCardResults();
            return;
        }
    }
    
    // Update the display with the new card
    updateFlashCardDisplay();
}

// Show flash card results
function showFlashCardResults() {
    // Show the results screen
    flashcardScreen.style.display = 'none';
    resultsScreen.style.display = 'flex';
    
    // Calculate stats
    const totalCards = gameState.flashcards.length;
    const correctCards = gameState.correctCards.length;
    const accuracy = totalCards > 0 ? Math.round((correctCards / totalCards) * 100) : 0;
    
    // Update results display
    finalScoreDisplay.textContent = correctCards;
    accuracyDisplay.textContent = `${accuracy}%`;
    correctAnswersDisplay.textContent = correctCards;
    totalQuestionsDisplay.textContent = totalCards;
    
    // Show celebration if all cards were answered correctly
    if (correctCards === totalCards) {
        startConfetti();
    }
}

// Reset game state but keep settings
function resetGameButKeepSettings() {
    gameState.score = 0;
    gameState.correctAnswers = 0;
    gameState.totalQuestions = 0;
    gameState.currentQuestion = null;
    gameState.timeRemaining = 60;
    gameState.quizWords = [];
    gameState.correctlyAnsweredWords = [];
    gameState.totalUniqueWords = 0;

    if (gameState.timer) {
        clearInterval(gameState.timer);
        gameState.timer = null;
    }

    // Clean up audio resources
    cleanupAudio();

    stopConfetti();

    timeValue.textContent = gameState.timeRemaining;
}

// Start the game with current settings
function startGameWithCurrentSettings() {
    // Reset scroll position to top
    window.scrollTo(0, 0);

    // Show game screen
    gameScreen.style.display = 'flex';

    // Initialize score display
    updateScoreDisplay();

    // Show/hide timer and progress based on game mode
    timeDisplay.style.display = gameState.gameMode === 'timed' ? 'block' : 'none';
    progressDisplay.style.display = gameState.gameMode === 'quiz' ? 'block' : 'none';

    // Start timer if in timed mode
    if (gameState.gameMode === 'timed') {
        startTimer();
    }

    // Initialize quiz words if in quiz mode
    if (gameState.gameMode === 'quiz') {
        initQuizWords();
    }

    // Load first question
    loadNextQuestion();
}

// Reset game state
function resetGame() {
    gameState.score = 0;
    gameState.correctAnswers = 0;
    gameState.totalQuestions = 0;
    gameState.currentQuestion = null;
    gameState.timeRemaining = 60;
    gameState.quizWords = [];
    gameState.correctlyAnsweredWords = [];
    gameState.totalUniqueWords = 0;

    if (gameState.timer) {
        clearInterval(gameState.timer);
        gameState.timer = null;
    }

    // Clean up audio resources
    cleanupAudio();

    stopConfetti();

    timeValue.textContent = gameState.timeRemaining;
}

// Start the timer for timed mode
function startTimer() {
    gameState.timer = setInterval(() => {
        gameState.timeRemaining--;
        timeValue.textContent = gameState.timeRemaining;

        if (gameState.timeRemaining <= 0) {
            clearInterval(gameState.timer);
            endGame();
        }
    }, 1000);
}

// Get all words from selected categories
function getAllSelectedWords() {
    let allWords = [];

    // Include words from all selected categories
    gameState.selectedCategories.forEach(category => {
        if (gameState.words[category]) {
            allWords = [...allWords, ...gameState.words[category]];
        }
    });

    return allWords;
}

// Load the next question
function loadNextQuestion() {
    try {
        // Handle different game modes
        if (gameState.gameMode === 'quiz') {
            // Quiz mode logic - enhanced shuffling algorithm
            if (gameState.quizWords.length === 0) {
                // All words have been answered correctly, end the game
                endGame();
                return;
            }

            // Get the next word
            const nextWordIndex = Math.floor(Math.random() * gameState.quizWords.length);
            const nextWord = gameState.quizWords[nextWordIndex];
            
            // Remove the word from the quiz words array
            gameState.quizWords.splice(nextWordIndex, 1);
            
            // Set as current question
            gameState.currentQuestion = nextWord;
        } else {
            // Endless and timed modes
            const allWords = getAllSelectedWords();
            if (allWords.length === 0) {
                showErrorMessage('No words available. Please select more categories.');
                returnToMainMenu();
                return;
            }

            // Get a random word that's different from the current one
            let nextWord;
            do {
                nextWord = allWords[Math.floor(Math.random() * allWords.length)];
            } while (gameState.currentQuestion && nextWord.index === gameState.currentQuestion.index);

            // Set as current question
            gameState.currentQuestion = nextWord;
        }

        // Record start time for time bonus calculation
        gameState.questionStartTime = Date.now();

        // Display the new question
        displayQuestion();
    } catch (error) {
        console.error('Error loading next question:', error);
        showErrorMessage('Failed to load next question. Please try again.');
    }
}

// Display the current question
function displayQuestion() {
    try {
        // Check if currentQuestion exists
        if (!gameState.currentQuestion) {
            console.error('Error: currentQuestion is null or undefined');
            showErrorMessage('Failed to load question. Please try again.');
            return;
        }

        // Display the word based on language mode - for Alphabet, just show the symbol/letter
        if (gameState.languageMode === 'korean') {
            // Get just the letter without name/sound for Alphabet
            currentWordDisplay.textContent = gameState.currentQuestion.korean;
        } else {
            // For English, just show the single letter for Alphabet
            currentWordDisplay.textContent = gameState.currentQuestion.english;
        }

        // Clear previous answer options
        answersContainer.innerHTML = '';

        // Add new answer options
        let correctOption;
        
        // For Alphabet, we need to use the pronunciation mappings
        if (gameState.selectedBin === 'Alphabet') {
            if (gameState.languageMode === 'korean') {
                // For Korean mode, the correct answer is the Korean pronunciation
                correctOption = gameState.currentQuestion.korean_pronunciation || gameState.currentQuestion.english;
            } else {
                // For English mode, the correct answer is the English pronunciation
                correctOption = gameState.currentQuestion.english_pronunciation || gameState.currentQuestion.korean;
            }
        } else {
            // For Words and Phrases, use the normal language mapping
            correctOption = gameState.languageMode === 'korean' 
                ? gameState.currentQuestion.english 
                : gameState.currentQuestion.korean;
        }
        
        const incorrectOptions = generateIncorrectOptions(gameState.currentQuestion, getAllSelectedWords());
        const options = shuffleArray([correctOption, ...incorrectOptions]);

        options.forEach(option => {
            const answerOption = document.createElement('div');
            answerOption.className = 'answer-option';
            answerOption.textContent = option;
            answerOption.setAttribute('data-value', option);
            answerOption.addEventListener('click', () => checkAnswer(option));
            answersContainer.appendChild(answerOption);
        });

        // Play the word sound
        playCurrentWordSound();
    } catch (error) {
        console.error('Error displaying question:', error);
        showErrorMessage('Failed to display question. Please try again.');
    }
}

// Play the current word's sound
function playCurrentWordSound() {
    if (!gameState.currentQuestion) return;
    
    // Get the audio paths based on the language mode
    let audioPath, nameAudioPath;
    
    if (gameState.languageMode === 'korean') {
        audioPath = gameState.currentQuestion.audioKo;
        nameAudioPath = gameState.currentQuestion.audioKoName;
    } else {
        audioPath = gameState.currentQuestion.audioEn;
        nameAudioPath = gameState.currentQuestion.audioEnName;
    }
    
    // For alphabet, check if there's a "name" audio that should play first
    if (gameState.selectedBin === 'Alphabet' && nameAudioPath) {
        // First play the name
        const nameAudio = new Audio(nameAudioPath);
        nameAudio.volume = 1.0;
        
        // Add event listener for when name audio ends
        nameAudio.addEventListener('ended', () => {
            // Wait 0.5 seconds, then play the sound
            setTimeout(() => {
                // Play the regular sound after the name
                audioPlayer.src = audioPath;
                audioPlayer.play().catch(error => {
                    console.warn(`Error playing sound audio: ${error.message}`);
                });
            }, 500); // 0.5 second pause
            
            // Clean up this audio resource
            nameAudio.src = '';
        });
        
        // Play the name audio
        nameAudio.play().catch(error => {
            console.warn(`Error playing name audio: ${error.message}`);
            
            // If name audio fails, fall back to regular audio
            audioPlayer.src = audioPath;
            audioPlayer.play().catch(err => {
                console.warn(`Error playing fallback audio: ${err.message}`);
            });
        });
        
        return;
    }
    
    // Regular audio playback for non-alphabet or if alphabet enhancement fails
    audioPlayer.src = audioPath;
    audioPlayer.play().catch(error => {
        console.warn(`Error playing audio: ${error.message}`);
    });
}

// Check the selected answer
function checkAnswer(selectedOption) {
    let correctOption;
    
    // For Alphabet, we need to use the pronunciation mappings
    if (gameState.selectedBin === 'Alphabet') {
        if (gameState.languageMode === 'korean') {
            // For Korean mode, the correct answer is the Korean pronunciation
            correctOption = gameState.currentQuestion.korean_pronunciation || gameState.currentQuestion.english;
        } else {
            // For English mode, the correct answer is the English pronunciation
            correctOption = gameState.currentQuestion.english_pronunciation || gameState.currentQuestion.korean;
        }
    } else {
        // For Words and Phrases, use the normal language mapping
        correctOption = gameState.languageMode === 'korean' 
            ? gameState.currentQuestion.english 
            : gameState.currentQuestion.korean;
    }
    
    const isCorrect = selectedOption === correctOption;
    
    // Increment total questions
    gameState.totalQuestions++;
    
    if (isCorrect) {
        // Play correct sound
        playSound('correct');
        
        // Calculate time bonus (max 50 points, min 0)
        const timeElapsed = Date.now() - gameState.questionStartTime;
        const timeBonus = Math.max(0, Math.floor(50 - (timeElapsed / 100)));
        
        // Award points (100 base + time bonus)
        const pointsAwarded = 100 + timeBonus;
        gameState.score += pointsAwarded;
        
        // Increment correct answers counter
        gameState.correctAnswers++;
        
        // Handle quiz mode
        if (gameState.gameMode === 'quiz') {
            // Add to correctly answered words if not already there
            if (!isWordCorrectlyAnswered(gameState.currentQuestion)) {
                gameState.correctlyAnsweredWords.push(gameState.currentQuestion);
            }
        }
        
        // Update displays
        updateScoreDisplay();
        if (gameState.gameMode === 'quiz') {
            updateProgressDisplay();
        }
        
        // Show visual feedback
        const selectedElement = document.querySelector(`.answer-option[data-value="${selectedOption}"]`);
        selectedElement.classList.add('correct');
        
        // Disable further clicks
        document.querySelectorAll('.answer-option').forEach(option => {
            option.style.pointerEvents = 'none';
        });
        
        // Move to next question after a delay
        setTimeout(() => {
            loadNextQuestion();
        }, 1000);
    } else {
        // Play incorrect sound
        playSound('incorrect');
        
        // Calculate the point deduction (same as what a correct answer would give)
        const timeElapsed = Date.now() - gameState.questionStartTime;
        const timeBonus = Math.max(0, Math.floor(50 - (timeElapsed / 100)));
        const pointsDeducted = 100 + timeBonus;
        
        // Deduct points (but don't go below zero)
        gameState.score = Math.max(0, gameState.score - pointsDeducted);
        
        // Show visual feedback
        const selectedElement = document.querySelector(`.answer-option[data-value="${selectedOption}"]`);
        selectedElement.classList.add('incorrect');
        
        // Update score display
        updateScoreDisplay();
        
        // For quiz mode, add the current question back to the queue at a random position
        if (gameState.gameMode === 'quiz' && !isWordCorrectlyAnswered(gameState.currentQuestion)) {
            // Add the current word back to the quiz words array at a random position
            const randomPosition = Math.floor(Math.random() * (gameState.quizWords.length + 1));
            gameState.quizWords.splice(randomPosition, 0, gameState.currentQuestion);
        }
        
        // Disable further clicks
        document.querySelectorAll('.answer-option').forEach(option => {
            option.style.pointerEvents = 'none';
        });
        
        // Move to next question after a delay
        setTimeout(() => {
            loadNextQuestion();
        }, 1000);
    }
}

// Update the score display
function updateScoreDisplay() {
    scoreDisplay.textContent = gameState.score;
}

// Start continuous confetti generation
function startConfetti() {
    // Clear any existing interval
    stopConfetti();

    // Create initial batch of confetti
    createConfetti(50);

    // Set interval to continuously create more confetti
    gameState.confettiInterval = setInterval(() => {
        createConfetti(10);
    }, 1500);
}

// Stop confetti generation
function stopConfetti() {
    if (gameState.confettiInterval) {
        clearInterval(gameState.confettiInterval);
        gameState.confettiInterval = null;
    }

    // Remove any existing confetti
    document.querySelectorAll('.confetti').forEach(c => c.remove());
}

// End the game and show results
function endGame() {
    // Clear timer
    if (gameState.timer) {
        clearInterval(gameState.timer);
        gameState.timer = null;
    }

    // Clean up audio resources
    cleanupAudio();

    // Hide game screen
    gameScreen.style.display = 'none';

    // Update results
    finalScoreDisplay.textContent = gameState.score;

    const accuracy = gameState.totalQuestions > 0
        ? Math.round((gameState.correctAnswers / gameState.totalQuestions) * 100)
        : 0;

    accuracyDisplay.textContent = `${accuracy}%`;
    correctAnswersDisplay.textContent = gameState.correctAnswers;
    totalQuestionsDisplay.textContent = gameState.totalQuestions;

    // Show results screen
    resultsScreen.style.display = 'flex';

    // Start continuous confetti
    startConfetti();
}

// Create confetti animation
function createConfetti(count) {
    const colors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#A076F9', '#FF9F1C'];
    const shapes = ['circle', 'rectangle', 'triangle'];

    for (let i = 0; i < count; i++) {
        const confetti = document.createElement('div');
        const shape = shapes[Math.floor(Math.random() * shapes.length)];

        confetti.className = `confetti ${shape}`;
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.width = `${Math.random() * 15 + 5}px`;
        confetti.style.height = `${Math.random() * 15 + 5}px`;
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;

        // Add some rotation and movement variation
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;

        resultsScreen.appendChild(confetti);

        // Remove after animation completes to avoid memory issues
        setTimeout(() => {
            if (confetti.parentNode) {
                confetti.remove();
            }
        }, 5000);
    }
}

// Utility function to shuffle an array
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Generate incorrect options for the question
function generateIncorrectOptions(correctWord, allWords) {
    // We need 3 incorrect options
    let incorrectOptions = [];
    
    // Determine which property to use based on language mode and bin
    let targetProperty;
    
    if (gameState.selectedBin === 'Alphabet') {
        // For Alphabet, use pronunciation mappings
        targetProperty = gameState.languageMode === 'korean' ? 'korean_pronunciation' : 'english_pronunciation';
    } else {
        // For Words and Phrases, use normal language mapping
        targetProperty = gameState.languageMode === 'korean' ? 'english' : 'korean';
    }
    
    const correctOption = correctWord[targetProperty] || 
        (gameState.languageMode === 'korean' ? correctWord.english : correctWord.korean);
    
    // For the Alphabet bin, we need to make sure Korean pronunciations stay with Korean and English with English
    let availableWords;
    
    if (gameState.selectedBin === 'Alphabet') {
        // Filter words by category (consonants or vowels) to ensure proper grouping
        const correctWordCategory = gameState.selectedCategories.find(category => 
            gameState.words[category].some(word => 
                word.index === correctWord.index && 
                word.english === correctWord.english && 
                word.korean === correctWord.korean
            )
        );
        
        // Get words from the same category only
        if (correctWordCategory) {
            availableWords = gameState.words[correctWordCategory].filter(word => 
                word.index !== correctWord.index || 
                (word[targetProperty] || '') !== correctOption
            );
        } else {
            // Fallback if category can't be determined
            availableWords = allWords.filter(word => 
                word.index !== correctWord.index || 
                (word[targetProperty] || '') !== correctOption
            );
        }
    } else {
        // For non-alphabet bins, use standard filtering
        availableWords = allWords.filter(word => 
            word.index !== correctWord.index || 
            word[targetProperty] !== correctOption
        );
    }

    // If we don't have enough words, we'll need to create fewer options
    const numOptionsNeeded = Math.min(3, availableWords.length);

    // Randomly select incorrect options
    for (let i = 0; i < numOptionsNeeded; i++) {
        if (availableWords.length === 0) break;

        const randomIndex = Math.floor(Math.random() * availableWords.length);
        const selectedOption = availableWords[randomIndex][targetProperty] ||
            (gameState.languageMode === 'korean' ? availableWords[randomIndex].english : availableWords[randomIndex].korean);
        
        // Make sure we don't add duplicates
        if (!incorrectOptions.includes(selectedOption)) {
            incorrectOptions.push(selectedOption);
        }
        
        availableWords.splice(randomIndex, 1); // Remove the selected word
    }

    // If we still need more options, we'll have to reuse some words
    // (This is a fallback that shouldn't be needed in most cases)
    while (incorrectOptions.length < 3 && allWords.length > 1) {
        // Find words we haven't used yet if possible
        let remainingWords;
        
        if (gameState.selectedBin === 'Alphabet') {
            const correctWordCategory = gameState.selectedCategories.find(category => 
                gameState.words[category].some(word => 
                    word.index === correctWord.index && 
                    word.english === correctWord.english && 
                    word.korean === correctWord.korean
                )
            );
            
            // Try to get words from the same category
            if (correctWordCategory) {
                remainingWords = gameState.words[correctWordCategory].filter(word =>
                    word.index !== correctWord.index &&
                    (word[targetProperty] || '') !== correctOption && 
                    !incorrectOptions.includes(word[targetProperty] || '')
                );
            } else {
                remainingWords = allWords.filter(word =>
                    word.index !== correctWord.index &&
                    (word[targetProperty] || '') !== correctOption && 
                    !incorrectOptions.includes(word[targetProperty] || '')
                );
            }
        } else {
            remainingWords = allWords.filter(word =>
                word.index !== correctWord.index &&
                word[targetProperty] !== correctOption && 
                !incorrectOptions.includes(word[targetProperty])
            );
        }

        if (remainingWords.length > 0) {
            const randomIndex = Math.floor(Math.random() * remainingWords.length);
            const selectedOption = remainingWords[randomIndex][targetProperty] ||
                (gameState.languageMode === 'korean' ? remainingWords[randomIndex].english : remainingWords[randomIndex].korean);
                
            incorrectOptions.push(selectedOption);
        } else {
            // If we've exhausted all options, just pick something
            let randomWordsPool = gameState.selectedBin === 'Alphabet' ? gameState.words[gameState.selectedCategories[0]] : allWords;
            if (!randomWordsPool || randomWordsPool.length === 0) {
                randomWordsPool = allWords;
            }
            
            const randomWord = randomWordsPool[Math.floor(Math.random() * randomWordsPool.length)];
            const randomOption = randomWord[targetProperty] ||
                (gameState.languageMode === 'korean' ? randomWord.english : randomWord.korean);
            
            // Avoid adding the correct option or duplicates
            if (randomOption !== correctOption && !incorrectOptions.includes(randomOption)) {
                incorrectOptions.push(randomOption);
            }
        }
    }

    return incorrectOptions;
}

// Initialize the game when the page loads
window.addEventListener('load', initGame);