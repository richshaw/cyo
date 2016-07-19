 (function() {
    'use strict';

    angular
        .module('cyo')
        .controller('storyController', storyController)

    storyController.$inject = ['$scope','$attrs','$element','storyService','$parse'];

    function storyController($scope,$attrs,$element,storyService,$parse) {

        var storyName;  

        if($attrs.hasOwnProperty('story')) {
            storyName = $attrs.story;
        }
        else if($attrs.hasOwnProperty('name')) {
            storyName = $attrs.name;
        }
        else {
            storyName = $attrs.$attr[Object.keys($attrs.$attr)[0]];
        }

        storyName = $parse(storyName)($scope);

        $scope = angular.extend($scope, storyService.getStory(storyName));

        var updateStory = function updateStory() {
            $scope = angular.extend($scope, storyService.getStory(storyName));
        }

        storyService.registerStory(updateStory);
    }
})();
