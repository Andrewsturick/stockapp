'use strict';

var express = require('express');
var router = express.Router();
var User = require('../models/user');
var jwt = require('jwt-simple')


router.post('/', function(req, res){
  console.log(req.body, ' : username')
  var user = new User(req.body);
  var user = user.createUser();
  res.send(req.body)
})

router.post('/:username', function(req, res){
  console.log(req.body)
  var user = User.returnUser(req.body, function(user){
    if(user === 'no user found' || user==='false'){res.send('none found');}
    else{
      var token = user.createJWT();
      var decode = jwt.decode(token, process.env.JWT_SECRET)
      console.log('decoded token contains: ', decode);
      res.send(token)
    }
  });
})

router.get('/authed', function(req, res){
  res.sendfile('authed.html')
})


module.exports = router;
