'use strict'

var PORT = 3000 || process.env.PORT;

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');

require('dotenv').load();
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}))

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/myStockApp')

app.use('/user', require('./routes/user'));
app.use('/authed', require('./routes/authed'));

app.use('/auth', require('./routes/auth'));


app.get('/', function(req, res){
  res.sendfile('index.html')
})

app.listen(PORT);
