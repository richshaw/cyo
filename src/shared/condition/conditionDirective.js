(function() {
    'use strict';

    angular
    .module('cyo')
    .directive('condition', condition);

    condition.$inject = [];

    function condition() {
        return {
            restrict: "EA",
            controller: "conditionController",
        }
    }
})();