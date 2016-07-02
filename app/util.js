/**
 * Created by Guilherme on 02/07/2016.
 */

function parseWord(word){
    var parsedWord = "";
    for (i = 0; i < word.length; i++) {
        parsedWord += "_ ";
    }
    return parsedWord.substr(0, parsedWord.length-1);
}

function generateRandomWord(){
    var words = [
        { word: "Jar", secretWord: parseWord("Jar"), tip: "Maybe I will compile some juice in it." },
        { word: "Soap", secretWord: parseWord("Soap"), tip: "Can I take a bath with this protocol?" },
        { word: "Calculator", secretWord: parseWord("Calculator"), tip: "'Someone' you can count on!" },
        { word: "Keyboard", secretWord: parseWord("Keyboard"), tip: "Sometimes you just want to Escape and lose Control." }
    ];

    return words[Math.floor(Math.random() * 4)];
}