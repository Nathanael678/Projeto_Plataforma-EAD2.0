/**
 * CIT — Centro de Inovação Tecnológica
 * Backend API Server — Node.js / Express
 */

'use strict';

const express    = require('express');
const cors       = require('cors');
const helmet     = require('helmet');
const rateLimit  = require('express-rate-limit');
const path       = require('path');

// ROTAS: Comentei a rota de auth que estava fazendo o servidor cair
// const authRoutes    = require('./routes/auth'); 
const userRoutes    = require('./routes/users');
const courseRoutes  = require('./routes/courses');
const finRoutes     = require('./routes/financial');
const notifRoutes   = require('./routes/notifications');
const chatRoutes    = require('./routes/chat');

const app  = express();
const PORT = process.env.PORT || 3000;

/* ── Security Middlewares ─────────────────────────────── */
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc:  ["'self'"],
      styleSrc:    ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc:     ["'self'", "https://fonts.gstatic.com"],
      scriptSrc:   ["'self'", "'unsafe-inline'", "https://www.youtube-nocookie.com", "https://www.youtube.com"],
      frameSrc:    ["https://www.youtube-nocookie.com", "https://www.youtube.com"],   // ← ADICIONE ESTA LINHA
      imgSrc:      ["'self'", "data:", "https://i.ytimg.com"],
      connectSrc:  ["'self'"],
    }
  }
}));

app.use(cors({
  origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

/* ── Rate Limiting ────────────────────────────────────── */
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,  // 15 minutes
  max: 200,
  message: { error: 'Muitas requisições. Tente novamente mais tarde.' }
});

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { error: 'Muitas tentativas de login. Aguarde 15 minutos.' }
});

app.use(globalLimiter);
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

/* ── Static files (serve o frontend) ─────────────────── */
app.use(express.static(path.join(__dirname, '..')));

/* ── API Routes ───────────────────────────────────────── */
// Comentei a rota que usava o arquivo inexistente
// app.use('/api/auth',          authLimiter, authRoutes); 
app.use('/api/users',         userRoutes);
app.use('/api/courses',       courseRoutes);
app.use('/api/financial',     finRoutes);
app.use('/api/notifications', notifRoutes);
app.use('/api/chat',          chatRoutes);

/* ── Health check ─────────────────────────────────────── */
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', version: '2.5.0', timestamp: new Date().toISOString() });
});

/* ── SPA Fallback (todas as rotas → index.html) ───────── */
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

/* ── Error handler ────────────────────────────────────── */
app.use((err, req, res, next) => {
  console.error('[CIT Error]', err.message);
  res.status(err.status || 500).json({
    error: process.env.NODE_ENV === 'production'
      ? 'Erro interno do servidor'
      : err.message
  });
});

app.listen(PORT, () => {
  console.log(`\n🎓 CIT Portal rodando em http://localhost:${PORT}`);
  console.log(`📡 API disponível em http://localhost:${PORT}/api`);
  console.log(`🔧 Ambiente: ${process.env.NODE_ENV || 'development'}\n`);
});

module.exports = app;