'use strict';

var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.post('/', function(req, res){
  User.create(req.body, function(err, newuser){
    console.log(newuser);
    res.send(err || newuser)
  })
})

router.get('/:username', function(req, res){
  User.find({username: req.params.username}, function(err, user){
    res.send(user)
  })
})

router.get('/authed', function(req, res){
  res.sendfile('authed.html')
})
module.exports = router;
