/**
 * CIT — Data Store (simula banco de dados em memória)
 * Em produção, substituir por PostgreSQL / MongoDB
 */

'use strict';

const bcrypt = require('bcryptjs');

/* ─── Usuários ─────────────────────────────────────────── */
const users = [
  {
    id: 1,
    ra: '2023001234',
    nome: 'João',
    sobrenome: 'da Silva Santos',
    email: 'joao@aluno.cit.edu.br',
    cpf: '123.456.789-00',
    curso: 'Ciência da Computação',
    semestre: 4,
    turno: 'Noturno',
    nascimento: '2004-03-15',
    telefone: '(11) 9 9876-5432',
    ira: 8.4,
    // senha: "senha123"
    passwordHash: '$2a$10$rBd3gP5z7L8TlMkXt/k5OeVW2AoJ9RmUQnIpF6cDgYsXhEbN1avWO',
    avatar: 'JS',
    createdAt: '2023-02-01',
  }
];

/* ─── Cursos ───────────────────────────────────────────── */
const courses = [
  { id: 1, code: 'CC301', name: 'Banco de Dados Avançado', icon: '🗄️', professor: 'Prof. Carlos Mendes', progress: 72, totalAulas: 32, horasCarga: 48, thumb: '#F0EDE8' },
  { id: 2, code: 'CC201', name: 'Algoritmos e Estruturas',  icon: '⚙️',  professor: 'Prof.ª Ana Lima',      progress: 55, totalAulas: 28, horasCarga: 40, thumb: '#EDF0F0' },
  { id: 3, code: 'CC302', name: 'Redes de Computadores',    icon: '🌐',  professor: 'Prof. Marcos Rocha',   progress: 88, totalAulas: 24, horasCarga: 36, thumb: '#EDF4EC' },
  { id: 4, code: 'CC303', name: 'Engenharia de Software',   icon: '🏗️', professor: 'Prof. Roberto Lima',   progress: 40, totalAulas: 36, horasCarga: 56, thumb: '#F5F0E8' },
  { id: 5, code: 'CS301', name: 'Cibersegurança',           icon: '🔐',  professor: 'Prof.ª Juliana Costa', progress: 20, totalAulas: 30, horasCarga: 45, thumb: '#F0EDF5' },
  { id: 6, code: 'IA401', name: 'Inteligência Artificial',  icon: '🤖',  professor: 'Prof. Fernando Alves', progress: 10, totalAulas: 40, horasCarga: 60, thumb: '#EAF0F5' },
];

/* ─── Grade Curricular ─────────────────────────────────── */
const grade = [
  { code: 'CC101', name: 'Algoritmos e Lógica',      ch: '80h', credits: 4, grade: 9.2,  status: 'done'   },
  { code: 'CC102', name: 'Matemática Discreta',       ch: '60h', credits: 3, grade: 8.7,  status: 'done'   },
  { code: 'CC201', name: 'Estruturas de Dados',       ch: '80h', credits: 4, grade: 8.1,  status: 'done'   },
  { code: 'CC202', name: 'Orientação a Objetos',      ch: '80h', credits: 4, grade: 9.5,  status: 'done'   },
  { code: 'CC301', name: 'Banco de Dados',            ch: '80h', credits: 4, grade: null,  status: 'active' },
  { code: 'CC302', name: 'Redes de Computadores',     ch: '60h', credits: 3, grade: null,  status: 'active' },
  { code: 'CC303', name: 'Engenharia de Software',    ch: '80h', credits: 4, grade: null,  status: 'active' },
  { code: 'CC401', name: 'Inteligência Artificial',   ch: '80h', credits: 4, grade: null,  status: 'locked' },
  { code: 'CC402', name: 'Compiladores',              ch: '60h', credits: 3, grade: null,  status: 'locked' },
  { code: 'CC801', name: 'TCC',                       ch: '160h',credits: 8, grade: null,  status: 'locked' },
];

/* ─── Financeiro ───────────────────────────────────────── */
const financial = {
  status: 'regular',
  mensalidade: 1890.00,
  proximoVencimento: '2025-02-15',
  historico: [
    { id: 1, descricao: 'Mensalidade — Fevereiro 2025', vencimento: '2025-02-15', valor: 1890.00, status: 'pending' },
    { id: 2, descricao: 'Mensalidade — Janeiro 2025',   vencimento: '2025-01-15', valor: 1890.00, status: 'paid',   pagoEm: '2025-01-12' },
    { id: 3, descricao: 'Mensalidade — Dezembro 2024',  vencimento: '2024-12-15', valor: 1890.00, status: 'paid',   pagoEm: '2024-12-14' },
  ]
};

/* ─── Notificações ─────────────────────────────────────── */
const notifications = [
  { id: 1, icon: '📝', text: 'Nova aula disponível em <strong>Banco de Dados</strong>', when: '5 min atrás',  unread: true  },
  { id: 2, icon: '📅', text: 'Lembrete: Prova de Algoritmos amanhã às 8h',              when: '1 hora atrás', unread: true  },
  { id: 3, icon: '💬', text: 'Prof. Santos respondeu no fórum',                          when: '3 horas atrás',unread: false },
  { id: 4, icon: '💰', text: 'Mensalidade vence em 3 dias',                              when: 'Ontem',        unread: false },
];

/* ─── Eventos do Calendário ────────────────────────────── */
const events = [
  { id: 1, name: 'Prova P1 — Banco de Dados',  date: '2025-01-20', time: '08:00–10:00', local: 'Sala 305',     type: 'accent' },
  { id: 2, name: 'Entrega Trabalho — Redes',    date: '2025-01-22', time: '23:59',        local: 'Portal EAD',   type: 'gold'   },
  { id: 3, name: 'Workshop — IA',               date: '2025-01-25', time: '14:00–18:00',  local: 'Auditório A',  type: 'green'  },
  { id: 4, name: 'Prazo Rematrícula 2025.1',    date: '2025-01-31', time: 'Até 18:00',    local: 'Secretaria',   type: 'accent' },
];

/* ─── Mensagens do chat ────────────────────────────────── */
const chatMessages = {
  ST: [
    { from: 'ST',  text: 'Olá, João! 👋 Como posso te ajudar hoje?',                        time: '09:14' },
    { from: 'J',   text: 'Bom dia! Estou com problema para acessar o vídeo da aula 7.',      time: '09:15' },
    { from: 'ST',  text: 'Entendido! Tente limpar o cache do navegador e recarregar. 🔧',    time: '09:16' },
  ]
};

module.exports = { users, courses, grade, financial, notifications, events, chatMessages };
