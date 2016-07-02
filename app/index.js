/**
 * Created by Guilherme on 02/07/2016.
 */
var app = angular.module('hangmanApp', []);

app.controller('hangmanController', function ($scope) {
    $scope.title = "Angular Hangman";
    $scope.showTip = false;

    $scope.startGame = function startGame(playerName){
        $scope.gameExists = true;
        $scope.player = {
            name: playerName,
            remainingAttempts: 6,
            lettersTried : [
            {letter: 'A', enabled: true},
            {letter: 'B', enabled: true},
            {letter: 'C', enabled: true}
            ]
        };
        $scope.gameWord = generateRandomWord();
    };

    $scope.endGame = function endGame(){
        $scope.gameExists = false;
    };

    $scope.guessLetter = function guessLetter(){

    };

    $scope.toggleTip = function toggleTip(){
        $scope.showTip = ($scope.showTip) ? false : true;
    };
});