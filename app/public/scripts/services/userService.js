'use strict'

angular.module('stockDogApp')
       .service('createUserService', function($http){
            this.createUser = function(user){
              console.log(user);
                 return  $http.post('/user', user);
            }
       })


       .service('userModelService', function(){
            var currentUser = {};
            this.returnUser  = function(){
              return this.currentUser
            }

            this.returnCurrentUserWatchlists = function(){
              return this.currentUser.watchlists
            }
       })
