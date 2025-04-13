import os
import time
import glob
import re
import shutil
from gtts import gTTS

# =============== CONFIGURATION ===============
# Input directory for category files
CATEGORIES_DIR = "Categories"

# Output directories
KOREAN_DIR = "Korean"
ENGLISH_DIR = "English"

# Target bin to process: "Alphabet", "Words", "Phrases", or "ALL"
# Change this to focus on only one bin at a time
TARGET_BIN = "Alphabet"  # Options: "Alphabet", "Words", "Phrases", or "ALL"

# Sound examples for English consonants to generate proper sounds
ENGLISH_CONSONANT_SOUND_EXAMPLES = {
    'b': 'buh',
    'c': 'kuh',
    'd': 'duh',
    'f': 'fuh',
    'g': 'guh',
    'h': 'huh',
    'j': 'juh',
    'k': 'kuh',
    'l': 'luh',
    'm': 'muh',
    'n': 'nuh',
    'p': 'puh',
    'q': 'kwuh',    # 'q' sounds like "kw"
    'r': 'ruh',
    's': 'suh',
    't': 'tuh',
    'v': 'vuh',
    'w': 'wuh',
    'x': 'ksuh',    # pronounced as "ks"
    'y': 'yuh',
    'z': 'zuh'
}

# Sound examples for English vowels to generate proper sounds
ENGLISH_VOWEL_SOUND_EXAMPLES = {
    'a': 'ah',              # as in "father"
    'e': 'eh',              # as in "pen"
    'i': 'ih',              # as in "sit"
    'o': 'aw',              # as in "hot"
    'u': 'uh',              # as in "cup"

    'a (as in cake)': 'ay',
    'e (as in me)': 'ee',
    'i (as in ride)': 'eye',
    'o (as in go)': 'oh',
    'u (as in flute)': 'oo',

    'a (as in cat)': 'ae',
    'e (as in pen)': 'eh',
    'i (as in sit)': 'ih',
    'o (as in hot)': 'aw',
    'u (as in cup)': 'uh',

    'ai (as in rain)': 'ay',
    'au (as in haul)': 'aw',
    'aw (as in saw)': 'aw',
    'ea (as in eat)': 'ee',
    'ei (as in eight)': 'ay',
    'ie (as in field)': 'ee',
    'oa (as in boat)': 'oh',
    'oi (as in coin)': 'oy',
    'oo (as in moon)': 'oo',
    'ou (as in house)': 'ow',
    'ow (as in cow)': 'ow',
    'ue (as in blue)': 'oo',
    'ui (as in fruit)': 'oo-ee',
    'y (as in my)': 'eye',
    'y (as in happy)': 'ee'
}

# Sound examples for Korean consonants with vowel to make them audible
KOREAN_CONSONANT_SOUND_EXAMPLES = {
    'ㄱ': '가',
    'ㄲ': '까',
    'ㄴ': '나',
    'ㄷ': '다',
    'ㄸ': '따',
    'ㄹ': '라',
    'ㅁ': '마',
    'ㅂ': '바',
    'ㅃ': '빠',
    'ㅅ': '사',
    'ㅆ': '싸',
    'ㅇ': '아',  # placeholder, used only when consonant is final or vowel-initial
    'ㅈ': '자',
    'ㅉ': '짜',
    'ㅊ': '차',
    'ㅋ': '카',
    'ㅌ': '타',
    'ㅍ': '파',
    'ㅎ': '하'
}

# Sound examples for Korean vowels
KOREAN_VOWEL_SOUND_EXAMPLES = {
    'ㅏ': '아',
    'ㅐ': '애',
    'ㅑ': '야',
    'ㅒ': '얘',
    'ㅓ': '어',
    'ㅔ': '에',
    'ㅕ': '여',
    'ㅖ': '예',
    'ㅗ': '오',
    'ㅘ': '와',
    'ㅙ': '왜',
    'ㅚ': '외',
    'ㅛ': '요',
    'ㅜ': '우',
    'ㅝ': '워',
    'ㅞ': '웨',
    'ㅟ': '위',
    'ㅠ': '유',
    'ㅡ': '으',
    'ㅢ': '의',
    'ㅣ': '이'
}

# =============== CODE ===============


