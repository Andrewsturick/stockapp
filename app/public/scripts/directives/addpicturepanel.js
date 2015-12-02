'use strict';

/**
 * @ngdoc directive
 * @name stockDogApp.directive:addpicturepanel
 * @description
 * # addpicturepanel
 */
angular.module('stockDogApp')
  .directive('addpicturepanel', function () {
    return {
      templateUrl: 'views/pictureupload.html',
      restrict: 'E',
      controller: function($scope){
        console.log('boob')
      }
    };
  });
