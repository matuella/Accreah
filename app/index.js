/**
 * Created by Guilherme on 02/07/2016.
 */
var app = angular.module('hangmanApp', []);

app.controller('hangmanController', function ($scope) {

    $scope.title = "Angular Hangman";

    $scope.testeParse = function testeParse(word) {
        $scope.parsedWord = "";
        for (i = 0; i < word.length; i++) {
            $scope.parsedWord += "_ ";
        }
    };
});