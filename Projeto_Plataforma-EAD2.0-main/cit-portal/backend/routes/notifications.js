// routes/notifications.js
'use strict';
const express = require('express');
const auth    = require('../middleware/auth');
const { notifications } = require('../data/store');
const router  = express.Router();

router.get('/', auth, (req, res) => res.json(notifications));
router.patch('/read-all', auth, (req, res) => {
  notifications.forEach(n => { n.unread = false; });
  res.json({ success: true });
});

module.exports = router;
