'use strict';

/**
 * @ngdoc function
 * @name commonApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the commonApp
 */
angular.module('stockDogApp')
  .controller('MainCtrl', function ($scope, $location, checkAuthService, localStorageService, userModelService) {
///////logic to direct user upon initial entry to site///////
    $scope.checkAuth = checkAuthService;


    $scope.redirectIfNotAuthed = function(){
       if($scope.checkAuth.checkAuth()===true){
         userModelService.currentUser = localStorage['user_token'];
         $location.path("/home");
       }
       else{
         $location.path("/login");
       }
    }

    $scope.redirectIfNotAuthed();


///////deletes user tokens upon logout so user is directed to login until authed in

    $scope.logout = function(){
      delete  localStorage['satellizer_token'];
      delete localStorage['user_token']
    }

  });
