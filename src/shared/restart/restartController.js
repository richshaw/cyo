(function() {
    'use strict';

    angular
        .module('cyo')
        .controller('restartController', restartController)

    restartController.$inject = ['$scope','$attrs','$element'];

    function restartController($scope,$attrs,$element) {
        angular.element($element).on("click", function() {
            
            [$scope.storyEvents, $scope.decisions, $scope.completedPages].forEach(function(A) {
                console.log(A);
                while (A.length > 0) {
                    console.log(A);
                    A.pop();
                }
            });
            $scope.$apply();
        });
    }
})();