'use strict';

angular.module('tripexp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'views/login/login.html',
    controller: 'LoginCtrl'
  });
}])

.controller('LoginCtrl', function($scope) {
  $scope.login = function(){
    console.log("BUtton works!")
  }
  console.log("congrats you reached the login")
});