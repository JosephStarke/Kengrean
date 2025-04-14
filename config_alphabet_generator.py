#!/usr/bin/env python3

import os
import json
import re

# Configuration
BIN_NAME = "Alphabet"
ENGLISH_DIR = "English"
KOREAN_DIR = "Korean"
CATEGORIES_DIR = "Categories"
CONFIG_FILE = "alphabet_config.json"


def main():
    """
    Generate a configuration file by scanning directory structure for Alphabet bin
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
        english_categories = [d for d in os.listdir(english_bin_dir) if os.path.isdir(os.path.join(english_bin_dir, d))]
        korean_categories = [d for d in os.listdir(korean_bin_dir) if os.path.isdir(os.path.join(korean_bin_dir, d))]
        
        # Get unique category names (without english_/korean_ prefix)
        unique_categories = []
        for category in english_categories + korean_categories:
            # Get base category name (consonants, vowels)
            if category.startswith("english_") or category.startswith("korean_"):
                base_category = category.replace("english_", "").replace("korean_", "")
                if base_category not in unique_categories:
                    unique_categories.append(base_category)
            else:
                # For non-prefixed categories
                if category not in unique_categories:
                    unique_categories.append(category)
        
        config["categories"] = unique_categories
        print(f"Found categories: {', '.join(unique_categories)}")
    except FileNotFoundError:
        print(f"Warning: Directories not found. Please run audio_generator.py first to process your text files.")
        return
    
    # Now iterate through the categories directory to read actual symbol mappings
    for category in unique_categories:
        config["words"][category] = []
        
        # English alphabet files
        english_category_file = os.path.join(CATEGORIES_DIR, BIN_NAME, f"english_{category}.txt")
        if os.path.exists(english_category_file):
            with open(english_category_file, 'r', encoding='utf-8') as f:
                lines = f.readlines()
                
                for index, line in enumerate(lines):
                    line = line.strip()
                    if not line:
                        continue
                    
                    # Format should be "letter, pronunciation"
                    parts = line.split(',', 1)
                    english_letter = parts[0].strip()
                    # Use the pronunciation if available, otherwise use the letter
                    english_pronunciation = parts[1].strip() if len(parts) > 1 else english_letter
                    
                    # Generate audio paths
                    index_str = f"{index:03d}"
                    
                    entry = {
                        "index": index_str,
                        "english": english_letter,
                        "english_pronunciation": english_pronunciation,
                        "korean": "",
                        "korean_pronunciation": "",
                        "audioEn": f"English/Alphabet/english_{category}/{index_str}_{english_letter}.mp3",
                        "audioEnName": f"English/Alphabet/english_{category}/{index_str}_{english_letter}_name.mp3",
                        "audioKo": "",
                        "audioKoName": ""
                    }
                    
                    config["words"][category].append(entry)
        
        # Korean alphabet files
        korean_category_file = os.path.join(CATEGORIES_DIR, BIN_NAME, f"korean_{category}.txt")
        if os.path.exists(korean_category_file):
            with open(korean_category_file, 'r', encoding='utf-8') as f:
                lines = f.readlines()
                
                for index, line in enumerate(lines):
                    line = line.strip()
                    if not line:
                        continue
                    
                    # Format should be "letter, pronunciation"
                    parts = line.split(',', 1)
                    korean_letter = parts[0].strip()
                    # Use the pronunciation if available, otherwise use the letter
                    korean_pronunciation = parts[1].strip() if len(parts) > 1 else korean_letter
                    
                    # Generate audio paths
                    index_str = f"{index:03d}"
                    
                    # Check if we already have an entry at this index
                    if index < len(config["words"][category]):
                        # Update existing entry with Korean info
                        config["words"][category][index]["korean"] = korean_letter
                        config["words"][category][index]["korean_pronunciation"] = korean_pronunciation
                        config["words"][category][index]["audioKo"] = f"Korean/Alphabet/korean_{category}/{index_str}_{korean_letter}.mp3"
                        config["words"][category][index]["audioKoName"] = f"Korean/Alphabet/korean_{category}/{index_str}_{korean_letter}_name.mp3"
                    else:
                        # Create new entry with just Korean info
                        entry = {
                            "index": index_str,
                            "english": "",
                            "english_pronunciation": "",
                            "korean": korean_letter,
                            "korean_pronunciation": korean_pronunciation,
                            "audioEn": "",
                            "audioEnName": "",
                            "audioKo": f"Korean/Alphabet/korean_{category}/{index_str}_{korean_letter}.mp3",
                            "audioKoName": f"Korean/Alphabet/korean_{category}/{index_str}_{korean_letter}_name.mp3"
                        }
                        config["words"][category].append(entry)
    
    # Write the config to a JSON file
    with open(CONFIG_FILE, 'w', encoding='utf-8') as f:
        json.dump(config, f, ensure_ascii=False, indent=2)

    print(f"Configuration file generated successfully: {CONFIG_FILE}")
    print(f"Total categories: {len(config['categories'])}")
    total_words = sum(len(words) for words in config["words"].values())
    print(f"Total word pairs: {total_words}")


if __name__ == "__main__":
    main()
