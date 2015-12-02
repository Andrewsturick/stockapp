'use strict';

/**
 * @ngdoc function
 * @name commonApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the commonApp
 */
angular.module('stockDogApp')
  .controller('LoginCtrl', function ($scope, $location, LoginService, $auth) {
  $scope.user = {
    username: "",
    password:""
  }


  $scope.authenticate = function(provider) {
    $auth.authenticate(provider)
    .then(function(res) {
      console.log(res);
    })
    .catch(function(err){
      console.error(err);
    });
  };


  $scope.getUserInfo = function(){
      LoginService.loadModelFromDb($scope.user.username)
      .then(function(user,err){
        console.log(user)
        if(!user.data[0]){
          swal("Oops...", "Invalid username or password!", "error");
        }
          else if ($scope.user.password===user.data[0].password){
            localStorage.user = (user.data[0].username);
            localStorage.nextListNumber = (user.data[0].nextWatchlistNumber);
            localStorage.watchlists = (user.data[0].watchlists);
            $location.path("/dashboard");

         } else{
           console.log('password error')
            swal("Oops...", "Invalid username or password", "error");
          }
      })
    }
  });
