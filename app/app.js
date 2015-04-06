'use strict';

// Declare app level module which depends on views, and components
var tripexp = angular.module('tripexp', [
  'ngRoute',
  'ngResource',
  'ngAutocomplete',
  'pickadate',
  'tripexp.login',
  'tripexp.home',
  'tripexp.trip',
  'tripexp.poi',
  'tripexp.plotmap'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/login'});
}])

