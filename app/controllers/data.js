// *************************************
//
//   Data - Controllers
//
// *************************************

// -------------------------------------
//   Requires
// -------------------------------------

const setMeta = require('../lib/meta');
const viewHelpers = require('../lib/view-helpers');

// -------------------------------------
//   Locals
// -------------------------------------

exports.locals = (req, res, next) => {
  res.locals.url = req.path;
  res.locals.title = setMeta(req.originalUrl, 'title');
  res.locals.viewHelpers = viewHelpers;

  next();
};
