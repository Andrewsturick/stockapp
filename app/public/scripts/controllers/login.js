'use strict';

/**
 * @ngdoc function
 * @name commonApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the commonApp
 */
angular.module('stockDogApp')
  .controller('LoginCtrl', function ($scope, $location, LoginService, userModelService, $auth, jwtHelper) {

    $scope.user = {
      username: "",
      password:""
    }


///////social login

  $scope.authenticate = function(provider) {
    $auth.authenticate(provider)
    .then(function(res) {
      console.log(res)
      console.log('authenticate');
    })
    .catch(function(err){
      console.error(err);
    });
  };


  $scope.getUserInfo = function(){
      if($scope.user.username ==="" || $scope.user.password===""){swal("WHOOPS!", "Please enter username and password", "error");;}
      LoginService.loadModelFromDb($scope.user)
      .then(function(user,err){
        try{
            var decoded = jwtHelper.decodeToken(user.data);
            localStorage['user_token']= user.data
            userModelService.currentUser = decoded.sub;
            $scope.$watch(function(){return userModelService.currentUser}, function(n, o){
              $location.path("/home");
            })
        } catch(e){
            swal("whoops!!", "Invalid username or password", "error");
        }
        if(user.data==='none found' || user.data==='false' || !user.data){swal("whoops!!", "Invalid username or password", "error");}
        if(!user.data){
          swal("Oops...", "Invalid username or password!", "error");
        }
      })
    }

    ////manual login





  });
