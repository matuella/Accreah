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
        $scope.lettersTried = [];
        $scope.gameWord = generateRandomWord();
    };

    $scope.hasTried = function hasTried(letter){
        for (i = 0; i < $scope.lettersTried.length; i++) {
            if($scope.lettersTried[i] == letter){
                return true;
            }
        }
        return false;
    }

    $scope.guessLetter = function guessLetter(letter) {
        var guessedWrong = true;
        for (var i = 0; i < $scope.gameWord.word.length; i++) {
            if($scope.gameWord.word[i] == letter){
                console.log($scope.gameWord.secretWord[i*2]);
                $scope.gameWord.secretWord = setCharAt($scope.gameWord.secretWord, i*2, letter);
                $scope.lettersTried.push(letter);
                guessedWrong = false;
            }
        }
        if(guessedWrong){
            $scope.player.remainingAttempts--;
        }
    };

    $scope.toggleTip = function toggleTip() {
        $scope.showTip = ($scope.showTip) ? false : true;
    };
});