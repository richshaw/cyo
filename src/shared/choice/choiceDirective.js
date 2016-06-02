(function() {
    'use strict';

    angular
    .module('cyo')
    .directive('choice', choice);

    choice.$inject = [];

    function choice() {
        return {
            restrict: "EA",
            controller: "choiceController",
        }
    }
})();