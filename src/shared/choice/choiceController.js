(function() {
    'use strict';

    angular
        .module('cyo')
        .controller('choiceController', choiceController)

    choiceController.$inject = ['$scope','$attrs','$element'];

    function choiceController($scope,$attrs,$element) {

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
                console.error("A choice has no corresponding page,", choiceName);
                $element.css("border", "2px solid red");
                $element.css("pointer-events", "none");
            }
        }, true);

        $scope.$watch("completedPages", function() {
            if ($scope.completedPages.indexOf($scope.pageName) > -1) {
                $element.css("display", "none");
            } else {
                $element.css("display", "inline-block");
            }
        }, true)
    }
})();