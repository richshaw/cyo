!function(){"use strict";function e(){}angular.module("cyo",["ngAnimate"]),angular.module("cyo").run(e),e.$inject=[]}(),function(){"use strict";function e(){}angular.module("cyo").config(e).constant("CONFIG",{}),e.$inject=[]}(),function(){"use strict";function e(){return{restrict:"EA",controller:"choiceController"}}angular.module("cyo").directive("choice",e),e.$inject=[]}(),function(){"use strict";function e(e,t,n,o){var r;r=t.hasOwnProperty("choice")?t.choice:t.hasOwnProperty("name")?t.name:t.$attr[Object.keys(t.$attr)[0]],angular.element(n).on("click",function(){e.completedPages.push(e.pageName),e.decisions.push(r),e.$apply()}),e.$watch("pages",function(){-1==e.pages.indexOf(r)&&(console.error("A choice has no corresponding page,",r),n.css("border","2px solid red"),n.css("pointer-events","none"))},!0),e.$watch("completedPages",function(){e.completedPages.indexOf(e.pageName)>-1?o.addClass(n,"ng-hide"):o.removeClass(n,"ng-hide")},!0)}angular.module("cyo").controller("choiceController",e),e.$inject=["$scope","$attrs","$element","$animate"]}(),function(){"use strict";function e(){return{restrict:"EA",controller:"conditionController"}}angular.module("cyo").directive("condition",e),e.$inject=[]}(),function(){"use strict";function e(e,t,n){function o(){i||(i=!0,e.storyEvents.indexOf(r)>-1&&!c?(e.conditionValid=!0,n.css("display","block")):-1==e.storyEvents.indexOf(r)&&c&&(e.conditionValid=!0,n.css("display","block")))}n.css("display","none");var r;r=t.hasOwnProperty("condition")?t.condition:t.hasOwnProperty("name")?t.name:t.$attr[Object.keys(t.$attr)[0]];var c=!1,i=!1;e.isCondition=!0,(t.hasOwnProperty("unless")||t.hasOwnProperty("not"))&&(c=!0),e.$watch("decisions",function(){e.decisions.indexOf(e.pageName)>-1?o():(i=!1,n.css("display","none"))},!0)}angular.module("cyo").controller("conditionController",e),e.$inject=["$scope","$attrs","$element"]}(),function(){"use strict";function e(){return{restrict:"EA",controller:"eventController"}}angular.module("cyo").directive("event",e),e.$inject=[]}(),function(){"use strict";function e(e,t,n){function o(){if(!i&&(i=!0,!e.isCondition||e.conditionValid))if(console.info("Activating this event",r,!c),c){var t=e.storyEvents.indexOf(r);e.storyEvents.splice(t,1)}else e.storyEvents.push(r)}var r;r=t.hasOwnProperty("event")?t.event:t.hasOwnProperty("name")?t.name:t.$attr[Object.keys(t.$attr)[0]];var c=!1;"clear"===r&&(c=!0,r.shift());var i=!1;e.$watch("decisions",function(){e.decisions.indexOf(e.pageName)>-1?o():i=!1},!0)}angular.module("cyo").controller("eventController",e),e.$inject=["$scope","$attrs","$element"]}(),function(){"use strict";function e(e,t,n){function o(o,r,c,i){if(c.hasOwnProperty("src")){var s=e.getTrustedResourceUrl(c.src);t(s).then(function(e){r.html(e),n(r.contents())(o)},function(){})}}return{restrict:"EA",scope:!0,controller:"pageController",link:o}}angular.module("cyo").directive("page",e),e.$inject=["$sce","$templateRequest","$compile"]}(),function(){"use strict";function e(e,t,n,o){e.pages.length?o.addClass(n,"ng-hide"):e.isFirstPage=!0,t.hasOwnProperty("page")?e.pageName=t.page:t.hasOwnProperty("name")?e.pageName=t.name:e.pageName=t.$attr[Object.keys(t.$attr)[0]],e.pages.push(e.pageName),e.$watch("decisions",function(){e.decisions.indexOf(e.pageName)>-1?o.removeClass(n,"ng-hide"):e.isFirstPage||o.addClass(n,"ng-hide")},!0)}angular.module("cyo").controller("pageController",e),e.$inject=["$scope","$attrs","$element","$animate"]}(),function(){"use strict";function e(){return{restrict:"EA",scope:!0,controller:"restartController"}}angular.module("cyo").directive("restart",e),e.$inject=[]}(),function(){"use strict";function e(e,t,n){angular.element(n).on("click",function(){[e.storyEvents,e.decisions,e.completedPages].forEach(function(e){for(;e.length>0;)e.pop()}),e.$apply()})}angular.module("cyo").controller("restartController",e),e.$inject=["$scope","$attrs","$element"]}(),function(){"use strict";function e(){return{restrict:"EA",scope:!0,controller:"storyController"}}angular.module("cyo").directive("story",e),e.$inject=[]}(),function(){"use strict";function e(e,t,n,o){var r;r=t.hasOwnProperty("story")?t.story:t.hasOwnProperty("name")?t.name:t.$attr[Object.keys(t.$attr)[0]],e=angular.extend(e,o.getStory(r))}angular.module("cyo").controller("storyController",e),e.$inject=["$scope","$attrs","$element","storyService"]}(),function(){"use strict";function e(){function e(e){return n.hasOwnProperty(e)||(n[e]=new t),n[e]}var t=function(){this.storyEvents=[],this.choices=[],this.pages=[],this.completedPages=[],this.decisions=["intro"]},n={};return{stories:n,getStory:e}}angular.module("cyo").factory("storyService",e),e.$inject=[]}();
//# sourceMappingURL=cyo.js.map
