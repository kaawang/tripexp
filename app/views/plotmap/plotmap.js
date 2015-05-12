'use strict';
angular.module('tripexp.plotmap', [])

.config(['$routeProvider', function($routeProvider, $locationProvider) {
  $routeProvider.when('/plotmap', {
    templateUrl: 'views/plotmap/plotmap.html',
    controller: 'PlotMapCtrl'
  });
}])

.directive('mapCanvas', function($http) {
  return {

    link: function initialize() {
      var map, myLatlng;
      var bounds = new google.maps.LatLngBounds();
      var mapOptions = {
        mapTypeId: 'roadmap',
        zoom: 4,
      };

      var tripRequest = {
        method: "GET",
        url: "http://localhost:3000/api/users/1/trips/1"
      };

      var poiRequest = {
        method: "GET",
        url: "http://localhost:3000/api/users/1/trips/1/pois"
      };

      $http(tripRequest).success(function(tripResponse){
        // console.log('success trip', tripResponse)
        mapOptions.center = new google.maps.LatLng(tripResponse[0].geocode_latitude, tripResponse[0].geocode_longitude);
        // console.log('in trip request', mapOptions)
        $http(poiRequest).success(function(poiResponse){
        map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
        map.setTilt(45);                  
          console.log('success poi')
        })
      }).error(function(response){
        console.log('error', response)
      })



    }
  };
})

.controller('PlotMapCtrl', function($scope, $http, $route, $location, $window) {

})  // End of controller
  