(function() {
    'use strict';

    angular
        .module('cyo')
        .controller('pageController', pageController)

    pageController.$inject = ['$scope','$attrs','$element','$animate'];

    function pageController($scope,$attrs,$element,$animate) {
        if ($scope.pages.length) {
            $animate.addClass($element,'ng-hide');
        } else {
            $scope.isFirstPage = true;
        }

        if($attrs.hasOwnProperty('page')) {
            $scope.pageName = $attrs.page;
        }
        else if($attrs.hasOwnProperty('name')) {
            $scope.pageName = $attrs.name;
        }
        else {
            $scope.pageName = $attrs.$attr[Object.keys($attrs.$attr)[0]];
        }
        
        $scope.pages.push($scope.pageName);

        $scope.$watch("decisions", function() {
            if ($scope.decisions.indexOf($scope.pageName) > -1) {
                $animate.removeClass($element,'ng-hide');
            } else if (!$scope.isFirstPage) {
                $animate.addClass($element,'ng-hide');
            }
        }, true);
    }
})();