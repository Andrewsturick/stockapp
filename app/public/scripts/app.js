'use strict';

/**
 * @ngdoc overview
 * @name commonApp
 * @description
 * # commonApp
 *
 * Main module of the application.
 */
var app = angular
  .module('stockDogApp', [
    'satellizer',
    'ui.router',
    'oitozero.ngSweetAlert',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'mgcrea.ngStrap',
    'LocalStorageModule',
    'angular-jwt'
  ])

  .config(function ($stateProvider, $authProvider) {
    $stateProvider
      .state('home', {
        url:'/home',
        templateUrl: 'views/main.html',
        controller: 'HomeCtrl'
      })
      .state('login', {
        url:'/login',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .state('dashboard', {
        url:'/dashboard',
        templateUrl: 'views/dashboard.html',
        controller: 'MainCtrl'
      })
      .state('register', {
        url:'/register',
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl'
      })
      // .otherwise({
      //   redirectTo: '/home'
      // });


      $authProvider.google({
        clientId: "678836402309-f706uc694dqdkhec4k5hbkanlqcbosi5.apps.googleusercontent.com"
      });



  });
