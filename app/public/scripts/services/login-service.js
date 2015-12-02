'use strict';


angular.module('stockDogApp')
  .service('LoginService', function ($http) {
    this.loadModelFromDb = function(username){
      return $http.get('/user/'+username)
    }
  })

  .service('checkAuth', function(){
    this.checkAuth = function(){
        if(localStorage.user){
          return true;
        }
    }
  })