def parse_line(line):
    """
    Parse a line of text in various formats and extract Korean and English.
    Supported formats:
    1. 안녕하세요 → Hello
    2. 안녕하세요 Hello
    3. 안녕하세요, Hello
    4. 안녕하세요,Hello
    """
    line = line.strip()
    if not line:
        return None

    # Format 1: With arrows (→)
    if "→" in line:
        parts = [part.strip() for part in line.split("→")]
        if len(parts) >= 2:
            return parts[0], parts[1]

    # Format 3 & 4: Comma-separated (with or without spaces)
    elif "," in line:
        parts = [part.strip() for part in line.split(",")]
        if len(parts) >= 2:
            return parts[0], parts[1]

    # Format 2: Space-separated (this might cause issues with multi-word items)
    else:
        # Try to determine where Korean ends and English begins
        # Korean characters are in the range U+AC00 to U+D7A3
        korean_chars = []
        non_korean_start = 0

        for i, char in enumerate(line):
            if "\uac00" <= char <= "\ud7a3" or char.isspace() or char in ".,?!":
                korean_chars.append(char)
                non_korean_start = i + 1
            else:
                break

        # If we found any Korean characters, split at that point
        if korean_chars and non_korean_start < len(line):
            korean_text = "".join(korean_chars).strip()
            english_text = line[non_korean_start:].strip()

            if korean_text and english_text:
                return korean_text, english_text

    # If we can't parse the line properly
    return None


def get_next_file_number(directory):
    """
    Find the highest file number in the directory and return the next number.
    Files are expected to have names like: 000_filename.mp3, 001_filename.mp3, etc.
    """
    # Get all MP3 files in the directory
    files = glob.glob(os.path.join(directory, "*.mp3"))

    # Extract the numbers from filenames
    numbers = []
    for file in files:
        basename = os.path.basename(file)
        if basename[:3].isdigit():
            try:
                numbers.append(int(basename[:3]))
            except ValueError:
                pass

    # If there are no files or no numbered files, start with 0
    if not numbers:
        return 0

    # Return the next number after the highest one found
    return max(numbers) + 1


def create_mp3_from_text(text, output_filename, language="ko", slow=False):
    """
    Creates an MP3 file from text using gTTS.
    """
    try:
        print(f"Generating {language} speech for: {text}")

        # Check if file already exists and remove it
        if os.path.exists(output_filename):
            print(f"  - Removing existing file: {output_filename}")
            os.remove(output_filename)

        # Create a gTTS object
        tts = gTTS(text=text, lang=language, slow=slow)

        # Save directly to a file
        tts.save(output_filename)

        # Verify file was created
        if not os.path.exists(output_filename):
            raise Exception(f"File was not created at {output_filename}")

        print(f"Successfully saved to: {output_filename}")
        return True
    except Exception as e:
        print(f"Error generating speech for '{text}': {str(e)}")
        return False


def clear_directory(directory_path):
    """
    Clear all MP3 files in the specified directory.
    """
    if os.path.exists(directory_path):
        print(f"Clearing existing MP3 files in {directory_path}")
        for filename in os.listdir(directory_path):
            if filename.lower().endswith('.mp3'):
                file_path = os.path.join(directory_path, filename)
                try:
                    os.remove(file_path)
                    print(f"  - Removed: {filename}")
                except Exception as e:
                    print(f"  - Error removing {filename}: {e}")
    else:
        # Create the directory if it doesn't exist
        os.makedirs(directory_path, exist_ok=True)
        print(f"Created directory: {directory_path}")


