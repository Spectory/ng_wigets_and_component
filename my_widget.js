/*globals angular */
'use strict';
angular.module('app.widgets')
  .directive('myWidget', function () {
    return {
      restrict: 'E',
      scope: {
        // Isolate scope parameter list
        callBack: '&',
        bindedByRef: '=',
        bindedByValue: '@'
      },
      template: ' '
        + '<div style="border:1px solid black">'
        + '  <h4>My Wiget</h3>'
        + '  <p>bindedByRef: {{bindedByRef}}</p>'
        + '  <p>bindedByValue: {{bindedByValue}}</p>'
        + '</div>',
      link: function postLink(scope, elem, attr) {
        console.log('myWidget link');
        // Init
        // Here we do things like register on global events
        // and init local variables

        // UI -> Model
        // Here we write handlers for the local widget’s UI events
        // and mutate the scope accordingly and/or call callbacks
        // on the scope to let the component know that something happened

        // Model -> UI
        // Here we write watches on the isolate scope and change the
        // drawing of the widget according to changes in the model

        // Cleanup
        // Here we unregister from global events on scope destroy
      },
    };
  });