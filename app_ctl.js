/*globals angular, document, JST, window, _ */
angular.module('app')
  .controller('appCtl', ['$scope', '$rootScope', '$interval', function ($scope, $rootScope, $interval) {
    'use strict';

    $scope.init = function () {
      console.log('appCtl init');
      //trigger a change every second
      $rootScope.timer = 0;
      $interval(function () {
        $rootScope.timer++; //how to brodcast event when the widjet is on isolated scppe?
      }, 1000);
    };

  }]);