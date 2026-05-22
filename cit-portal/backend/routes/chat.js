// routes/chat.js
'use strict';
const express = require('express');
const auth    = require('../middleware/auth');
const { chatMessages } = require('../data/store');
const router  = express.Router();

const autoReplies = [
  'Obrigado pela mensagem! Estou verificando. 🔍',
  'Certo, vou te ajudar com isso. ✅',
  'Pode me dar mais detalhes sobre o problema? 🤔',
  'Em breve responderei com a solução. ⏳',
];

router.get('/:contact', auth, (req, res) => {
  const msgs = chatMessages[req.params.contact] || [];
  res.json(msgs);
});

router.post('/:contact', auth, (req, res) => {
  const { text } = req.body;
  if (!text || !text.trim()) return res.status(400).json({ error: 'Mensagem vazia.' });
  const contact = req.params.contact;
  if (!chatMessages[contact]) chatMessages[contact] = [];
  const time = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  chatMessages[contact].push({ from: 'J', text: text.trim(), time });
  const reply = autoReplies[Math.floor(Math.random() * autoReplies.length)];
  setTimeout(() => {
    chatMessages[contact].push({ from: contact, text: reply, time });
  }, 1000);
  res.json({ success: true });
});

module.exports = router;
