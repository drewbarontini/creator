// *************************************
//
//   Index - Routes
//   -> '/'
//
// *************************************

// -------------------------------------
//   Requires
// -------------------------------------

const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home');

// -------------------------------------
//   Base
// -------------------------------------

// ----- GET '/' ----- //

router.get('/', homeController.index);

// -------------------------------------
//   Exports
// -------------------------------------

module.exports = router;
