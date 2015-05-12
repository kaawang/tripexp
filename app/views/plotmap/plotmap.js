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
    // opens Google maps Map Canvas
    link: function initialize() {
      var map, myLatlng, tripId, poiMarkers, placePOIMarker;
      var bounds = new google.maps.LatLngBounds();
      var mapOptions = {
        mapTypeId: 'roadmap',
        zoom: 10,
      };

      // Trip Data Package
      var tripRequest = {
        method: "GET",
        url: "http://localhost:3000/api/users/1/trips/1"
      };

      // HTTP call to API for Trip Location
      $http(tripRequest).success(function(tripResponse){
        mapOptions.center = new google.maps.LatLng(tripResponse[0].geocode_latitude, tripResponse[0].geocode_longitude);

        // Appending Trip Details into Information Div 
       $('#information').append(
          '<p id=trip-details>'+ tripResponse[0].trip_name+'<br>'+tripResponse[0].location+'<br>'+tripResponse[0].start_date+' - '+tripResponse[0].end_date+'</p>'
        )
        // POI Data Package based off of Trip response
        var poiRequest = {
          method: "GET",
          url: "http://localhost:3000/api/users/1/trips/"+tripResponse[0].id+"/pois"
        };        

        // HTTP Call for POIs
        $http(poiRequest).success(function(poiResponse){
          poiMarkers = poiResponse;
          map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
          map.setTilt(45);                  
          for (var i = 0; i < poiMarkers.length-1; i++){
            var position = new google.maps.LatLng(poiMarkers[i].geocode_latitude, poiMarkers[i].geocode_longitude);
            bounds.extend(position);
            var marker = new google.maps.Marker({
              position: position,
              map: map,
              title: 'Marker down'
            })
            google.maps.event.addListener(marker, 'click', (function(marker, i) {
              console.log('you clicked ', marker)
            }))
          } // End for loop
        }).error(function(poiResponse){
          console.log('error poi', poiResponse)
        })
      }).error(function(response){
        console.log('error', response)
      })
    }
  };
})

.controller('PlotMapCtrl', function($scope, $http, $route, $location, $window) {
  // DISPLAY INFORMATION

})  // End of controller
  