/*globals angular, document, JST, window, _ */
angular.module('app.widgets', []);
angular.module('app.services', []);
angular.module('app.componets', ['app.services']);
angular.module('app', ['app.widgets', 'app.componets', 'app.services']);
