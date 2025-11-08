const express = require('express');
const { Account } = require('../db');
const { authMiddleware } = require('../middleware');
const router = express.Router();

module.exports = router;