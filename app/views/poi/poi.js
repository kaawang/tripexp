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

  $scope.table = { fields: [''] };

  $scope.addField = function() {
    $scope.table.fields.push('')
  }

  $scope.removeField = function() {
    $scope.table.fields.pop('');
  }

  $scope.clearFields = function() {
    $scope.table.fields = [];
  }

  // POSTING TRIP DETAILS TO API
  $scope.submitPois = function(){
    console.log($scope.table);
    var data = {
       poisAddressArray: $scope.table.fields
    };
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
      $location.path("/pois");
      // REDIRECTS UPON SUCCESS
    }).error(function(response){
      console.log("error")
      // console.log(response)
    })
  }
});  // End of controller
