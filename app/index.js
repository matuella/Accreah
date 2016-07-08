/**
 * Created by Guilherme on 02/07/2016.
 */
var app = angular.module('hangmanApp', []);

app.controller('hangmanController', function ($scope) {
    $scope.title = "Angular Hangman";
    $scope.showTip = false;
    $scope.lettersFirstRow = ['A', 'B', 'C', 'D', 'E',
        'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];
    $scope.lettersSecondRow = ['N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    $scope.startGame = function startGame(playerName) {
        $scope.gameExists = true;
        $scope.player = {
            name: playerName,
            remainingAttempts: 6
        };
        $scope.rightLetters = [];
        $scope.wrongLetters = [];
        $scope.gameWord = generateRandomWord();
        $scope.endingSentence = '';
    };

    $scope.hasTried = function hasTried(letter) {
        for (i = 0; i < $scope.rightLetters.length; i++) {
            if ($scope.rightLetters[i] == letter) {
                return 'success';
            }
        }
        for (i = 0; i < $scope.wrongLetters.length; i++) {
            if ($scope.wrongLetters[i] == letter) {
                return 'alert';
            }
        }
        return '';
    }

    $scope.guessLetter = function guessLetter(letter) {
        var guessedWrong = true;
        for (var i = 0; i < $scope.gameWord.word.length; i++) {
            if ($scope.gameWord.word[i] == letter) {
                $scope.gameWord.secretWord = setCharAt($scope.gameWord.secretWord, i * 2, letter);
                $scope.rightLetters.push(letter);
                guessedWrong = false;
            }
        }
        if (guessedWrong) {
            for (var i = 0; i < $scope.wrongLetters.length; i++) {
                if ($scope.wrongLetters[i] == letter) {
                    return;
                }
            }
            $scope.player.remainingAttempts--;
            $scope.wrongLetters.push(letter);
        }
    };

    $scope.toggleTip = function toggleTip() {
        $scope.showTip = ($scope.showTip) ? false : true;
    };

    $scope.hasEnded = function hasEnded() {
        if ($scope.player.remainingAttempts < 1) {
            $scope.endingSentence = 'YOU LOST! The word was: ' + $scope.gameWord.word + ' :( ';
            return true;
        }
        if ($scope.gameWord.secretWord.indexOf('_') == -1) {
            $scope.endingSentence = 'YOU WON! :D';
            return true;
        }
        return false;
    };

    $scope.restartGame = function restartGame() {
        $scope.gameExists =  false;
    };
});