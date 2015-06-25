/*globals angular */
'use strict';
angular.module('app.componets')
  .directive('myComponet', function (ajaxService) {
    return {
      restrict: 'E',
      scope: {
        title: '@'
      },
      template: "<my-widget title='title' binded_by_value='{{val}}'></my-widget>",
      link: function postLink(scope, elem, attr) {
        // Init some values for the compenet usage
        console.log('myComponet link');
        ajaxService.getPromise('GET', attr.url).then(function (result_of_ajax) {
          scope.val = result_of_ajax;
        });
      },
    };
  });