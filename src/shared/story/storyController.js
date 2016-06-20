(function() {
    'use strict';

    angular
        .module('cyo')
        .controller('storyController', storyController)

    storyController.$inject = ['$scope','$attrs','$element','storyService'];

    function storyController($scope,$attrs,$element,storyService) {

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

        $scope = angular.extend($scope, storyService.getStory(storyName));
        console.log(storyService.getStory(storyName));
    }
})();
