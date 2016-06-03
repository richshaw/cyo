(function() {
    'use strict';

    angular
        .module('cyo')
        .controller('pageController', pageController)

    pageController.$inject = ['$scope','$attrs','$element'];

    function pageController($scope,$attrs,$element) {
        if ($scope.pages.length) {
            $element.css("display", "none");
        } else {
            $scope.isFirstPage = true;
        }

        if($attrs.hasOwnProperty('page')) {
            $scope.pageName = $attrs.page;
        }
        else if($attrs.hasOwnProperty('name')) {
            $scope.pageName = $attrs.name;
        }
        
        $scope.pages.push($scope.pageName);

        $scope.$watch("decisions", function() {
            if ($scope.decisions.indexOf($scope.pageName) > -1) {
                $element.css("display", "block");
            } else if (!$scope.isFirstPage) {
                $element.css("display", "none");
            }
        }, true);
    }
})();