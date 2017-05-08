// *************************************
//
//   Error - Controllers
//
// *************************************

// -------------------------------------
//   Not Found
// -------------------------------------

exports.notFound = (req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;

  next(err);
};

// -------------------------------------
//   Generic
// -------------------------------------

exports.handler = (err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
};
