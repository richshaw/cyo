(function() {
    'use strict';

    angular
    .module('cyo')
    .directive('event', event);

    event.$inject = [];

    function event() {
        return {
            restrict: "EA",
            controller: "eventController",
        }
    }
})();