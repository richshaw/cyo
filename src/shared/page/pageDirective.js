(function() {
    'use strict';

    angular
    .module('cyo')
    .directive('page', page);

    page.$inject = [];

    function page() {
        return {
            restrict: "EA",
            scope: true,
            controller: "pageController",
        }
    }
})();