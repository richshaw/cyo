(function() {
    'use strict';

    angular
    .module('cyo')
    .directive('story', story);

    story.$inject = [];

    function story() {
        return {
            restrict: "EA",
            scope: true,
            controller: storyController
        }

        function storyController($scope,$attrs,$element) {
            $scope.storyEvents = [];
            $scope.choices = [];
            $scope.pages = [];
            $scope.completedPages = [];
            $scope.decisions = ['intro'];
        }

    }
})();