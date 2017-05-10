// *************************************
//
//   Helpers - Library
//
// *************************************

// -------------------------------------
//   Filter Array For
// -------------------------------------

exports.filterArrayFor = (array, key, value) => {
  return array.filter(item => (
    item[key] === value
  ))[0];
};

// -------------------------------------
//   Catch Errors
// -------------------------------------

exports.catchErrors = (fn) => {
  return function(req, res, next) {
    return fn(req, res, next).catch(next);
  };
};
