'use strict';

/**
 * @ngdoc directive
 * @name stockDogApp.directive:WatchlistPanel
 * @description
 * # WatchlistPanel
 */

angular.module('stockDogApp')
  .directive('watchlistpanel', function ($modal) {
    return {
      templateUrl: '../views/watchlistpanel.html',
      restrict: 'E',
      scope: {

      },
      link: function($scope) {
        $scope.watchlist = {};
        var addListModal = $modal({
          scope: $scope,
          templateUrl: 'views/addlist-modal.html',
          show: false
        });
        $scope.showModal = function () {
          addListModal.$promise.then(addListModal.show);
        };
        $scope.hideModal = function(){
          addListModal.$promise.then(addListModal.hide)
        }
      },
      controller: function($scope, userModelService){
          $scope.clearWatchlist = function(){
            $scope.watchlist = {
              name:'',
              description: '',
              stocks: []
            }
          }

          $scope.createList = function(){
            userModelService.currentUser.watchlists.push($scope.watchlist);
            $scope.clearWatchlist();
            $scope.hideModal();
            console.log(userModelService.returnUser());
          }


          $scope.watchlists = userModelService.returnCurrentUserWatchlists();
          $scope.clickedWatchlist = function(t, i){
            if (!$scope.watchlists[i].stocks){
              $scope.watchlists[i].stocks = [];
              $scope.watchlists[i].stocks.push('boob')
            
            } else{$scope.watchlists[i].stocks.push('boobie')}

            console.log($scope.watchlists[i].stocks)
            // $scope.watchlists[i].push('OIL');
            console.log($scope.watchlists);
            console.log(userModelService.returnUser())
          }



      }
    };
  });
