'use strict';

var express = require('express');
var router = express.Router();
var User = require('../models/user');




router.get('/authed', function(req, res){
  res.sendfile('authed.html')
})
module.exports = router;
