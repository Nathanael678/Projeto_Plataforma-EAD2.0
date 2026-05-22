'use strict';
const express = require('express');
const router  = express.Router();

router.post('/login', (req, res) => {
  res.json({ message: "Rota temporária" });
});

module.exports = router;