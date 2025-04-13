# System Patterns: Korean Language Learning Game

## Architecture Overview

The application follows a simple, module-based architecture with clear separation of concerns:

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│                 │     │                 │     │                 │
│   Game Setup    │────▶│   Game Logic    │────▶│    Results      │
│                 │     │                 │     │                 │
└─────────────────┘     └─────────────────┘     └─────────────────┘
        │                       │                       │
        │                       │                       │
        ▼                       ▼                       ▼
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   Config Data   │     │   Audio System  │     │  Score Tracking │
│   (JSON files)  │     │                 │     │                 │
└─────────────────┘     └─────────────────┘     └─────────────────┘
```

## Core Design Patterns

### State Management

- **Centralized State Object**: All game state is maintained in the `gameState` object
- **State-driven UI**: UI updates reflect changes in the game state
- **Immutable Operations**: State modifications through controlled functions

### Screen Flow Management

- **Single Page Application**: Different "screens" controlled by showing/hiding DOM elements
- **Linear Progression**: Setup → Game → Results with appropriate navigation options
- **State Preservation**: Game settings maintained when replaying

### Event-Driven Architecture

- **Event Delegation**: Parent elements handle events for dynamically created children
- **Asynchronous Processing**: Audio playback and UI updates managed asynchronously
- **User Input Handling**: Clear input → processing → feedback cycle

## Key Component Patterns

### Question Generation

1. Selects words based on chosen categories
2. Generates incorrect options that are plausible but distinct
3. Shuffles options for randomized presentation
4. Tracks question status for progression

### Audio Management

1. Preloads common sounds (correct/incorrect feedback)
2. Loads word-specific audio on demand
3. Provides playback control with error handling
4. Cleans up resources after use

### Scoring System

1. Base points for correct answers
2. Time bonuses for quick responses
3. Penalties for incorrect answers
4. Accumulates throughout game session

### Progress Tracking

1. Tracks unique words answered correctly
2. Maintains list of remaining words
3. Handles reshuffling of missed questions
4. Provides visual progress indication

## Planned System Extensions

### Flash Card System

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│                 │     │                 │     │                 │
│  Card Display   │────▶│  Card Flipping  │────▶│  Card Sorting   │
│                 │     │                 │     │                 │
└─────────────────┘     └─────────────────┘     └─────────────────┘
```

- Single card display with front/back sides
- User-controlled card flipping
- Self-assessment (correct/incorrect)
- Dynamic reshuffling based on performance

### Enhanced Question Shuffling

- Random insertion of failed questions into remaining queue
- True randomization to prevent predictable patterns
- Balancing of category representation
- Dynamic difficulty adjustment based on performance
