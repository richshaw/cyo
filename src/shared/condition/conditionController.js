(function() {
    'use strict';

    angular
        .module('cyo')
        .controller('conditionController', conditionController)

    conditionController.$inject = ['$scope','$attrs','$element'];

    function conditionController($scope,$attrs,$element) {
        $element.css("display", "none");
        var condition = Object.keys($attrs.$attr);
        var isNegative = false;
        var activated = false;

        $scope.isCondition = true;

        if (condition[0] === "unless" || condition[0] === "not") {
            isNegative = true;
            condition.shift();
        };

        function activate() {
            if (activated) return;
            activated = true;
            if ($scope.storyEvents.indexOf(condition[0]) > -1 && !isNegative) {
                $scope.conditionValid = true;
                $element.css("display", "block");
            } else if ($scope.storyEvents.indexOf(condition[0]) == -1 && isNegative) {
                $scope.conditionValid = true;
                $element.css("display", "block");
            }
        }

        $scope.$watch("decisions", function() {
            if ($scope.decisions.indexOf($scope.pageName) > -1) {
                activate();
            } else {
                activated = false;
                $element.css("display", "none");
            }
        }, true);
    }
})();