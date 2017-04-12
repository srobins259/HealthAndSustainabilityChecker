var myApp = angular.module('myApp', []);

  myApp.controller('ColorCtrl', ['$scope', function($scope){

  $scope.commitsStyle = {};
  $scope.starsStyle = {};
  $scope.forksStyle = {};
  $scope.issuesStyle = {};
  $scope.pullsStyle = {};

  $scope.commitsGreen = function (){
   $scope.commitsStyle.colorClass = "green";
   return $scope.commitsStyle.colorClass;
  }

  $scope.commitsWhite = function (){
   $scope.commitsStyle.colorClass = "white";
   return $scope.commitsStyle.colorClass;
  }

  $scope.commitsRed = function() {
   $scope.commitsStyle.colorClass = "red";
   return $scope.commitsStyle.colorClass;
  }

  $scope.starsGreen = function (){
   $scope.starsStyle.colorClass = "green";
   return $scope.starsStyle.colorClass;
  }

  $scope.starsWhite = function (){
   $scope.starsStyle.colorClass = "white";
   return $scope.starsStyle.colorClass;
  }

  $scope.starsRed = function() {
   $scope.starsStyle.colorClass = "red";
   return $scope.starsStyle.colorClass;
  }

  $scope.forksGreen = function (){
   $scope.forksStyle.colorClass = "green";
   return $scope.forksStyle.colorClass;
  }

  $scope.forksWhite = function (){
   $scope.forksStyle.colorClass = "white";
   return $scope.forksStyle.colorClass;
  }

  $scope.forksRed = function() {
   $scope.forksStyle.colorClass = "red";
   return $scope.forksStyle.colorClass;
  }

  $scope.issuesGreen = function (){
   $scope.issuesStyle.colorClass = "green";
   return $scope.issuesStyle.colorClass;
  }

  $scope.issuesWhite = function (){
   $scope.issuesStyle.colorClass = "white";
   return $scope.issuesStyle.colorClass;
  }

  $scope.issuesRed = function() {
   $scope.issuesStyle.colorClass = "red";
   return $scope.issuesStyle.colorClass;
  }

  $scope.pullsGreen = function (){
   $scope.pullsStyle.colorClass = "green";
   return $scope.pullsStyle.colorClass;
  }

  $scope.pullsWhite = function (){
   $scope.pullsStyle.colorClass = "white";
   return $scope.pullsStyle.colorClass;
  }

  $scope.pullsRed = function() {
   $scope.pullsStyle.colorClass = "red";
   return $scope.pullsStyle.colorClass;
  }

  describe("commitsGreen", function() {
    it("Makes commits class green", function() {
      expect($scope.commitsGreen()).toBe("green");
    });
  });

  describe("commitsRed", function() {
    it("Makes commits class red", function() {
      expect($scope.commitsRed()).toBe("red");
    });
  });

  describe("commitsWhite", function() {
  it("Makes commits class white", function() {
  expect($scope.commitsWhite()).toBe("white");
  });
  });

  describe("starsGreen", function() {
    it("Makes stars class green", function() {
      expect($scope.starsGreen()).toBe("green");
    });
  });

  describe("starsRed", function() {
    it("Makes stars class red", function() {
      expect($scope.starsRed()).toBe("red");
    });
  });

  describe("starsWhite", function() {
  it("Makes stars class white", function() {
  expect($scope.starsWhite()).toBe("white");
  });
  });

  describe("forksGreen", function() {
    it("Makes forks class green", function() {
      expect($scope.forksGreen()).toBe("green");
    });
  });

  describe("forksRed", function() {
    it("Makes forks class red", function() {
      expect($scope.forksRed()).toBe("red");
    });
  });

  describe("forksWhite", function() {
  it("Makes forks class white", function() {
  expect($scope.forksWhite()).toBe("white");
  });
  });

  describe("issuesGreen", function() {
    it("Makes issues class green", function() {
      expect($scope.issuesGreen()).toBe("green");
    });
  });

  describe("issuesRed", function() {
    it("Makes issues class red", function() {
      expect($scope.issuesRed()).toBe("red");
    });
  });

  describe("issuesWhite", function() {
  it("Makes issues class white", function() {
  expect($scope.issuesWhite()).toBe("white");
  });
  });

  describe("pullsGreen", function() {
    it("Makes pulls class green", function() {
      expect($scope.pullsGreen()).toBe("green");
    });
  });

  describe("pullsRed", function() {
    it("Makes pulls class red", function() {
      expect($scope.pullsRed()).toBe("red");
    });
  });

  describe("pullsWhite", function() {
  it("Makes pulls class white", function() {
  expect($scope.pullsWhite()).toBe("white");
  });
  });

}]);
