var app = angular.module("app", []);

app.controller("emp", ["$scope", "$http", function($scope, $http) {
  $scope.a = 10;
  $scope.b = 20;


  // $scope.doData = function() {
  //   $scope.characters = getData.getCharacters()
  // }


  $http({
    url: 'https://finalspaceapi.com/api/v0/character',
    method: 'GET'
  }).then(function (resp) {
    //success function
    console.log(resp)
    $scope.characters = resp.data

  },
  function (resp) {
    //failure function
    console.log(resp)

  }
  )





}]);



// app.provider('getData', function(){


//   this.config = function(url) {
//     baseUrl = url;
//   }

 
//   this.$get = ['$log', '$http',  function($log, $http){   

//     $log.log('instanting getData..')


//     var characters = {}
//     characters.getCharacters = function() {
        
//       $http({
//         url: baseUrl + '/character',
//         method: 'GET'
//       }).then(function (resp) {
//         //success function
//         // console.log(resp)
//         characters = resp.data

//         console.log(characters)

//         return characters
        
//       },
//       function (resp) {
//         //failure function
//         console.log(resp)
//         $log.error("ERROR occurred")

//       });

//     }
  
//     return characters;




//   }]

// });



// app.config(['getDataProvider', function(getDataProvider){
//   console.log("service provider on")
//   getDataProvider.config('https://finalspaceapi.com/api/v0');
// }])