var app = angular.module('myApp', []);


  app.controller('myCtrl', function($scope) {
    var numbers = 20;
    $scope.max1 = parseInt(numbers/2);
    $scope.max2 = parseInt(numbers/2);
    $scope.range1 = function() {
      $scope.max2 = numbers - $scope.num1;
      var input = [];
      for (var i=0; i<$scope.num1; i++)
        input.push(i);
      return input;
    };

    $scope.range2 = function() {
      $scope.max1 = numbers - $scope.num2;
      var input = [];
      for (var i=0; i<$scope.num2; i++)
        input.push(i);
      return input;
    };
    $scope.range3 = function() {
      var input = [];
      var total = $scope.num2+$scope.num1;
      var rest = numbers-total;
      for (var i=0; i<rest; i++)
        input.push(i);
      return input;
    };
    });
