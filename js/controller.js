var app = angular.module('myApp', []);


  app.controller('myCtrl', function($scope, $log) {
    var numbers = 20;
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
      var total = $scope.num2+$scope.num1;
      var tot_min = total - 2;
      var tot_max = total + 2;
      var notIn = false;
      var val;
      for (var i=0; i<2; i++) {
        $log.log("Schleife: " + i);
        notIn = false;
        while (!notIn) {
          notIn = true;
          val = parseInt(Math.random()*(tot_max - tot_min) + tot_min);
          $log.log("Wert: " +val);
          if (i > 0) {
            for (var j=0; j<i; j++)
              if (input[j][0] == val || input[j][0] == 0) notIn = false;
          }
          if (val == total) notIn = false;
        }
        data = [val, false];
        input.push(data);
      }
      data = [total, true];
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
