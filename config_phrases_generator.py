#!/usr/bin/env python3

import os
import json
import re

# Configuration
BIN_NAME = "Phrases"
ENGLISH_DIR = "English"
KOREAN_DIR = "Korean"
CATEGORIES_DIR = "Categories"
CONFIG_FILE = "phrases_config.json"


def main():
    """
    Generate a configuration file by scanning directory structure for Phrases bin
    """
    print(f"Starting configuration file generation for {BIN_NAME} bin...")

    # Check if the Categories directory exists
    if not os.path.exists(os.path.join(CATEGORIES_DIR, BIN_NAME)):
        print(f"Warning: Directory '{os.path.join(CATEGORIES_DIR, BIN_NAME)}' not found.")
        print(f"Please make sure to add your text files to this directory, then run audio_generator.py first.")
        return

    # Full paths with bin name for output directories
    english_bin_dir = os.path.join(ENGLISH_DIR, BIN_NAME)
    korean_bin_dir = os.path.join(KOREAN_DIR, BIN_NAME)

    # Create directories if they don't exist
    os.makedirs(english_bin_dir, exist_ok=True)
    os.makedirs(korean_bin_dir, exist_ok=True)

    # Initialize configuration structure
    config = {"bin": BIN_NAME, "categories": [], "words": {}}

    # Get all categories (subdirectories under the bin directory)
    try:
        categories = [d for d in os.listdir(english_bin_dir) if os.path.isdir(os.path.join(english_bin_dir, d))]
        config["categories"] = categories
        print(f"Found {len(categories)} categories: {', '.join(categories)}")
    except FileNotFoundError:
        print(f"Warning: Directory '{english_bin_dir}' not found. Created it, but no categories found.")
        print(f"Please run audio_generator.py first to process your text files.")
        categories = []

    # Process each category
    for category in categories:
        english_category_dir = os.path.join(english_bin_dir, category)
        korean_category_dir = os.path.join(korean_bin_dir, category)

        # Create Korean category directory if it doesn't exist
        os.makedirs(korean_category_dir, exist_ok=True)

        # Initialize this category in the config
        config["words"][category] = []

        # Get all MP3 files in the English directory
        try:
            english_files = [
                f
                for f in os.listdir(english_category_dir)
                if f.lower().endswith(".mp3") and os.path.isfile(os.path.join(english_category_dir, f))
            ]
        except FileNotFoundError:
            print(f"Error: Directory '{english_category_dir}' not found. Skipping category.")
            continue

        # Get all MP3 files in the Korean directory
        try:
            korean_files = [
                f
                for f in os.listdir(korean_category_dir)
                if f.lower().endswith(".mp3") and os.path.isfile(os.path.join(korean_category_dir, f))
            ]
        except FileNotFoundError:
            print(f"Warning: Directory '{korean_category_dir}' not found or empty. Created it, but no files found.")
            korean_files = []

        # Create a map of Korean files by index
        korean_file_map = {}
        for file in korean_files:
            if len(file) > 3:
                index = file[:3]  # First 3 characters
                korean_file_map[index] = file

        # Process English files and match with Korean
        word_count = 0
        for english_file in english_files:
            if len(english_file) > 3:
                index = english_file[:3]  # First 3 characters

                # If we have a matching Korean file
                if index in korean_file_map:
                    korean_file = korean_file_map[index]

                    # Extract words from filenames
                    english_word = extract_word(english_file)
                    korean_word = extract_word(korean_file)

                    # Add to config
                    word_pair = {
                        "index": index,
                        "english": english_word,
                        "korean": korean_word,
                        "audioEn": f"{ENGLISH_DIR}/{BIN_NAME}/{category}/{english_file}",
                        "audioKo": f"{KOREAN_DIR}/{BIN_NAME}/{category}/{korean_file}",
                    }

                    config["words"][category].append(word_pair)
                    word_count += 1

        print(f"Category '{category}': Added {word_count} word pairs")

    # Write the configuration to a file
    with open(CONFIG_FILE, "w", encoding="utf-8") as f:
        json.dump(config, f, ensure_ascii=False, indent=2)

    print(f"Configuration file generated successfully: {CONFIG_FILE}")
    print(f"Total categories: {len(config['categories'])}")
    total_words = sum(len(words) for words in config["words"].values())
    print(f"Total word pairs: {total_words}")


def extract_word(filename):
    """
    Extract the word from a filename like "000_Hello.mp3" -> "Hello"
    """
    # Remove the file extension
    name_without_ext = os.path.splitext(filename)[0]

    # Remove the index prefix (e.g., "000_")
    if len(name_without_ext) > 4 and name_without_ext[3] == "_":
        word = name_without_ext[4:]
    else:
        word = name_without_ext

    # Replace underscores with spaces
    word = word.replace("_", " ")

    return word


if __name__ == "__main__":
    main()
