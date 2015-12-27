'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var jwt = require('jwt-simple');
var moment = require('moment');
var bcrypt = require('bcrypt');
var User;

var userSchema = Schema({
    watchlists: [],
    following : {},
    nextWatchlistNumber: Number,
    username: String,
    password: String,
    google: String,
    displayName: String,
    tradeFrequency: String,
    validated: {type: Boolean, default: false},
    userCreated: {type: String, default: Date()}
})


userSchema.methods.createJWT = function() {
  var payload = {
    sub: this,
    iat: moment().unix(),
    exp: moment().add(1, 'days').unix()
  };
  return jwt.encode(payload, process.env.JWT_SECRET);
};

userSchema.methods.createUser = function(){
    var newUser = this;
    var password = this.password;
    bcrypt.genSalt(13, password, function(err, salt){
      bcrypt.hash(password, salt, function(err1, hash){
        newUser.password = hash;
        User.create(newUser, function(err, user){
          return user
      });
    });
  });
};

userSchema.statics.returnUser = function(userInfo, cb1){
    var username = userInfo.username ;
    var password = userInfo.password;
    console.log('u ', username, ' p ', password);
    User.find({username: username}, function(err, res){
      if(!res[0]){
        cb1('no user found')}
      else{
          bcrypt.compare(password, res[0].password, function(err, cb){
            if(cb===true){
              var user = res[0]
              user.password = null;
              cb1(user)
            }
            if(cb===false){cb1('false');}
          })
      }
    })
}

User = mongoose.model('User', userSchema);
module.exports = User;
