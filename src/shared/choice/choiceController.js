(function() {
    'use strict';

    angular
        .module('cyo')
        .controller('choiceController', choiceController)

    choiceController.$inject = ['$scope','$attrs','$element','$animate'];

    function choiceController($scope,$attrs,$element,$animate) {

        var choiceName;
        if($attrs.hasOwnProperty('choice')) {
            choiceName = $attrs.choice;
        }
        else if($attrs.hasOwnProperty('name')) {
            choiceName = $attrs.name;
        }
        else {
            choiceName = $attrs.$attr[Object.keys($attrs.$attr)[0]];
        }

        angular.element($element).on("click", function() {
            $scope.completedPages.push($scope.pageName);
            $scope.decisions.push(choiceName);
            $scope.$apply();
        });

        $scope.$watch("pages", function() {
            if ($scope.pages.indexOf(choiceName) == -1) {
                console.warn("A choice has no corresponding page,", choiceName);
            }
        }, true);

        $scope.$watch("completedPages", function() {
            if ($scope.completedPages.indexOf($scope.pageName) > -1) {
                $animate.addClass($element,'completed-page');
            } else {
                $animate.removeClass($element,'completed-page');
                $animate.removeClass($element,'selected');
            }
        }, true)

        $scope.$watch("decisions", function() {
            if ($scope.decisions.indexOf(choiceName) > -1) {
                $animate.addClass($element,'selected');
            } else {
                $animate.removeClass($element,'selected');
            }
        }, true)
    }
})();