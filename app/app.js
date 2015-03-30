'use strict';

// Declare app level module which depends on views, and components
var tripexp = angular.module('tripexp', [
  'ngRoute',
  'ngResource',
  'tripexp.login',
  'tripexp.home'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/login'});
}]);