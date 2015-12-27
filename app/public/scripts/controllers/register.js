'use strict';

/**
 * @ngdoc function
 * @name stockDogApp.controller:RegisterctrlCtrl
 * @description
 * # RegisterctrlCtrl
 * Controller of the stockDogApp
 */
angular.module('stockDogApp')
  .controller('RegisterCtrl', function ($scope, userService) {




/////////
    ////makes number array for dropdown components
    $scope.number = 10;
    $scope.numberArr = function(){
      var numberArray = [];
      var number = $scope.number;
      while(number>0){
          numberArray.push(number);
          number--
      }
      return numberArray;
    }



//////////
    ////////array for interests components
    $scope.interests = [
      [ {assetClass : {title: 'Value Investing'}}
      , {assetClass : {title: 'Technical Investing/Charting'}}
      , {assetClass : {title: 'Options Trading'}}
      , {assetClass : {title: 'American Equities'}}]
     ,[
        {assetClass : {title: 'ETFs'}}
      , {assetClass : {title: 'Quantitative Trading'}}
      , {assetClass : {title: 'Futures and Commodities'}}
      , {assetClass : {title: 'Currencies'}}]
     ,[
        {assetClass : {title: 'Global Equities'}}
      , {assetClass : {title: 'Penny Stocks'}}
      , {assetClass : {title: 'Bonds Notes and Interest Rate Assets'}}
      , {assetClass : {title: 'Earnings Events'}}
      ]
  ]

    $scope.select = function($event){
      console.log($event)
    }


////////////Constructs user

        $scope.following= {
              'Value Investing': 1,
              'Technical Investing/Charting': 1,
              'Options Trading'  : 1,
              'American Equities': 1,
              'ETFs':1,
              'Quantitative Trading': 1,
              'Futures and Commodities': 1,
              'Currencies': 1,
              'Global Equities': 1,
              'Penny Stocks':  1,
              'Bonds Notes and Interest Rate Assets': 1,
              'Earnings Events': 1
        },

        $scope.tradeFrequency= 0;
        $scope.username = '';
        $scope.name='';
        $scope.password = '';
        $scope.passwordConfirm = '';
      // var a = 'Value Investing';



    $scope.createUser = function(){
      if($scope.password === $scope.passwordConfirm){
        var user = {}
        ////creates user following preferences
        var following = {};
        following.valueInv = $scope.valueInv;
        following.technical = $scope.technical;
        following.options = $scope.options;
        following.americanEquities = $scope.americanEquities;
        following.ETFs = $scope.ETFs;
        following.quant = $scope.quant;
        following.futuresCommodities  = $scope.futuresCommodities;
        following.currencies = $scope.currencies;
        following.globalEquities = $scope.globalEquities;
        following.pennyStocks = $scope.pennyStocks;
        following.bondsNotesIR = $scope.bondsNotesIR;
        following.earnings = $scope.earnings;

        ////creates user//////
        user.following = $scope.following;
        user.tradeFrequency = $scope.tradeFrequency;
        user.username = $scope.username;
        user.password = $scope.password;
        user.email = $scope.email;
        user.name = $scope.name;

        console.log('llllll',user);

        createUserService.createUser(user);
      }  else{swal('Sorry!', 'Your passwords did not match!', 'error')}
    }

  });
