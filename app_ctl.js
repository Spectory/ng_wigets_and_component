/*globals angular, document, JST, window, _ */
angular.module('app')
  .controller('appCtl', ['$scope', function ($scope) {
    'use strict';
    //scope.rotation is defined by the ng-model on home.html
    $scope.init = function () {
      $scope.images = [
        'images/angular.png',
        'images/famous.png',
        'images/bower.png',
        'images/grunt.png',
        'images/rails.png',
        'images/js.png',
        'images/yoman.png',
        'images/docker.png',
        'images/AWS.png',
        'images/heroku.png',
        'images/new-relic.png',
      ];
    };
  }]);