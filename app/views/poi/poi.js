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

  $scope.poiCollection = [
    {"value": "Portillo's Hot Dogs, West Ontario Street, Chicago, IL, United States"},
    {"value": "Girl & the Goat, West Randolph Street, Chicago, IL, United States"},
    {"value": "Magnificent Mile, Chicago, IL, United States"},
    {"value": "Lou Malnati's Pizzeria, North Wells Street, Chicago, IL, United States"},
    {"value": "Navy Pier, East Grand Avenue, Chicago, IL, United States"},
    {"value": "Momotaro, West Lake Street, Chicago, IL, United States"},
    {"value": "m.henry, North Clark Street, Chicago, IL, United States"},
    {"value": "Half Acre Beer Company, North Lincoln Avenue, Chicago, IL, United States"},
    {"value": "Lincoln Park Zoo, North Clark Street, Chicago, IL, United States"},
    {"value": "Del Seoul, North Clark Street, Chicago, IL, United States"},
    {"value": "Kai Zan, West Chicago Avenue, Chicago, IL, United States"},
    {"value": "Millennium Park, East Randolph Street, Chicago, IL, United States"},
    {"value": "Joy Yee's Noodles, South Halsted Street, Chicago, IL, United States"},
    {"value": "Willis Tower, South Wacker Drive, Chicago, IL, United States"},
    {"value": "Wendella Boats, North Michigan Avenue, Chicago, IL, United States"},
    {"value": "Slurping Turtle, West Hubbard Street, Chicago, IL, United States"}
  ];

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
      $location.path("/plotmap");
      // REDIRECTS UPON SUCCESS
    }).error(function(response){
      console.log("error")
      // console.log(response)
    })
  }
});  // End of controller
