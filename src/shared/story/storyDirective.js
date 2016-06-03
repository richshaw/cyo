(function() {
    'use strict';

    angular
    .module('cyo')
    .directive('story', story);

    story.$inject = [];

    function story() {
        return {
            restrict: 'EA',
            scope: true,
            controller: 'storyController'
        }
    }
})();