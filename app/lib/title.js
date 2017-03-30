// *************************************
//
//   Title - Library
//
// *************************************

// -------------------------------------
//   Requires
// -------------------------------------

const config = require('./constants');

// -------------------------------------
//   Variables
// -------------------------------------

const base = config.SITE_TITLE;
const separator = '-';
const titles = {
  '/': 'Multi-page Express application'
}

// -------------------------------------
//   Functions
// -------------------------------------

const setTitle = (path) => {
  if (titles[path]) {
    return `${ base } ${ separator } ${ titles[path] }`;
  } else {
    return `${ base } ${ separator } ${ titles['/'] }`;
  }
}

// -------------------------------------
//   Export
// -------------------------------------

module.exports = setTitle;
