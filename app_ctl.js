/*globals angular, document, JST, window, _ */
angular.module('app')
  .controller('appCtl', ['$scope', '$interval', function ($scope, $interval) {
    'use strict';

    $scope.init = function () {
      console.log('appCtl init');
      $scope.arr = [
        {num: 1},
        {num: 2},
      ];
      //trigger a change every second
      $interval(function () {
        $scope.arr[0].num++;
        $scope.arr[1].num++;
      }, 1000);
    };

  }]);