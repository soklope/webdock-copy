// libraries/frameworks
const express = require('express');

// middleware
const { extractUserFromToken } = require('../middleware/extractUserFromToken.js');

// controllers
const VerifyController = require ('../controllers/verifyController.js')

// api routing
const verifyRoutes = express.Router();

verifyRoutes.post('/', extractUserFromToken, VerifyController.verifyUser);
verifyRoutes.get('/isadmin', extractUserFromToken, VerifyController.verifyUser);


module.exports = verifyRoutes;