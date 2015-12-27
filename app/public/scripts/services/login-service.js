'use strict';


angular.module('stockDogApp')
  .service('LoginService', function ($http) {
    this.loadModelFromDb = function(user){
      return $http.post('/user/'+user.username, user )
    }
  })

  .service('checkAuthService', function($location){
    this.checkAuth = function(){
        if(localStorage.user_token || localStorage.satellizer_token){
          return true;
        }
        else{return false}
    }

    this.redirectIfNotAuthed = function(){
      if (!localStorage.user_token && !localStorage.satellizer_token){
        $location.path('/login')
      }
    }

    var checkUsernameAndPassword = false;



  })
