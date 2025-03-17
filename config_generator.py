#!/usr/bin/env python3

import os
import json
import re

# Configuration
ENGLISH_DIR = "English Words"
KOREAN_DIR = "Korean Words"
CONFIG_FILE = "word_config.json"


def main():
    """
    Generate a configuration file by scanning directory structure
    """
    print(f"Starting configuration file generation...")

    # Initialize configuration structure
    config = {"categories": [], "words": {}}

    # Get all categories (subdirectories of English Words)
    try:
        categories = [d for d in os.listdir(ENGLISH_DIR) if os.path.isdir(os.path.join(ENGLISH_DIR, d))]
        config["categories"] = categories
        print(f"Found {len(categories)} categories: {', '.join(categories)}")
    except FileNotFoundError:
        print(f"Error: Directory '{ENGLISH_DIR}' not found. Make sure it exists in the same directory as this script.")
        return

    # Process each category
    for category in categories:
        english_category_dir = os.path.join(ENGLISH_DIR, category)
        korean_category_dir = os.path.join(KOREAN_DIR, category)

        # Initialize this category in the config
        config["words"][category] = []

        # Skip if Korean directory doesn't exist
        if not os.path.exists(korean_category_dir):
            print(f"Warning: Korean category directory '{korean_category_dir}' not found. Skipping.")
            continue

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
            print(f"Error: Directory '{korean_category_dir}' not found. Skipping category.")
            continue

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
                        "audioEn": f"{ENGLISH_DIR}/{category}/{english_file}",
                        "audioKo": f"{KOREAN_DIR}/{category}/{korean_file}",
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
