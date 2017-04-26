var myApp = angular.module('myApp', []);

myApp.controller('ColorCtrl', ['$scope', function($scope){

//Set up all of the placeholder styling variables. Include one for each metric.
  $scope.commitsStyle = {};
  $scope.starsStyle = {};
  $scope.forksStyle = {};
  $scope.issuesStyle = {};
  $scope.pullsStyle = {};

  $scope.string = {};

//Accept the metric name and color and apply it to the styling variable
  $scope.setStyle = function (type, color) {
    $scope.typeFormat(type);
    $scope[$scope.string]['colorClass'] = color;
  }

//Add Style to the end of the metric name so that it matches the variable
  $scope.typeFormat = function(type) {
      $scope.string = type + "Style";
      console.log($scope.string);
  }
  
}]);
