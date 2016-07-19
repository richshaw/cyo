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

        function getStory(storyName) {
            if(!stories.hasOwnProperty(storyName)) {
                stories[storyName] = new story();
            }
            return stories[storyName];
        }

        function resetStory(storyName) {
            stories[storyName] = new story();
            return;
        }

        return {
            stories: stories,
            getStory: getStory,
            resetStory: resetStory
        }
    }
})();