// routes/users.js
'use strict';
const express = require('express');
const auth    = require('../middleware/auth');
const { users, grade } = require('../data/store');
const router  = express.Router();

router.get('/me', auth, (req, res) => {
  const user = users.find(u => u.id === req.user.id);
  if (!user) return res.status(404).json({ error: 'Usuário não encontrado.' });
  const { passwordHash, ...safe } = user;
  res.json(safe);
});

router.put('/me', auth, (req, res) => {
  const user = users.find(u => u.id === req.user.id);
  if (!user) return res.status(404).json({ error: 'Usuário não encontrado.' });
  const allowed = ['telefone', 'turno'];
  allowed.forEach(k => { if (req.body[k] !== undefined) user[k] = req.body[k]; });
  const { passwordHash, ...safe } = user;
  res.json({ success: true, user: safe });
});

router.get('/me/grade', auth, (req, res) => {
  res.json(grade);
});

module.exports = router;
