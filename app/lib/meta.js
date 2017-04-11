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
const filterArrayFor = require('./helpers').filterArrayFor;

// -------------------------------------
//   Variables
// -------------------------------------

const separator = '-';
const rootPath = '/';

// -------------------------------------
//   Base
// -------------------------------------

const setMeta = (path, key) => {
  const selection = filterArrayFor(meta, 'path', path);
  const root = filterArrayFor(meta, 'path', rootPath);

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
//   Exports
// -------------------------------------

module.exports = setMeta;
