'use strict';

// Declare app level module which depends on views, and components
var tripexp = angular.module('tripexp', [
  'ngRoute',
  'tripexp.login',
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/login'});
}]);