var app = angular.module("app", []);

app.controller("emp", ["$scope", "calcFactory", function($scope, calcFactory) {
  $scope.a = 10;
  $scope.b = 20;

  $scope.doSum = function () {
    // $scope.sum = parseInt($scope.a) + parseInt($scope.b);
    $scope.sum = calcFactory.getSum($scope.a, $scope.b)

  }

  // $http({
  //   url: 'https://finalspaceapi.com/api/v0/character',
  //   method: 'GET'
  // }).then(function (resp) {
  //   //success function
  //   console.log(resp)

  // },
  // function (resp) {
  //   //failure function
  //   console.log(resp)

  // }
  // )


  // $scope.doDoubleAndSum = function () {
  //   $scope.a = $scope.a * 2;
  //   $scope.b = $scope.b * 2;
  //   $scope.sum = parseInt($scope.a) + parseInt($scope.b);
  // }


}]);


app.factory('calcFactory', ['$http', '$log', function($http, $log){
  $log.log('instanting calcFactory..')

  var oCalcService = {}
  oCalcService.getSum = function(a, b) {
    return parseInt(a) + parseInt(b);
  }

  return oCalcService;

}])