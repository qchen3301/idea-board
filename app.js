//importing dependencies
require('dotenv').config()
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose')
//connecting to DB
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true})
const connection = mongoose.connection
connection.on('connected', () => {
    console.log('Mongoose Connected Successfully');
  });
  // If the connection throws an error
  connection.on('error', (err) => {
    console.log('Mongoose default connection error: ' + err);
  });

//instansiating express and adding middleware
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/client/build/'));
//configuring app to use react for routes
app.get('/', (req,res) => {
    res.sendFile(__dirname + '/client/build/index.html')
  })
module.exports = app;