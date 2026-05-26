// routes/courses.js
'use strict';
const express = require('express');
const auth    = require('../middleware/auth');
const { courses } = require('../data/store');
const router  = express.Router();

router.get('/', auth, (req, res) => res.json(courses));
router.get('/:id', auth, (req, res) => {
  const c = courses.find(c => c.id === +req.params.id);
  if (!c) return res.status(404).json({ error: 'Curso não encontrado.' });
  res.json(c);
});

module.exports = router;
