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

        var pageName = Object.keys($attrs.$attr);
        if (pageName[0] == "page") pageName.shift();

        $scope.pageName = pageName[0];

        $scope.pages.push(pageName[0]);

        $scope.$watch("decisions", function() {
            if ($scope.decisions.indexOf($scope.pageName) > -1) {
                $element.css("display", "block");
            } else if (!$scope.isFirstPage) {
                $element.css("display", "none");
            }
        }, true);
    }
})();