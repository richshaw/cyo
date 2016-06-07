(function() {
    'use strict';

    angular
        .module('cyo')
        .controller('conditionController', conditionController)

    conditionController.$inject = ['$scope','$attrs','$element'];

    function conditionController($scope,$attrs,$element) {
        $element.css("display", "none");
        
        var condition;
        if($attrs.hasOwnProperty('condition')) {
            condition = $attrs.condition;
        }
        else if($attrs.hasOwnProperty('name')) {
            condition = $attrs.name;
        }
        else {
            condition = $attrs.$attr[Object.keys($attrs.$attr)[0]];
        }

        var isNegative = false;
        var activated = false;

        $scope.isCondition = true;

        if ($attrs.hasOwnProperty('unless') || $attrs.hasOwnProperty('not')) {
            isNegative = true;
        };

        function activate() {
            if (activated) return;
            activated = true;
            if ($scope.storyEvents.indexOf(condition) > -1 && !isNegative) {
                $scope.conditionValid = true;
                $element.css("display", "block");
            } else if ($scope.storyEvents.indexOf(condition) == -1 && isNegative) {
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