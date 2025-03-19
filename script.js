// Game state
const gameState = {
    languageMode: 'korean', // 'korean' or 'english'
    gameMode: 'endless', // 'endless' or 'timed'
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
    questionStartTime: 0
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
const binsContainer = document.getElementById('bins-container');
const categoriesContainer = document.getElementById('categories-container');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time-display');
const timeValue = document.getElementById('time');
const currentWordDisplay = document.getElementById('current-word');
const playSoundBtn = document.getElementById('play-sound');
const answersContainer = document.getElementById('answers-container');

// Result elements
const finalScoreDisplay = document.getElementById('final-score');
const accuracyDisplay = document.getElementById('accuracy');
const correctAnswersDisplay = document.getElementById('correct-answers');
const totalQuestionsDisplay = document.getElementById('total-questions');

// Audio element for playing mp3s
const audioPlayer = new Audio();

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
        document.querySelectorAll('.bin-item').forEach(item => {
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
        categoryBubble.textContent = category.charAt(0).toUpperCase() + category.slice(1);

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
    // Language mode buttons
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            gameState.languageMode = btn.id === 'mode-korean' ? 'korean' : 'english';
        });
    });

    // Game mode buttons
    document.querySelectorAll('.game-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.game-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            gameState.gameMode = btn.id === 'game-endless' ? 'endless' : 'timed';
            timeDisplay.style.display = gameState.gameMode === 'timed' ? 'block' : 'none';
        });
    });

    // Bin selection
    document.addEventListener('click', function (event) {
        const binItem = event.target.closest('.bin-item');
        if (binItem) {
            const binName = binItem.dataset.bin;
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
        resultsScreen.style.display = 'none';
        setupScreen.style.display = 'block';
        resetGame();
    });

    // Main Menu buttons
    document.querySelectorAll('.main-menu-btn').forEach(btn => {
        btn.addEventListener('click', returnToMainMenu);
    });
}

// Return to main menu
function returnToMainMenu() {
    // Stop any ongoing game
    if (gameState.timer) {
        clearInterval(gameState.timer);
        gameState.timer = null;
    }

    // Hide game and results screens
    gameScreen.style.display = 'none';
    resultsScreen.style.display = 'none';

    // Show setup screen
    setupScreen.style.display = 'block';

    // Reset game state
    resetGame();
}

// Show error message to the user
function showErrorMessage(message) {
    alert(message);
}

