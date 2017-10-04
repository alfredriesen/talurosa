var app = angular.module('myApp', []);


  app.controller('myCtrl', function($scope) {
    var numbers = 10;
    $scope.wrong = 0;
    $scope.right = 0;
    $scope.max = 10;
    $scope.max1 = parseInt(numbers/2);
    $scope.max2 = parseInt(numbers/2);
    $scope.num1 = parseInt(Math.random()*$scope.max1);
    $scope.num2 = parseInt(Math.random()*$scope.max2);
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
    $scope.range4 = function() {
      var input = [];
      var data = [];
      for (var i=0; i<2; i++) {
        var notIn = false;
        while (!notIn) {
          notIn = true;
          data = [parseInt(Math.random()*numbers), false];
          if (input.length > 0) {
            for (var j=0; j<input.length; j++)
              if (input[j] == data) notIn = false;
            }
          input.push(data);
        }
      }
      data = [$scope.num2+$scope.num1, true];
      input.splice(parseInt(Math.random()*(input.length+1)),0,data);
      return input;
    };
    $scope.test = function(number) {
      if (number == $scope.num2+$scope.num1) {
        $scope.right++;
      } else {
        $scope.wrong++;
      }
      $scope.num1 = parseInt(Math.random()*$scope.max1);
      $scope.num2 = parseInt(Math.random()*$scope.max2);
      
    };
    });
