(function() {
    'use strict';

    angular
        .module('cyo')
        .controller('restartController', restartController)

    restartController.$inject = ['$scope','$attrs','$element'];

    function restartController($scope,$attrs,$element) {
        angular.element($element).on("click", function() {

            $scope.storyEvents = [];
            $scope.choices = [];
            $scope.pages = [];
            $scope.completedPages = [];
            $scope.decisions = ['intro'];

            $scope.$apply();
        });
    }
})();