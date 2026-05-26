// backend/routes/users.js
'use strict';
const express = require('express');
const auth    = require('../middleware/auth');
const db      = require('../data/db'); // Puxando o MySQL agora!
const router  = express.Router();

// 1. ROTA DE CADASTRO DE ALUNO (Nova!)
router.post('/register', async (req, res) => {
  const { nome, email, senha, telefone, turno } = req.body;

  if (!nome || !email || !senha) {
    return res.status(400).json({ error: 'Nome, email e senha são obrigatórios.' });
  }

  try {
    // Verifica se o email já existe
    const [existing] = await db.execute('SELECT id FROM usuarios WHERE email = ?', [email]);
    if (existing.length > 0) {
      return res.status(400).json({ error: 'Este e-mail já está cadastrado.' });
    }

    // Insere no MySQL (Em produção, ideal usar bcrypt para criptografar a senha)
    const query = 'INSERT INTO usuarios (nome, email, senha, telefone, turno) VALUES (?, ?, ?, ?, ?)';
    await db.execute(query, [nome, email, senha, telefone, turno || 'Matutino']);

    res.status(201).json({ success: true, message: 'Aluno cadastrado com sucesso!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao cadastrar aluno no banco de dados.' });
  }
});

// 2. ROTA PARA VER PERFIL LOGADO
router.get('/me', auth, async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT id, nome, email, telefone, turno, tipo FROM usuarios WHERE id = ?', [req.user.id]);
    if (rows.length === 0) return res.status(404).json({ error: 'Usuário não encontrado.' });
    
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Erro no servidor.' });
  }
});

module.exports = router;