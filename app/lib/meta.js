// *************************************
//
//   Meta - Library
//
// *************************************

// -------------------------------------
//   Requires
// -------------------------------------

const title = require('./constants').TITLE;
const meta = require('../data/meta');

// -------------------------------------
//   Variables
// -------------------------------------

const separator = '-';
const rootPath = '/';

// -------------------------------------
//   Functions
// -------------------------------------

// ----- Filter Array For ----- //

const filterArrayFor = (path) => {
  return meta.filter(item => (
    item.path === path
  ))[0];
}

// ----- Set Meta ----- //

const setMeta = (path, key) => {
  const selection = filterArrayFor(path);
  const root = filterArrayFor(rootPath);

  if (selection) {
    if (key === 'title') {
      return `${ title } ${ separator } ${ selection[key] }`;
    } else {
      return selection[key];
    }
  } else {
    if (key === 'title') {
      return `${ title } ${ separator } ${ root[key] }`;
    } else {
      return root[key];
    }
  }
}

// -------------------------------------
//   Export
// -------------------------------------

module.exports = setMeta;
