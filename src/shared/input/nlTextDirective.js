//<span class="editable" contenteditable="true" ng-model="vm.brief.sample.search[1]"></span>

(function() {
    'use strict';

    angular
    .module('cyo')
    .directive('nlText', nlText);

    nlText.$inject = [];

    function nlText() {
        return {
            restrict: 'EA',
            require: ['ngModel'],
            link: nlTextLink
        }

        function nlTextLink($scope, $element, $attr, $ctrls) {
            $element.attr('contenteditable', 'true');

            var ngModel = $ctrls[0];

            function read() {
                var text  = $element.html();
                //Remove trailing space
                text = text.replace(/(&nbsp;)+$/g,"");
                //Remove br
                text = String(text).replace(/<[^>]+>/gm, '');
                ngModel.$setViewValue(text);
            }


            $element.bind("click", function() {
                if($element[0] != document.activeElement ) {
                    $element[0].focus();
                }
                 
            });

            $element.bind("paste", function(event) {
                // cancel paste
                event.preventDefault();
                // get text representation of clipboard
                var text = event.clipboardData.getData("text/plain");
                // insert text manually
                document.execCommand("insertHTML", false, text);
            });

            ngModel.$render = function() {
                $element.html(ngModel.$viewValue || "");
            };

            $element.bind("blur keyup change", function() {
                $scope.$apply(read);
            });

            $element.bind("keydown", function(event) {
                 if (event.keyCode === 13) {
                    event.preventDefault();
                }
            });

            $scope.getWidth = function () {
                return $element[0].offsetWidth;
            };

            $scope.$watch($scope.getWidth, function (width) {
              if (width > 150) {
                $element.addClass('inline');
              }
              else if (width <= 150) {
                $element.removeClass('inline');
              }
            });

        }
    }
})();