def process_file(file_path):
    """
    Process a vocabulary file and generate MP3 files for each word in
    both Korean and English.
    """
    # Get full relative path from Categories directory
    rel_path = os.path.relpath(file_path, CATEGORIES_DIR)

    # Extract bin name and category name from the path
    path_parts = os.path.split(rel_path)

    if len(path_parts) > 1:
        # The first part is the bin name (e.g., "Alphabet")
        bin_name = path_parts[0]
        # The category name is the filename without extension
        category = os.path.splitext(os.path.basename(file_path))[0]
    else:
        # If it's directly in the Categories folder
        bin_name = ""
        category = os.path.splitext(os.path.basename(file_path))[0]

    print(f"\nProcessing bin: {bin_name}, category: {category}")

    # Special handling for alphabet files
    is_alphabet = bin_name == "Alphabet"
    is_english_file = category.startswith("english_")
    is_korean_file = category.startswith("korean_")
    
    # Create output directories with bin structure, only for the appropriate language
    if is_english_file:
        english_dir = os.path.join(ENGLISH_DIR, bin_name, category)
        # Clear and create English directory
        clear_directory(english_dir)
    elif is_korean_file:
        korean_dir = os.path.join(KOREAN_DIR, bin_name, category)
        # Clear and create Korean directory
        clear_directory(korean_dir)
    else:
        # For non-language-specific files, create both directories
        korean_dir = os.path.join(KOREAN_DIR, bin_name, category)
        english_dir = os.path.join(ENGLISH_DIR, bin_name, category)
        # Clear and create both directories
        clear_directory(korean_dir)
        clear_directory(english_dir)

    # Get the next file number for each language
    next_korean_number = 0 # Always start from 0 after clearing
    next_english_number = 0 # Always start from 0 after clearing

    # Only show the directories we're actually using
    if is_english_file:
        print(f"English output directory: {english_dir}")
    elif is_korean_file:
        print(f"Korean output directory: {korean_dir}")
    else:
        print(f"Korean output directory: {korean_dir}")
        print(f"English output directory: {english_dir}")

    print(f"Starting Korean file numbering at: {next_korean_number:03d}")
    print(f"Starting English file numbering at: {next_english_number:03d}")

    # Track successful Korean and English conversions
    successful_korean = []
    successful_english = []
    failed_korean = []
    failed_english = []

    try:
        # Read and process the vocabulary file
        with open(file_path, "r", encoding="utf-8") as file:
            for line_number, line in enumerate(file, 1):
                if not line.strip():
                    continue

                # Parse the line based on different formats
                result = parse_line(line)
                if not result:
                    error_msg = f"Line {line_number}: '{line.strip()}' could not be parsed. Skipping."
                    print(error_msg)
                    failed_korean.append(error_msg)
                    failed_english.append(error_msg)
                    continue

                character, pronunciation = result

                # Special handling for alphabet files
                if is_alphabet:
                    if is_english_file:
                        # For English alphabet files, need separate handling for consonants and vowels
                        base_category = category.replace("english_", "")
                        
                        # Clean filenames
                        clean_character = re.sub(r'[\\/*?:"<>|]', "", character)
                        
                        # Generate filenames with sequential numbers
                        english_filename = f"{next_english_number:03d}_{clean_character}.mp3"
                        english_name_filename = f"{next_english_number:03d}_{clean_character}_name.mp3"
                        
                        english_path = os.path.join(english_dir, english_filename)
                        english_name_path = os.path.join(english_dir, english_name_filename)
                        
                        print(f"\nProcessing English alphabet {line_number}: {character}")
                        
                        # Generate English MP3 for letter name
                        print(f"Generating letter name audio for '{character}'")
                        if create_mp3_from_text(character, english_name_path, "en"):
                            successful_english.append(f"{next_english_number:03d}_{clean_character}_name")
                        else:
                            failed_english.append(f"{character} (name)")
                        
                        # Get the appropriate sound example based on the category and character
                        sound_example = ""
                        if base_category == "consonants" and character in ENGLISH_CONSONANT_SOUND_EXAMPLES:
                            sound_example = ENGLISH_CONSONANT_SOUND_EXAMPLES[character]
                        elif base_category == "vowels" and character in ENGLISH_VOWEL_SOUND_EXAMPLES:
                            sound_example = ENGLISH_VOWEL_SOUND_EXAMPLES[character]
                        else:
                            # If no special example, use character with the pronunciation
                            sound_example = pronunciation
                        
                        # Generate English MP3 for letter sound
                        print(f"Generating letter sound audio for '{character}' ('{sound_example}')")
                        if create_mp3_from_text(sound_example, english_path, "en", slow=True):
                            successful_english.append(f"{next_english_number:03d}_{clean_character}")
                            next_english_number += 1
                        else:
                            failed_english.append(f"{character} (sound)")
                        
                        # Skip Korean generation for English alphabet files
                        continue
                    
                    elif is_korean_file:
                        # For Korean alphabet files, need separate handling for consonants and vowels
                        base_category = category.replace("korean_", "")
                        
                        # Clean filenames
                        clean_character = re.sub(r'[\\/*?:"<>|]', "", character)
                        
                        # Generate filenames with sequential numbers
                        korean_filename = f"{next_korean_number:03d}_{clean_character}.mp3"
                        korean_name_filename = f"{next_korean_number:03d}_{clean_character}_name.mp3"
                        
                        korean_path = os.path.join(korean_dir, korean_filename)
                        korean_name_path = os.path.join(korean_dir, korean_name_filename)
                        
                        print(f"\nProcessing Korean alphabet {line_number}: {character}")
                        
                        # Generate Korean MP3 for letter name
                        print(f"Generating letter name audio for '{character}' (name)")
                        if create_mp3_from_text(character, korean_name_path, "ko"):
                            successful_korean.append(f"{next_korean_number:03d}_{clean_character}_name")
                        else:
                            failed_korean.append(f"{character} (name)")
                        
                        # Get the appropriate sound example based on the category and character
                        sound_example = ""
                        if base_category == "consonants" and character in KOREAN_CONSONANT_SOUND_EXAMPLES:
                            sound_example = KOREAN_CONSONANT_SOUND_EXAMPLES[character]
                        elif base_category == "vowels" and character in KOREAN_VOWEL_SOUND_EXAMPLES:
                            sound_example = KOREAN_VOWEL_SOUND_EXAMPLES[character]
                        else:
                            # If no special example, use character
                            sound_example = character
                        
                        # Generate Korean MP3 for letter sound
                        print(f"Generating letter sound audio for '{character}' using '{sound_example}'")
                        if create_mp3_from_text(sound_example, korean_path, "ko"):
                            successful_korean.append(f"{next_korean_number:03d}_{clean_character}")
                            next_korean_number += 1
                        else:
                            failed_korean.append(f"{character} (sound)")
                        
                        # Skip English generation for Korean alphabet files
                        continue

                # Normal processing for non-alphabet files or unlabeled alphabet files
                # Clean filenames (remove characters that aren't allowed in filenames)
                clean_korean = re.sub(r'[\\/*?:"<>|]', "", character)
                clean_english = re.sub(r'[\\/*?:"<>|]', "", pronunciation)

                # Generate filenames with sequential numbers
                korean_filename = f"{next_korean_number:03d}_{clean_korean}.mp3"
                english_filename = f"{next_english_number:03d}_{clean_english}.mp3"

                korean_path = os.path.join(korean_dir, korean_filename)
                english_path = os.path.join(english_dir, english_filename)

                print(f"\nProcessing word pair {line_number}: {character} / {pronunciation}")

                # Generate Korean MP3
                if create_mp3_from_text(character, korean_path, "ko"):
                    successful_korean.append(f"{next_korean_number:03d}_{clean_korean}")
                    next_korean_number += 1
                else:
                    failed_korean.append(character)

                # Generate English MP3
                if create_mp3_from_text(pronunciation, english_path, "en"):
                    successful_english.append(f"{next_english_number:03d}_{clean_english}")
                    next_english_number += 1
                else:
                    failed_english.append(pronunciation)

    except Exception as e:
        print(f"Error processing file {file_path}: {str(e)}")

    # Return results for this category
    return {
        "bin": bin_name,
        "category": category,
        "successful_korean": successful_korean,
        "successful_english": successful_english,
        "failed_korean": failed_korean,
        "failed_english": failed_english,
    }


