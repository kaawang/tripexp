'use strict';

angular.module('tripexp.trip', [])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/trip', {
    templateUrl: 'views/trip/trip.html',
    controller: 'TripCtrl'
  });
}])

.controller('TripCtrl', function($scope, $http) {
  $scope.hitApi = function(){
    $http.get('http://localhost:3000/api/users/1/trips/2/pois').success(function(response){
      console.log(response);
      alert(response)
    }).error(function(error){
      console.log(error);
    });
    // console.log("Button works!")
  }
  console.log("congrats you reached the trip")
});