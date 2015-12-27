'use strict';

/**
 * @ngdoc function
 * @name stockDogApp.controller:HomectrlCtrl
 * @description
 * # HomectrlCtrl
 * Controller of the stockDogApp
 */
angular.module('stockDogApp')
  .controller('HomeCtrl', function ($scope, checkAuthService ) {

    checkAuthService.redirectIfNotAuthed()
  });
