(function() {
    'use strict';

    angular
    .module('cyo')
    .directive('page', page);

    page.$inject = ['$sce','$templateRequest','$compile','$parse'];

    function page($sce,$templateRequest,$compile,$parse) {
        return {
            restrict: "EA",
            scope: true,
            controller: "pageController",
            link: pageLink
        }

        function pageLink($scope, $element, $attr, $ctrls) {
            // Load external template if defined
            if($attr.hasOwnProperty("src")) {
                // From http://stackoverflow.com/questions/24496201/load-html-template-from-file-into-a-variable-in-angularjs
                // @Todo: Security check
                var path = $parse($attr.src)($scope);
                var templateUrl = $sce.getTrustedResourceUrl(path);

                $templateRequest(templateUrl).then(function(template) {
                    // template is the HTML template as a string
                    $element.html(template);
                    $compile($element.contents())($scope);
                }, function() {
                    // An error has occurred
                });
            }

        }
    }
})();