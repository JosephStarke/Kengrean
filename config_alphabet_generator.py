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

    # Process each base category (consonants, vowels)
    for base_category in unique_categories:
        # Initialize this category in the config
        if base_category not in config["words"]:
            config["words"][base_category] = []
        
        # Look for English category files
        english_category_dir = None
        english_category_name = f"english_{base_category}"
        if english_category_name in english_categories:
            english_category_dir = os.path.join(english_bin_dir, english_category_name)
            print(f"Found English category dir: {english_category_dir}")
        
        # Look for Korean category files
        korean_category_dir = None
        korean_category_name = f"korean_{base_category}"
        if korean_category_name in korean_categories:
            korean_category_dir = os.path.join(korean_bin_dir, korean_category_name)
            print(f"Found Korean category dir: {korean_category_dir}")
        
        # Get all English MP3 files (excluding name files)
        english_audio_files = []
        english_name_files = {}
        if english_category_dir and os.path.exists(english_category_dir):
            all_english_files = [
                f for f in os.listdir(english_category_dir)
                if f.lower().endswith(".mp3") and os.path.isfile(os.path.join(english_category_dir, f))
            ]
            
            # Separate regular sound files from name files
            for f in all_english_files:
                if "_name.mp3" in f:
                    # Store name files separately, keyed by their index
                    if len(f) > 3 and f[:3].isdigit():
                        english_name_files[f[:3]] = f
                elif f.lower().endswith(".mp3"):
                    english_audio_files.append(f)
                    
            print(f"Found {len(english_audio_files)} English sound files and {len(english_name_files)} name files for {base_category}")
        
        # Get all Korean MP3 files (excluding name files)
        korean_audio_files = []
        korean_name_files = {}
        if korean_category_dir and os.path.exists(korean_category_dir):
            all_korean_files = [
                f for f in os.listdir(korean_category_dir)
                if f.lower().endswith(".mp3") and os.path.isfile(os.path.join(korean_category_dir, f))
            ]
            
            # Separate regular sound files from name files
            for f in all_korean_files:
                if "_name.mp3" in f:
                    # Store name files separately, keyed by their index
                    if len(f) > 3 and f[:3].isdigit():
                        korean_name_files[f[:3]] = f
                elif f.lower().endswith(".mp3"):
                    korean_audio_files.append(f)
                    
            print(f"Found {len(korean_audio_files)} Korean sound files and {len(korean_name_files)} name files for {base_category}")
        
        # Create an index-based mapping for both English and Korean files
        english_file_map = {}
        for file in english_audio_files:
            if len(file) > 3 and file[:3].isdigit():
                index = file[:3]  # First 3 characters
                english_file_map[index] = file
        
        korean_file_map = {}
        for file in korean_audio_files:
            if len(file) > 3 and file[:3].isdigit():
                index = file[:3]  # First 3 characters
                korean_file_map[index] = file
        
        # Process all indexes found in either English or Korean files
        all_indexes = set(list(english_file_map.keys()) + list(korean_file_map.keys()))
        
        for index in sorted(all_indexes):
            english_file = english_file_map.get(index)
            korean_file = korean_file_map.get(index)
            english_name_file = english_name_files.get(index)
            korean_name_file = korean_name_files.get(index)
            
            # Create a new entry for this index
            entry = {
                "index": index,
                "english": "",
                "korean": "",
                "audioEn": "",
                "audioKo": "",
                "audioEnName": "",
                "audioKoName": ""
            }
            
            # Add English information if available
            if english_file:
                english_word = extract_word(english_file)
                entry["english"] = english_word
                entry["audioEn"] = f"{ENGLISH_DIR}/{BIN_NAME}/{english_category_name}/{english_file}"
                
                # Add English name file if available
                if english_name_file:
                    entry["audioEnName"] = f"{ENGLISH_DIR}/{BIN_NAME}/{english_category_name}/{english_name_file}"
            
            # Add Korean information if available
            if korean_file:
                korean_word = extract_word(korean_file)
                entry["korean"] = korean_word
                entry["audioKo"] = f"{KOREAN_DIR}/{BIN_NAME}/{korean_category_name}/{korean_file}"
                
                # Add Korean name file if available
                if korean_name_file:
                    entry["audioKoName"] = f"{KOREAN_DIR}/{BIN_NAME}/{korean_category_name}/{korean_name_file}"
            
            # Add to config
            config["words"][base_category].append(entry)
        
        print(f"Added {len(all_indexes)} entries for category '{base_category}'")

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
