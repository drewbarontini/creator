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
