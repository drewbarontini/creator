// *************************************
//
//   Data - Controllers
//
// *************************************

// -------------------------------------
//   Requires
// -------------------------------------

const setMeta = require('../lib/meta');

// -------------------------------------
//   Locals
// -------------------------------------

exports.locals = (req, res, next) => {
  res.locals.url = req.path;
  res.locals.title = setMeta(req.originalUrl, 'title');

  next();
};
