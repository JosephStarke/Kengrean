# Active Context: Korean Language Learning Game

## Current Focus

We have implemented the following enhancements to the Korean Language Learning Game:

1. **Flash Card Game Mode**

   - Created a traditional flash card learning approach as an alternative to quiz modes
   - Implemented user self-assessment of correct/incorrect responses
   - Added card sorting and reshuffling based on performance
   - Integrated with existing category selection mechanism
   - Added card flip animation and user controls

2. **Enhanced Question Shuffling Algorithm**

   - Improved how failed questions are reintroduced into the question pool
   - Implemented true randomization using random insertion points
   - Balanced category representation within shuffled questions
   - Created a more efficient and unpredictable shuffling pattern

3. **Audio System Enhancement**
   - Added support for alphabet letter name followed by sound
   - Implemented 0.5 second pause between name and sound
   - Ensured consistent behavior across language modes
   - Added fallback mechanisms for audio failures

## Recent Changes

The game now has:

- Four functioning game modes (Quiz, Endless, Timed, Flash Cards)
- Enhanced quiz mode algorithm for more effective learning
- Improved audio system for more comprehensive pronunciation learning
- Flash card mode for self-paced learning
- Complete audio system for word pronunciation
- Scoring system with time bonuses
- Full question generation and answer validation
- Visual and audio feedback for answers
- Working category selection system
- Configuration system using JSON files

## Implementation Details

### Flash Card Mode

- Card Interface: Single-card display with 3D flip animation
- Interaction: Click to flip, buttons for correct/incorrect marking
- Progress Tracking: Counters for cards seen and marked correct
- Audio: Pronunciation support with same capabilities as quiz modes
- Category Selection: Reuses existing category selection mechanism
- Reshuffling: Incorrect cards are automatically reshuffled when all cards have been seen

### Question Shuffling Algorithm

- Randomization Strategy: Removed sequential processing in favor of true randomization
- Failed Question Handling: Random insertion into question queue
- Distribution Control: Ensures failed questions aren't bunched at the end
- Implementation: Modified existing quiz mode logic without disrupting other modes

### Audio System Enhancement

- Alphabet Pronunciation: Letter name followed by sound
- Timing: 0.5 second pause between name and sound
- Fallback: If enhanced audio fails, falls back to basic audio
- Consistent Behavior: Works the same in both language modes
- Audio Requirements: For each alphabet letter, we need:
  - Korean→English mode: Korean letter name audio file and Korean letter sound audio file
  - English→Korean mode: English pronunciation audio file
- File Naming Convention: Base audio file plus "\_name.mp3" suffix for letter name audio (e.g., "ㄱ.mp3" and "ㄱ\_name.mp3")
- Audio Generation Process: Update config files first, then run audio generation scripts to create all necessary files

## Future Enhancements

1. **User Experience Improvements**

   - Save user preferences across sessions
   - Add difficulty levels
   - Implement streak bonuses
   - Add visual themes/customization

2. **Content Expansion**

   - Add more vocabulary categories
   - Include grammar patterns
   - Support additional Korean learning concepts

3. **Performance Optimizations**
   - Improve audio loading and caching
   - Optimize animations for lower-end devices
   - Reduce memory usage for long sessions
