'use strict';

angular.module('tripexp.login', [])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'views/login/login.html',
    controller: 'LoginCtrl'
  });
}])

.controller('LoginCtrl', function($scope) {
  $scope.login = function(){
    console.log("Button works!")
  }
  console.log("congrats you reached the login")
});