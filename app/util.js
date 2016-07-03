/**
 * Created by Guilherme on 02/07/2016.
 */

function parseWord(word) {
    var parsedWord = "";
    for (var i = 0; i < word.length; i++) {
        parsedWord += "_ ";
    }

    return parsedWord.substr(0, parsedWord.length - 1);
}

function generateRandomWord() {
    var words = [
        {word: "JAR", secretWord: parseWord("JAR"), tip: "Maybe I will compile some juice in it."},
        {word: "SOAP", secretWord: parseWord("SOAP"), tip: "Can I take a bath with this protocol?"},
        {word: "CALCULATOR", secretWord: parseWord("CALCULATOR"), tip: "'Someone' you can count on!"},
        {word: "KEYBOARD", secretWord: parseWord("KEYBOARD"), tip: "Sometimes you just want to Escape and lose Control."}
    ];

    return words[Math.floor(Math.random() * 4)];
}

function setCharAt(word, index, letter) {
    if (index > word.length - 1) return word;
    return word.substr(0, index) + letter + word.substr(index + 1);
}