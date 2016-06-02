(function() {
    'use strict';

    angular
        .module('cyo')
        .controller('storyController', storyController)

    storyController.$inject = ['$scope','$attrs','$element'];

    function storyController($scope,$attrs,$element) {
        $scope.storyEvents = [];
        $scope.choices = [];
        $scope.pages = [];
        $scope.completedPages = [];
        $scope.decisions = ['intro'];
    }
})();