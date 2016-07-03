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
        $scope.gameWord = generateRandomWord();
    };

    $scope.endGame = function endGame() {
        $scope.gameExists = false;
    };

    $scope.guessLetter = function guessLetter() {

    };

    $scope.toggleTip = function toggleTip() {
        $scope.showTip = ($scope.showTip) ? false : true;
    };
});