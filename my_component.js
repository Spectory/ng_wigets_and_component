/*globals angular */

/*
 this component gets a list of images & a rotation objects.
 it is a wrapper to a group of my-wigdet instances.
*/
'use strict';
angular.module('app')
  .directive('myComponet', function () {
    return {
      restrict: 'E',
      scope: {
        rotation: '=',
        images: '='
      },
      template: "<div>at myComponet: {{rotation}}</div> <my-widget ng-repeat='img in images' src='{{img}}' rotation='rotation'></my-widget>",
      link: function postLink(scope, elem, attr) {
        //nothing to do at link at this example
      },
    };
  });