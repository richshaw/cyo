(function() {
    'use strict';

    angular
        .module('cyo')
        .controller('eventController', eventController)

    eventController.$inject = ['$scope','$attrs','$element'];

    function eventController($scope,$attrs,$element) {
        var storyEvent = Object.keys($attrs.$attr);
        var isNegative = false;
        if (storyEvent[0] === "clear") {
            isNegative = true;
            storyEvent.shift();
        };

        var activated = false;

        function activate() {
            if (activated) return;
            activated = true;
            if ($scope.isCondition && !$scope.conditionValid) {
                return;
            };

            console.info("Activating this event", storyEvent, !isNegative);

            if (!isNegative) {
                $scope.storyEvents.push(storyEvent[0]);
            } else {
                var index = $scope.storyEvents.indexOf(storyEvent[0]);
                $scope.storyEvents.splice(index, 1);
            };
        }

        $scope.$watch("decisions", function() {
            if ($scope.decisions.indexOf($scope.pageName) > -1) {
                activate();
            } else {
                activated = false;
            }
        }, true);
    }
})();