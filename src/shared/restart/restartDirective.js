(function() {
    'use strict';

    angular
    .module('cyo')
    .directive('restart', restart);

    restart.$inject = [];

    function restart() {
        return {
            restrict: "EA",
            scope: true,
            controller: "restartController",
        }
    }
})();