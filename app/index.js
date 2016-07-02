/**
 * Created by Guilherme on 02/07/2016.
 */
var app = angular.module('hangmanApp', []);

app.controller('hangmanController', function ($scope) {

    $scope.title = "Angular Hangman";
    $scope.gameExists = false;

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
    };

    $scope.endGame = function endGame(){
        $scope.gameExists = false;
    };

    $scope.guessLetter = function guessLetter(){

    };

    $scope.testeParse = function testeParse(word) {
        $scope.parsedWord = "";
        for (i = 0; i < word.length; i++) {
            $scope.parsedWord += "_ ";
        }
    };
});