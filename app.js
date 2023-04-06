var app = angular.module("app", []);

app.controller("emp", ["$scope", "calcService", function($scope, calcService) {
  $scope.a = 10;
  $scope.b = 20;

  $scope.doSum = function () {
    // $scope.sum = parseInt($scope.a) + parseInt($scope.b);
    $scope.sum = calcService.getSum($scope.a, $scope.b)

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


// app.factory('calcFactory', ['$http', '$log', function($http, $log){
//   $log.log('instanting calcFactory..')

//   var oCalcService = {}
//   oCalcService.getSum = function(a, b) {
//     return parseInt(a) + parseInt(b);
//   }

//   return oCalcService;

// }]);

app.provider('calcService', function(){


  this.config = function(url) {
    baseUrl = url;
  }

 
  this.$get = ['$log', '$http', function($log, $http){   

    $log.log('instanting calcService..')


    $http({
      url: baseUrl + '/character',
      method: 'GET'
    }).then(function (resp) {
      //success function
      console.log(resp)

    },
    function (resp) {
      //failure function
      console.log(resp)
      $log.error("ERROR occurred")

    });


    var oCalcService = {}
    oCalcService.getSum = function(a, b) {
      return parseInt(a) + parseInt(b);
    }
  
    return oCalcService;




  }]

});


app.config(['calcServiceProvider', function(calcServiceProvider){
  console.log("service provider on")
  calcServiceProvider.config('https://finalspaceapi.com/api/v0');
}])