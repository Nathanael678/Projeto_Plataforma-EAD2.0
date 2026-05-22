// routes/financial.js
'use strict';
const express = require('express');
const auth    = require('../middleware/auth');
const { financial } = require('../data/store');
const router  = express.Router();

router.get('/', auth, (req, res) => res.json(financial));

module.exports = router;