// Start the game
function startGame() {
    setupScreen.style.display = 'none';
    gameScreen.style.display = 'flex';

    // Reset game state
    resetGame();

    // Initialize score display
    updateScoreDisplay();

    // Show/hide timer based on game mode
    timeDisplay.style.display = gameState.gameMode === 'timed' ? 'block' : 'none';

    // Start timer if in timed mode
    if (gameState.gameMode === 'timed') {
        startTimer();
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

    if (gameState.timer) {
        clearInterval(gameState.timer);
        gameState.timer = null;
    }

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
    // Get all words from selected categories
    const allWords = getAllSelectedWords();

    // Make sure we have words to choose from
    if (allWords.length === 0) {
        console.error('No words available in the selected categories');
        showErrorMessage('No words available in the selected categories. Please select different categories or check your file structure.');
        endGame();
        return;
    }

    // Randomly select a word
    const randomIndex = Math.floor(Math.random() * allWords.length);
    const selectedWord = allWords[randomIndex];

    // Generate incorrect options
    const incorrectOptions = generateIncorrectOptions(selectedWord, allWords);

    // Store current question
    gameState.currentQuestion = {
        word: selectedWord,
        options: shuffleArray([selectedWord, ...incorrectOptions])
    };

    // Update the UI
    displayQuestion();

    // Record question start time
    gameState.questionStartTime = Date.now();
}

// Generate incorrect options for the question
function generateIncorrectOptions(correctWord, allWords) {
    // We need 3 incorrect options
    let options = [];

    // Filter out the correct word and make a copy to avoid modifying the original
    let availableWords = allWords.filter(word =>
        word.index !== correctWord.index ||
        word.english !== correctWord.english ||
        word.korean !== correctWord.korean
    );

    // If we don't have enough words, we'll need to create fewer options
    const numOptionsNeeded = Math.min(3, availableWords.length);

    // Randomly select incorrect options
    for (let i = 0; i < numOptionsNeeded; i++) {
        if (availableWords.length === 0) break;

        const randomIndex = Math.floor(Math.random() * availableWords.length);
        options.push(availableWords[randomIndex]);
        availableWords.splice(randomIndex, 1); // Remove the selected word
    }

    // If we still need more options, we'll have to reuse some words
    // (This is a fallback that shouldn't be needed in most cases)
    while (options.length < 3 && allWords.length > 1) {
        // Find a word we haven't used yet if possible
        const remainingWords = allWords.filter(word =>
            word.index !== correctWord.index &&
            !options.some(o => o.index === word.index)
        );

        if (remainingWords.length > 0) {
            const randomIndex = Math.floor(Math.random() * remainingWords.length);
            options.push(remainingWords[randomIndex]);
        } else {
            // If we've used all words, just pick random ones (avoiding duplicates)
            const randomWord = allWords[Math.floor(Math.random() * allWords.length)];
            if (randomWord.index !== correctWord.index &&
                !options.some(o => o.index === randomWord.index)) {
                options.push(randomWord);
            }
        }
    }

    return options;
}

// Display the current question
function displayQuestion() {
    const { word, options } = gameState.currentQuestion;

    // Display the word
    if (gameState.languageMode === 'korean') {
        currentWordDisplay.textContent = word.korean;
    } else {
        currentWordDisplay.textContent = word.english;
    }

    // Clear previous answer options
    answersContainer.innerHTML = '';

    // Add new answer options
    options.forEach(option => {
        const answerOption = document.createElement('div');
        answerOption.className = 'answer-option';

        if (gameState.languageMode === 'korean') {
            // Korean mode: show English options
            answerOption.textContent = option.english;
        } else {
            // English mode: show Korean options
            answerOption.textContent = option.korean;
        }

        answerOption.addEventListener('click', () => checkAnswer(option));
        answersContainer.appendChild(answerOption);
    });

    // Play the word sound
    playCurrentWordSound();
}

// Play the sound for the current word
function playCurrentWordSound() {
    const { word } = gameState.currentQuestion;
    let audioPath;

    if (gameState.languageMode === 'korean') {
        audioPath = word.audioKo;
    } else {
        audioPath = word.audioEn;
    }

    // Play the audio file
    audioPlayer.src = audioPath;

    audioPlayer.onerror = () => {
        console.warn(`Could not load audio: ${audioPath}`);
    };

    audioPlayer.play().catch(error => {
        console.warn(`Error playing audio: ${error.message}`);
    });

    // Add visual feedback
    const audioBtn = document.getElementById('play-sound');
    audioBtn.classList.add('active');
    setTimeout(() => {
        audioBtn.classList.remove('active');
    }, 300);
}

// Play sound effects
function playSound(type) {
    const audio = new Audio();

    if (type === 'correct') {
        audio.src = 'sounds/correct.mp3';
    } else if (type === 'incorrect') {
        audio.src = 'sounds/incorrect.mp3';
    }

    audio.play().catch(() => { });
}

// Check if the selected answer is correct
function checkAnswer(selectedOption) {
    const { word } = gameState.currentQuestion;
    const isCorrect = (
        gameState.languageMode === 'korean' && selectedOption.english === word.english ||
        gameState.languageMode === 'english' && selectedOption.korean === word.korean
    );

    // Increment total questions
    gameState.totalQuestions++;

    // Find the selected answer element
    const selectedElement = [...document.querySelectorAll('.answer-option')]
        .find(el => el.textContent === (gameState.languageMode === 'korean' ? selectedOption.english : selectedOption.korean));

    // Find the correct answer element
    const correctElement = [...document.querySelectorAll('.answer-option')]
        .find(el => el.textContent === (gameState.languageMode === 'korean' ? word.english : word.korean));

    if (isCorrect) {
        // Correct answer
        selectedElement.classList.add('correct');
        gameState.correctAnswers++;

        // Calculate score based on time taken
        const timeTaken = (Date.now() - gameState.questionStartTime) / 1000;
        const timeBonus = Math.max(0, 5 - Math.floor(timeTaken));
        const pointsEarned = 10 + timeBonus;

        gameState.score += pointsEarned;
        createConfetti(20); // Celebrate with confetti
        playSound('correct'); // Play correct sound
    } else {
        // Incorrect answer
        selectedElement.classList.add('incorrect');
        correctElement.classList.add('correct');

        // Penalty for wrong answer
        gameState.score = Math.max(0, gameState.score - 5);
        playSound('incorrect'); // Play incorrect sound
    }

    // Update score display
    updateScoreDisplay();

    // Disable all options
    document.querySelectorAll('.answer-option').forEach(option => {
        option.style.pointerEvents = 'none';
    });

    // Load next question after a delay (80% of original 1500ms = 1200ms)
    setTimeout(() => {
        if (gameState.gameMode === 'endless' || (gameState.gameMode === 'timed' && gameState.timeRemaining > 0)) {
            loadNextQuestion();
        } else if (gameState.gameMode === 'timed' && gameState.timeRemaining <= 0) {
            endGame();
        }
    }, 1200);
}

// Update the score display
function updateScoreDisplay() {
    scoreDisplay.textContent = gameState.score;
}

// End the game and show results
function endGame() {
    // Clear timer
    if (gameState.timer) {
        clearInterval(gameState.timer);
        gameState.timer = null;
    }

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

    // Create confetti for celebration
    createConfetti(100);
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

        document.body.appendChild(confetti);

        // Remove after animation completes
        setTimeout(() => {
            confetti.remove();
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

// Initialize the game when the page loads
window.addEventListener('load', initGame);