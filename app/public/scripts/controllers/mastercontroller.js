'use strict';

/**
 * @ngdoc function
 * @name stockDogApp.controller:MastercontrollerCtrl
 * @description
 * # MastercontrollerCtrl
 * Controller of the stockDogApp
 */
angular.module('stockDogApp')
  .controller('mastercontroller', function ($scope) {
    $scope.logout = function(){
        localStorage.clear();
    }
  });
