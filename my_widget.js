/*globals angular */
'use strict';
/*
my-widget displays an image.
when you hover over it, the image spins.
when rotation.degrees changes, the image is tilted.
*/

angular.module('app')
  .directive('myWidget', function ($famous) {
    return {
      restrict: 'E',
      scope: {
        // Isolate scope parameter list
        rotation: '=',
        src: '@'
      },
      template: ' '
        + ' <div class="animated-img-wrapper" ng-mouseover="onHover()">'
        + '  <fa-app>'
        + '  <fa-modifier '
        + '   fa-size="[100, 100]"'
        + '   fa-align="[0.5, 0]"'
        + '   fa-origin="[0.5, 0]"'
        + '   fa-rotate-y="rotate.get()">'
        + '     <fa-surface>'
        + '       <img class="animated-img" ng-src="{{src}}"/>'
        +         '<div>{{msg}}</div>'
        + '     </fa-surface>'
        + '   </fa-modifier>'
        + '  </fa-app>'
        + ' </div>',
      link: function postLink(scope, elem, attr) {
        // Init
        var LOCKED = false;
        var Transitionable = $famous['famous/transitions/Transitionable'];
        scope.rotate = new Transitionable(0);

        function lock() {
          LOCKED = true;
        }
        function unlock() {
          LOCKED = false;
        }
        function showMsg() {
          scope.msg = 'wee!!! I\'m spinning!!!';
        }
        function removeMsg() {
          scope.msg = 'I\'m dizzy...';
        }

        function lockAndShowMsg() {
          lock();
          showMsg();
        }
        function unlockAndRemoveMsg() {
          removeMsg();
          unlock();
        }

        function degreeToRadian(degrees) {
          return 0.017 * degrees;
        }

        function animate() {
          if (LOCKED) { return; }
          lockAndShowMsg();
          scope.rotate.set(
            2 * Math.PI,
            {
              duration: 800,
            },
            function () {
              scope.rotate.set(
                0,
                {
                  duration: 0,
                },
                function () {
                  scope.$apply(function () {unlockAndRemoveMsg(); });
                }
              );
            }
          );
        }

        function tilt() {
          if (LOCKED || !scope.rotation) { return; }
          lock();
          scope.rotate.set(
            degreeToRadian(scope.rotation.degrees),
            {
              duration: 1000,
            },
            unlock
          );
        }


        // UI -> Model
        // Here we write handlers for the local widget’s UI events
        // and mutate the scope accordingly and/or call callbacks
        // on the scope to let the component know that something happened
        scope.onHover = function () {
          animate();
        };


        // Model -> UI
        // Here we write watches on the isolate scope and change the
        // drawing of the widget according to changes in the model
        scope.$watch('rotation', function () {
          tilt();
        }, true);


        // Cleanup
        // Here we unregister from global events on scope destroy
        elem.on('$destroy', function () {
          //there is nothing to destroy for this example...
        });
      },
    };
  });