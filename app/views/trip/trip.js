'use strict';

angular.module('tripexp.trip', ['ngAutocomplete', 'pickadate'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/trip', {
    templateUrl: 'views/trip/trip.html',
    controller: 'TripCtrl'
  });
}])

.controller('TripCtrl', function($scope, $http) {
  
  // NGAUTOCOMPLETE - TRIP LOCATION FIELD

  $scope.options = null;
  $scope.details = '';

  $scope.tripdetails = {};

  // DATE ORGANIZER
  var date = new Date();
  var dateArray = date.toString().split(" ");
  if (dateArray[1] === "Oct" || dateArray[1] === "Nov" || dateArray[1] === "Dec") {
    var month = "-1";
  } else {
    var month = "-0";
  }
  var dateString = dateArray[3] + month + (date.getMonth()+1) + "-" + dateArray[2]
  $scope.minDate = dateString;
  $scope.maxDate = "3000-12-31";

  // POSTING TRIP DETAILS TO API
  $scope.createTrip = function(tripdetails){
    var data = {
       tripName: tripdetails.name,
       tripLocation: tripdetails.location,
       tripStartDate: tripdetails.startDate,
       tripEndDate: tripdetails.endDate
    };
    console.log(data);
    var request = {
      method: "POST",
      url: "http://localhost:3000/api/users/1/trips",
      data: data
    }
    console.log(request)
    $http(request).success(function(response){
      console.log("success")
      console.log(response)
    }).error(function(response){
      console.log("error")
      console.log(response)
    })
  }
});  // End of controller




// .controller('TripCtrl', function($scope, $http) {
//   $scope.hitApi = function(){
//     $http.get('http://localhost:3000/api/users/1/trips/2/pois').success(function(response){
//       console.log(response);
//     }).error(function(error){
//       console.log(error);
//     });
//     // console.log("Button works!")
//   }
//   console.log("congrats you reached the trip")
// });