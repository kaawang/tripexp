'use strict';

angular.module('tripexp.plotmap', [])

.config(['$routeProvider', function($routeProvider, $locationProvider) {
  $routeProvider.when('/plotmap', {
    templateUrl: 'views/plotmap/plotmap.html',
    controller: 'PlotMapCtrl'
  });
}])

.controller('PlotMapCtrl', function($scope, $http, $route, $location, $window) {
  // $http.get("http://localhost:3000/api/url/")

})  // End of controller
  
.directive('mapCanvas', function($http) {
  var triprequest = {
    method: "GET",
    url: "http://localhost:3000/api/users/1/trips/1"
  }
  $http(triprequest).success(function(response){
    console.log("success")
    var trip = response
    console.log(trip)
  }).error(function(response){
    console.log("error")
  })
  return {
    link: function(scope, element) {
      var mapOptions = {
        center: { lat: 37.09024, lng: -95.712891},
        zoom: 4
      };
      var map = new google.maps.Map(element[0], mapOptions);
    }
  };
})

  // console.log("congrats you made it")
  // // ADD FORMS

  // $scope.poiCollection = [{ }];

  // $scope.addField = function() {
  //   $scope.poiCollection.push({})
  // }

  // $scope.removeField = function() {
  //   if ($scope.poiCollection.length <= 1) {
  //     console.log("must have at least 1");
  //   } else {
  //     $scope.poiCollection.pop();
  //   }
  // }

  // $scope.clearFields = function() {
  //   $scope.poiCollection = [{}];
  // }

  // // POSTING TRIP DETAILS TO API
  // $scope.submitPois = function(){
  //   console.log("SCOPE.LIST")
  //   console.log($scope.poiCollection);
  //   var data = {
  //      poisAddressArray: $scope.poiCollection
  //   };
  //   console.log("poisAddressArray")
  //   console.log(data.poisAddressArray);
  //   var request = {
  //     method: "POST",
  //     url: "http://localhost:3000/api/users/1/trips/1/pois",
  //     data: data
  //   }
  //   console.log(request)
  //   $http(request).success(function(response){
  //     console.log("success")
  //     console.log(response)
  //     // $location.path("/pois");
  //     // REDIRECTS UPON SUCCESS
  //   }).error(function(response){
  //     console.log("error")
  //     // console.log(response)
  //   })
  // }
