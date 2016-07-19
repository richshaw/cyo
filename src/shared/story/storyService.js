(function() {
    'use strict';

    angular
        .module('cyo')
        .factory('storyService', storyService)

    storyService.$inject = [];

    function storyService() {

        var story = function() {
            this.storyEvents = [];
            this.choices = [];
            this.pages = [];
            this.completedPages = [];
            this.decisions = ['intro'];
        };

        var stories = {};
        var updateFunctions = [];

        function registerStory(func) {
            updateFunctions.push(func);
        }

        function updateStories() {
            console.log(updateFunctions);
            for (i = 0; i < updateFunctions.length; i++) {
                updateFunctions[i]();
            }
        }

        function getStory(storyName) {
            if(!stories.hasOwnProperty(storyName)) {
                stories[storyName] = new story();
            }
            return stories[storyName];
        }

        function resetStory(storyName) {
            stories[storyName].storyEvents = [];
            stories[storyName].choices = [];
            stories[storyName].completedPages = [];
            stories[storyName].decisions = ['intro'];
            updateStories();
            return;
        }

        return {
            stories: stories,
            getStory: getStory,
            resetStory: resetStory,
            registerStory: registerStory
        }
    }
})();