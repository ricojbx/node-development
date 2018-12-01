var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
console.log('Starting app.js');
const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

let filteredArray = _.uniq(['Chris', 1, 'Chris', 1, 2, 3, 4]);
console.log(filteredArray);
/*
console.log(_.isString(true));
console.log(_.isString('Christopher'));
let result = notes.add(9, 10);
console.log(`Results ${result}`);
let user = os.userInfo();
fs.appendFile('greetings.txt',`Hello ${user.username}! You are ${notes.age}`, function (err) {
  if (err) {
    console.log('Unable to write to file');
  }
});
*/


module.exports = app;
