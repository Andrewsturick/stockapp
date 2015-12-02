'use strict';

/**
 * @ngdoc function
 * @name commonApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the commonApp
 */
angular.module('stockDogApp')
  .controller('MainCtrl', function ($scope, $location, checkAuth) {

    $scope.checkAuth = checkAuth;

    if($scope.checkAuth.checkAuth()===true){
        console.log('authed in')
    }

    $scope.redirectIfNotAuthed = function(){
       if( $scope.checkAuth.checkAuth()===true){
       }
       else{
            $location.path("/login");
       }
    }
        $scope.redirectIfNotAuthed();
  });
