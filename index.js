// *************************************
//
//   Index
//   -> Start er' up!
//
// *************************************

// -------------------------------------
//   Requires
// -------------------------------------

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const favicon = require('serve-favicon');
const logger = require('morgan');
const path = require('path');

// ----- Routes ----- //

const index = require('./app/routes/index');

// -------------------------------------
//   Setup
// -------------------------------------

const app = express();

// -------------------------------------
//   View Engine
// -------------------------------------

app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'pug');

// -------------------------------------
//   Middleware
// -------------------------------------

// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'app/public')));

// -------------------------------------
//   Routes
// -------------------------------------

app.use('/', index);

// ----- 404 ----- //

app.use((req, res, next) => {
  const err = new Error('Not Found');

  err.status = 404;
  next(err);
});

// ----- Error Handler ----- //

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
