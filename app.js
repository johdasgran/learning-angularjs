var app = angular.module("app", []);

app.controller("emp", ["$scope", "$http", function($scope, $http) {
  $scope.a = 10;
  $scope.b = 20;


  $scope.msg = "This is message";

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

  });





}]);



app.directive('myInfoMsg', function() {
  return {
    template: "<strong>{{msg}}</strong>"
  }
})

app.directive('myCustomMsg', function() {
  return {
    templateUrl: "my-custom-msg.html"
  }
})



app.controller('msg', ['$scope', function($scope){
  $scope.m = "Hi {{ name }}";

}])

// app.directive('message', function(){

//   return {

//     compile: function(tElement, tAttributes){
//       console.log(tAttributes.text + " -In compile")
//       tElement.css("border", "1px solid papayawhip")

//       return {
//         pre: function(scope, iElement, iAttributes, controller){
//           console.log(iAttributes.text + " -In Pre")
//         },
//         post: function(scope, iElement, iAttributes, controller){
//           console.log(iAttributes.text + " -In Post")

//           if(iAttributes.text === "3"){
//             iElement.css("border", "1px solid #f34")
//           }

//           iElement.on("click", scope.btnClick)

//         }
//       }


//     },

//     controller: function($scope, $element, $attrs, $interpolate){

//       // var v = $interpolate($attrs.text)($scope);

//       // var interpolateFc = $interpolate($scope.m);
//       // var interpolateFcE = interpolateFc({ name: 'Joy'});

//       var interpolateFcE = $interpolate($scope.m)({name: 'Yu-chan'});



//       console.log($attrs.text + " -In controller");

//       $scope.btnClick = function(){
//         alert(interpolateFcE)
//         // alert("click on number: " + v)
//       }


//     }


//   }
// })








app.directive('message', function(){

  //post-link function
  return function(scope, iElement, iAttributes, controller){
        iElement.css("border", "1px solid papayawhip")
        console.log(iAttributes.text + " -In Post")

        if(iAttributes.text === "3"){
          iElement.css("border", "1px solid #f34")
        }

      }

})









































































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