/*globals angular */
'use strict';
angular.module('app.componets')
  .directive('myComponet', function () {
    return {
      restrict: 'E',
      scope: {
        obj: '='
      },
      template: "<my-widget binded_by_ref='obj.num' binded_by_value='{{val}}'></my-widget>",
      link: function postLink(scope, elem, attr) {
        console.log('myComponet link');
        // Init some values for the compenet usage
        scope.val = 'some fixed ' + Math.floor(Math.random() * 10);
      },
    };
  });