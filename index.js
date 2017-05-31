// *************************************
//
//   Index
//   -> Start er' up!
//
// *************************************

// -------------------------------------
//   Requires
// -------------------------------------

if (process.env.ENV !== 'production') {
  require('@glimpse/glimpse').init();
}

const express = require('express');
const compression = require('compression');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const favicon = require('serve-favicon');
const logger = require('morgan');
const path = require('path');
const env = require('dotenv').config();

// ----- Controllers ----- //

const dataController = require('./app/controllers/data');
const errorController = require('./app/controllers/error');

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

// ----- Compression ----- //

if (process.env.ENV === 'production') {
  app.use(compression());
}

// ----- Logger ----- //

app.use(logger('dev'));

// ----- Body Parser ----- //

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// ----- Cookies ----- //

app.use(cookieParser());

// ----- Static ----- //

// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));

// ----- Session ----- //

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true
}));

// Flash

app.use(require('flash')());

// ----- Locals ----- //

app.use(dataController.locals);

// -------------------------------------
//   Routes
// -------------------------------------

// ----- Index ----- //

app.use('/', index);

// ----- Errors ----- //

app.use(errorController.notFound);
app.use(errorController.handler);

// -------------------------------------
//   Exports
// -------------------------------------

module.exports = app;
