(function() {
    'use strict';

    angular
        .module('cyo')
        .factory('storyService', storyService)

    storyService.$inject = [];

    function storyService() {

        // instantiate our initial object
        var story = function() {
            this.storyEvents = [];
            this.choices = [];
            this.pages = [];
            this.completedPages = [];
            this.decisions = ['intro'];
        };


        var stories = {};

        function getStory(storyName) {

            console.log(storyName,stories,stories.hasOwnProperty(storyName));
            console.log(new story());
            if(!stories.hasOwnProperty(storyName)) {
                stories[storyName] = new story();
            }
            return stories[storyName];
        }

        return {
            stories: stories,
            getStory: getStory
        }
    }
})();