def process_all_categories():
    """
    Process all text files in the Categories directory, including subdirectories.
    Based on the TARGET_BIN setting.
    """
    # Ensure Categories directory exists
    if not os.path.exists(CATEGORIES_DIR):
        os.makedirs(CATEGORIES_DIR)

        # Create bin directories within Categories
        for bin_name in ["Alphabet", "Words", "Phrases"]:
            bin_dir = os.path.join(CATEGORIES_DIR, bin_name)
            os.makedirs(bin_dir, exist_ok=True)

        print(f"Created Categories directory structure. Please add vocabulary files to:")
        print(f"  - {os.path.join(CATEGORIES_DIR, 'Alphabet')}/")
        print(f"  - {os.path.join(CATEGORIES_DIR, 'Words')}/")
        print(f"  - {os.path.join(CATEGORIES_DIR, 'Phrases')}/")
        return []

    # Create main output directories if they don't exist
    os.makedirs(KOREAN_DIR, exist_ok=True)
    os.makedirs(ENGLISH_DIR, exist_ok=True)

    # Create bin directories within output directories
    for bin_name in ["Alphabet", "Words", "Phrases"]:
        os.makedirs(os.path.join(KOREAN_DIR, bin_name), exist_ok=True)
        os.makedirs(os.path.join(ENGLISH_DIR, bin_name), exist_ok=True)

    # Get text files based on TARGET_BIN setting
    text_files = []

    if TARGET_BIN == "ALL":
        # Get all text files in the Categories directory and subdirectories
        for root, _, files in os.walk(CATEGORIES_DIR):
            for file in files:
                if file.endswith(".txt"):
                    text_files.append(os.path.join(root, file))
    else:
        # Get only text files in the specified bin directory
        bin_dir = os.path.join(CATEGORIES_DIR, TARGET_BIN)
        if os.path.exists(bin_dir):
            for file in os.listdir(bin_dir):
                if file.endswith(".txt"):
                    text_files.append(os.path.join(bin_dir, file))
        else:
            print(f"Warning: The selected bin directory '{bin_dir}' doesn't exist.")
            print(f"Make sure to create it and add text files before running this script.")

    if not text_files:
        if TARGET_BIN == "ALL":
            print(f"No text files found in {CATEGORIES_DIR}/ directory or its subdirectories.")
        else:
            print(f"No text files found in {os.path.join(CATEGORIES_DIR, TARGET_BIN)}/ directory.")
        print(f"Please add vocabulary files with the format: Korean English")
        return []

    print(f"Found {len(text_files)} text files:")
    for file in text_files:
        print(f"  - {file}")

    results = []

    # Process each text file
    for file_path in text_files:
        result = process_file(file_path)
        results.append(result)

    return results


