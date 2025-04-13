# Technical Context: Korean Language Learning Game

## Technology Stack

### Frontend

- **HTML5**: Core structure
- **CSS3**: Styling and animations
- **Vanilla JavaScript**: All game logic and interactions
- **No frameworks/libraries**: Pure implementation for maximum control and minimal dependencies

### Data Storage

- **JSON Configuration Files**:
  - `alphabet_config.json`
  - `words_config.json`
  - `phrases_config.json`

### Media

- **MP3 Audio Files**:
  - Word/phrase pronunciation in both languages
  - UI feedback sounds

### Development Approach

- **Modular JavaScript**: Functions organized by purpose
- **Progressive Enhancement**: Core gameplay works without advanced features
- **Client-side Only**: No server requirements

## Technical Requirements

### Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ JavaScript support
- HTML5 Audio API support

### Data Format

Each configuration file follows this structure:

```json
{
  "categories": ["category1", "category2", ...],
  "words": {
    "category1": [
      {
        "index": 1,
        "korean": "한국어 단어",
        "english": "English word",
        "audioKo": "path/to/korean/audio.mp3",
        "audioEn": "path/to/english/audio.mp3"
      },
      ...
    ],
    "category2": [ ... ]
  }
}
```

### Audio System

- Format: MP3 (primary), with fallback to OGG where needed
- Preloading: Common sounds preloaded, word-specific loaded on demand
- Cleanup: Resources released after use to manage memory
- Alphabet Audio Structure:
  - Basic pronunciation: [character].mp3
  - Letter name audio: [character]\_name.mp3
  - Audio paths stored in the configuration files as audioKo and audioEn
- Audio Generation Workflow:
  1. Update configuration files first (using config generator scripts)
  2. Run audio generation scripts to create all necessary MP3 files
  3. Ensure all files follow the naming convention for proper playback

## Development Environment

### Tools

- Any modern text editor (VS Code recommended)
- Chrome DevTools for debugging
- Local server for testing (e.g., Python's SimpleHTTPServer or VS Code's Live Server)

### Project Structure

```
project/
├── script.js                 # Main game logic
├── style.css                 # Styling
├── index.html                # Main HTML file
├── alphabet_config.json      # Alphabet configuration
├── words_config.json         # Words configuration
├── phrases_config.json       # Phrases configuration
├── sounds/                   # Audio files directory
│   ├── correct.mp3           # Correct answer sound
│   ├── incorrect.mp3         # Incorrect answer sound
│   └── words/                # Word-specific audio files
│       ├── korean/           # Korean pronunciations
│       └── english/          # English pronunciations
└── config_generators/        # Python scripts to generate config files
    ├── config_alphabet_generator.py
    ├── config_words_generator.py
    └── config_phrases_generator.py
```

## Performance Considerations

### Audio Performance

- Limited concurrent audio playback
- Resource cleanup after audio completion
- Audio preloading for common sounds

### Animation Performance

- CSS-based animations for better performance
- Limited DOM updates during gameplay
- Efficient confetti generation and cleanup

### Memory Management

- Cleanup of event listeners when elements are removed
- Limiting total confetti particles
- Proper cleanup when switching between game modes
