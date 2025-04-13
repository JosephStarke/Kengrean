# Korean Language Learning Game - Project Brief

## Overview

A web-based language learning game focused on helping users learn Korean vocabulary and phrases through interactive quiz modes. The game offers multiple learning methods with instant audio feedback and a gamified scoring system.

## Core Requirements

### Content Types

- Alphabet learning (Korean characters with pronunciation)
- Word learning (vocabulary categorized by themes)
- Phrase learning (useful expressions organized by context)

### Game Modes

- **Quiz Mode:** Users work through a set of questions until they correctly answer all words
- **Endless Mode:** Users can practice indefinitely without time constraints
- **Timed Mode:** Users answer as many questions as possible within a time limit
- **Flash Card Mode** (to be implemented): Users view cards with Korean on one side and English on the other

### Language Options

- Korean to English (show Korean, answer in English)
- English to Korean (show English, answer in Korean)

### Features

- Audio pronunciation for all content
- Multiple-choice answers
- Score tracking based on correct answers and response time
- Progress tracking for quiz mode
- Visual and audio feedback for correct/incorrect answers
- Categorized content for focused learning

## Enhancement Requirements

1. Improve quiz mode question shuffling to better handle failed questions
2. Implement the new flash card system with ability to mark cards as correct/failed and reshuffle
3. Enhance audio system for alphabet to include letter name followed by sound
4. Maintain consistent functionality between Korean→English and English→Korean modes

## Technical Constraints

- Pure JavaScript implementation (no frameworks)
- Configuration stored in JSON files
- Audio files for all content items in both languages
- Responsive design for multiple devices
