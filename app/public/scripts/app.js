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
    'ngTouch'
  ])

  .config(function ($routeProvider, $authProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/main.html',
        controller: 'HomeCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'MainCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl'
      })
      .otherwise({
        redirectTo: '/home'
      });


      $authProvider.google({
        clientId: "678836402309-f706uc694dqdkhec4k5hbkanlqcbosi5.apps.googleusercontent.com"
      });



  });
