const englishToArabicMap = {
    "`": "ذ", "1": "1", "2": "2", "3": "3", "4": "4", "5": "5", "6": "6", "7": "7", "8": "8", "9": "9", "0": "0", 
    "-": "-", "=": "=", "q": "ض", "w": "ص", "e": "ث", "r": "ق", "t": "ف", "y": "غ", "u": "ع", "i": "ه", "o": "خ", 
    "p": "ح", "[": "ج", "]": "د", "a": "ش", "s": "س", "d": "ي", "f": "ب", "g": "ل", "h": "ا", "j": "ت", "k": "ن", 
    "l": "م", ";": "ك", "'": "ط", "z": "ئ", "x": "ء", "c": "ؤ", "v": "ر", "b": "لا", "n": "ى", "m": "ة", ",": "و", 
    ".": "ز", "/": "ظ", "~": "ّ", "!": "!", "@": "@", "#": "#", "$": "$", "%": "%", "^": "^", "&": "&", "*": "*", 
    "(": ")", ")": "(", "_": "_", "+": "+", "Q": "َ", "W": "ً", "E": "ُ", "R": "ٌ", "T": "إ", "Y": "إ", "U": "‘", 
    "I": "÷", "O": "×", "P": "؛", "{": "<", "}": ">", "A": "ِ", "S": "ٍ", "D": "]", "F": "[", "G": "لأ", "H": "أ", 
    "J": "ـ", "K": "،", "L": "//", ":": ":", "\"": "\"", "Z": "~", "X": "ْ", "C": "}", "V": "{", "B": "لآ", "N": "آ", 
    "M": "’", "<": ",", ">": ".", "?": "؟"
};

const arabicToEnglishMap = Object.fromEntries(
    Object.entries(englishToArabicMap).map(([key, value]) => [value, key])
);

function convertToArabic() {
    let inputText = document.getElementById("inputText").value;
    let outputText = '';
    
    for (let char of inputText) {
        outputText += englishToArabicMap[char] || char;
    }
    
    document.getElementById("outputText").value = outputText;
}

function convertToEnglish() {
    let inputText = document.getElementById("inputText").value;
    let outputText = '';
    
    for (let char of inputText) {
        outputText += arabicToEnglishMap[char] || char;
    }
    
    document.getElementById("outputText").value = outputText;
}

function copyText() {
    let outputText = document.getElementById("outputText");
    outputText.select();
    outputText.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand("copy");
}
