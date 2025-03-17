<?php
// Script to generate a configuration file with all directory info

$config = [
    'categories' => [],
    'words' => []
];

// Scan English Words directory for categories
$englishDir = 'English Words';
$koreanDir = 'Korean Words';

$categories = array_filter(scandir($englishDir), function($item) use ($englishDir) {
    return $item != "." && $item != ".." && is_dir("$englishDir/$item");
});

$config['categories'] = array_values($categories);

foreach ($categories as $category) {
    $config['words'][$category] = [];
    
    // Get files
    $englishFiles = array_filter(scandir("$englishDir/$category"), function($file) {
        return pathinfo($file, PATHINFO_EXTENSION) === 'mp3';
    });
    
    $koreanFiles = array_filter(scandir("$koreanDir/$category"), function($file) {
        return pathinfo($file, PATHINFO_EXTENSION) === 'mp3';
    });
    
    // Create a map of Korean files
    $koreanMap = [];
    foreach ($koreanFiles as $koreanFile) {
        $index = substr($koreanFile, 0, 3);
        $koreanMap[$index] = $koreanFile;
    }
    
    // Process English files and match with Korean
    foreach ($englishFiles as $englishFile) {
        $index = substr($englishFile, 0, 3);
        if (isset($koreanMap[$index])) {
            $englishWord = substr($englishFile, 4, -4);
            $englishWord = str_replace('_', ' ', $englishWord);
            
            $koreanWord = substr($koreanMap[$index], 4, -4);
            $koreanWord = str_replace('_', ' ', $koreanWord);
            
            $config['words'][$category][] = [
                'index' => $index,
                'english' => $englishWord,
                'korean' => $koreanWord,
                'audioEn' => "$englishDir/$category/$englishFile",
                'audioKo' => "$koreanDir/$category/" . $koreanMap[$index]
            ];
        }
    }
}

// Save to file
file_put_contents('word_config.json', json_encode($config, JSON_PRETTY_PRINT));
echo "Configuration file generated successfully!";
?>