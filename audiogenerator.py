import os
import time
import glob
import re
from gtts import gTTS

# =============== CONFIGURATION ===============
# Input directory for category files
CATEGORIES_DIR = "Categories"

# =============== CODE ===============


def parse_line(line):
    """
    Parse a line of text in various formats and extract Korean, romanization, and English.
    Supported formats:
    1. 안녕하세요 → annyeonghaseyo → Hello
    2. 안녕하세요 annyeonghaseyo Hello
    3. 안녕하세요, annyeonghaseyo, Hello
    4. 안녕하세요,annyeonghaseyo,Hello
    """
    line = line.strip()
    if not line:
        return None

    # Format 1: With arrows (→)
    if "→" in line:
        parts = [part.strip() for part in line.split("→")]
        if len(parts) >= 3:
            return parts[0], parts[1], parts[2]

    # Format 3 & 4: Comma-separated (with or without spaces)
    elif "," in line:
        parts = [part.strip() for part in line.split(",")]
        if len(parts) >= 3:
            return parts[0], parts[1], parts[2]

    # Format 2: Space-separated (this is a fallback and might cause issues with multi-word items)
    else:
        parts = line.split()
        if len(parts) >= 3:
            # Assume first item is Korean, last item is English, middle is romanization
            return parts[0], parts[1], " ".join(parts[2:])

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


def create_mp3_from_text(text, output_filename, language="ko"):
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
        tts = gTTS(text=text, lang=language, slow=(language == "ko"))

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


def process_file(file_path):
    """
    Process a vocabulary file and generate MP3 files for each word in
    both Korean and English.
    """
    # Get category name from filename (without extension)
    category = os.path.splitext(os.path.basename(file_path))[0]
    print(f"\nProcessing category: {category}")

    # Create output directories
    korean_dir = os.path.join("Korean Words", category)
    english_dir = os.path.join("English Words", category)

    try:
        os.makedirs(korean_dir, exist_ok=True)
        os.makedirs(english_dir, exist_ok=True)
        print(f"Korean output directory: {korean_dir}")
        print(f"English output directory: {english_dir}")
    except Exception as e:
        print(f"Error creating directories: {str(e)}")
        return [], []

    # Get the next file number for each language
    next_korean_number = get_next_file_number(korean_dir)
    next_english_number = get_next_file_number(english_dir)

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

                korean_word, romanization, english_word = result

                # Clean filenames (remove characters that aren't allowed in filenames)
                clean_korean = re.sub(r'[\\/*?:"<>|]', "", korean_word)
                clean_english = re.sub(r'[\\/*?:"<>|]', "", english_word)

                # Generate filenames with sequential numbers
                korean_filename = f"{next_korean_number:03d}_{clean_korean}.mp3"
                english_filename = f"{next_english_number:03d}_{clean_english}.mp3"

                korean_path = os.path.join(korean_dir, korean_filename)
                english_path = os.path.join(english_dir, english_filename)

                print(f"\nProcessing word pair {line_number}: {korean_word} / {english_word}")

                # Generate Korean MP3
                if create_mp3_from_text(korean_word, korean_path, "ko"):
                    successful_korean.append(f"{next_korean_number:03d}_{clean_korean}")
                    next_korean_number += 1
                else:
                    failed_korean.append(korean_word)

                # Generate English MP3
                if create_mp3_from_text(english_word, english_path, "en"):
                    successful_english.append(f"{next_english_number:03d}_{clean_english}")
                    next_english_number += 1
                else:
                    failed_english.append(english_word)

    except Exception as e:
        print(f"Error processing file {file_path}: {str(e)}")

    # Return results for this category
    return {
        "category": category,
        "successful_korean": successful_korean,
        "successful_english": successful_english,
        "failed_korean": failed_korean,
        "failed_english": failed_english,
    }


def process_all_categories():
    """
    Process all text files in the Categories directory.
    """
    # Ensure Categories directory exists
    if not os.path.exists(CATEGORIES_DIR):
        os.makedirs(CATEGORIES_DIR)
        print(f"Created Categories directory. Please add vocabulary files to {CATEGORIES_DIR}/")
        return []

    # Get all text files in the Categories directory
    text_files = glob.glob(os.path.join(CATEGORIES_DIR, "*.txt"))

    if not text_files:
        print(f"No text files found in {CATEGORIES_DIR}/ directory.")
        print(f"Please add vocabulary files with the format: Korean Romanization English")
        return []

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
    print(f"Input directory: {CATEGORIES_DIR}/")
    print("Supported formats:")
    print("  1. 안녕하세요 → annyeonghaseyo → Hello")
    print("  2. 안녕하세요 annyeonghaseyo Hello")
    print("  3. 안녕하세요, annyeonghaseyo, Hello")
    print("  4. 안녕하세요,annyeonghaseyo,Hello")
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
            category = result["category"]
            print(f"\nCategory: {category}")
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
    print("- Korean Words/[CATEGORY_NAME]/")
    print("- English Words/[CATEGORY_NAME]/")
    print("\nDone! Press any key to exit...")
    input()


if __name__ == "__main__":
    main()