def display_welcome():
    """Display welcome message and configuration info."""
    print("\n" + "=" * 70)
    print("Korean & English Text-to-Speech MP3 Generator".center(70))
    print("=" * 70)

    # Display the current target bin
    if TARGET_BIN == "ALL":
        print("Target: Processing ALL bins")
    else:
        print(f"Target: Processing only '{TARGET_BIN}' bin")
    print("-" * 70)

    print(f"Input directory structure:")
    print(f"  - {os.path.join(CATEGORIES_DIR, 'Alphabet')}/[category].txt")
    print(f"  - {os.path.join(CATEGORIES_DIR, 'Words')}/[category].txt")
    print(f"  - {os.path.join(CATEGORIES_DIR, 'Phrases')}/[category].txt")
    print(f"Output directory structure:")
    print(f"  - {KOREAN_DIR}/[bin]/[category]/")
    print(f"  - {ENGLISH_DIR}/[bin]/[category]/")
    print("Supported formats in text files:")
    print("  1. 안녕하세요 → Hello")
    print("  2. 안녕하세요 Hello")
    print("  3. 안녕하세요, Hello")
    print("  4. 안녕하세요,Hello")
    print("-" * 70)
    print("To change which bin is processed, modify the TARGET_BIN variable")
    print("at the top of this script to 'Alphabet', 'Words', 'Phrases', or 'ALL'")
    print("-" * 70)


def main():
    display_welcome()

    start_time = time.time()

    # Process all category files
    results = process_all_categories()

    end_time = time.time()
    elapsed_time = end_time - start_time

    # Print summary for all categories
    if results:
        print("\n" + "=" * 70)
        print("Summary".center(70))
        print("=" * 70)

        total_korean_success = sum(len(r["successful_korean"]) for r in results)
        total_english_success = sum(len(r["successful_english"]) for r in results)
        total_korean_failed = sum(len(r["failed_korean"]) for r in results)
        total_english_failed = sum(len(r["failed_english"]) for r in results)

        print(f"Total Korean files generated: {total_korean_success}")
        print(f"Total English files generated: {total_english_success}")
        print(f"Total Korean files failed: {total_korean_failed}")
        print(f"Total English files failed: {total_english_failed}")
        print(f"Total processing time: {elapsed_time:.1f} seconds")

        # Detailed summary per category
        for result in results:
            bin_name = result["bin"] if result["bin"] else "Default"
            category = result["category"]
            print(f"\nBin: {bin_name}, Category: {category}")
            print(f"  Korean success: {len(result['successful_korean'])}")
            print(f"  English success: {len(result['successful_english'])}")

            if result["failed_korean"] or result["failed_english"]:
                print("  Failed items:")
                if result["failed_korean"]:
                    print("    Korean:")
                    for item in result["failed_korean"]:
                        print(f"    - {item}")
                if result["failed_english"]:
                    print("    English:")
                    for item in result["failed_english"]:
                        print(f"    - {item}")

    print("\nOutput locations:")
    print(f"- {KOREAN_DIR}/[BIN_NAME]/[CATEGORY_NAME]/")
    print(f"- {ENGLISH_DIR}/[BIN_NAME]/[CATEGORY_NAME]/")
    print("\nNext steps:")
    print("1. Check the output directories to make sure the files were generated correctly.")

    if TARGET_BIN == "ALL":
        print("2. Run the appropriate config generator script for each bin:")
        print("   - config_alphabet_generator.py")
        print("   - config_words_generator.py")
        print("   - config_phrases_generator.py")
    else:
        print(f"2. Run the config generator script for the {TARGET_BIN} bin:")
        print(f"   - config_{TARGET_BIN.lower()}_generator.py")

    print("\nDone! Press any key to exit...")
    input()


if __name__ == "__main__":
    main()
