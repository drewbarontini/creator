// *************************************
//
//   Title - Library
//
// *************************************

// -------------------------------------
//   Requires
// -------------------------------------

const titles = require('./constants').TITLES;

// -------------------------------------
//   Functions
// -------------------------------------

const setTitle = (path) => {
  if (titles[path]) {
    return `${ titles.base } ${ titles.separator } ${ titles[path] }`;
  } else {
    return `${ titles.base } ${ titles.separator } ${ titles['/'] }`;
  }
}

// -------------------------------------
//   Export
// -------------------------------------

module.exports = setTitle;
