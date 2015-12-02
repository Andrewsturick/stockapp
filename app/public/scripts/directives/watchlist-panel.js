'use strict';

/**
 * @ngdoc directive
 * @name stockDogApp.directive:WatchlistPanel
 * @description
 * # WatchlistPanel
 */

angular.module('stockDogApp')
  .directive('watchlistpanel', function () {
    return {
      template: '../views/watchlistpanel.html',
      restrict: 'E',
      scope: {

      },
      link: function postLink($scope, element, attrs) {

      },
      controller: function(){

      }

    };
  });
