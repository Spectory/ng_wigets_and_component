/*globals angular*/

angular.module('app.services').factory('ajaxService', ['$http',
  function ($http) {
    'use strict';

    var ajaxService = {};

    /* istanbul ignore next */
    ajaxService.getPromise = function (method, url, params) {
      //mocked promoise
      var value_from_ajax = url + ' => returned ' + Math.random();
      var f = function (callback) { callback(value_from_ajax); };
      return {
        then: f
      };
    };

    return ajaxService;
  }]);
