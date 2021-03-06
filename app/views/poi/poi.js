'use strict';

angular.module('tripexp.poi', ['ngAutocomplete'])

.config(['$routeProvider', function($routeProvider, $locationProvider) {
  $routeProvider.when('/poi', {
    templateUrl: 'views/poi/poi.html',
    controller: 'PoiCtrl'
  });
}])

.controller('PoiCtrl', function($scope, $http, $route, $location, $window) {
  
  // ADD FORMS

  $scope.poiCollection = [{ }];

  $scope.addField = function() {
    $scope.poiCollection.push({})
  }

  $scope.removeField = function() {
    if ($scope.poiCollection.length <= 1) {
      console.log("must have at least 1");
    } else {
      $scope.poiCollection.pop();
    }
  }

  $scope.clearFields = function() {
    $scope.poiCollection = [{}];
  }

  // POSTING TRIP DETAILS TO API
  $scope.submitPois = function(){
    console.log("SCOPE.LIST")
    console.log($scope.poiCollection);
    var data = {
       poisAddressArray: $scope.poiCollection
    };
    console.log("poisAddressArray")
    console.log(data.poisAddressArray);
    var request = {
      method: "POST",
      url: "http://localhost:3000/api/users/1/trips/1/pois",
      data: data
    }
    console.log(request)
    $http(request).success(function(response){
      console.log("success")
      console.log(response)
      // $location.path("/pois");
      // REDIRECTS UPON SUCCESS
    }).error(function(response){
      console.log("error")
      // console.log(response)
    })
  }
});  // End of controller
