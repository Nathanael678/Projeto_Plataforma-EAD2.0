'use strict';
const bcrypt = require('bcryptjs');
const users = [
  { id:1, ra:'2023001234', nome:'João',    sobrenome:'da Silva Santos',   email:'joao@aluno.cit.edu.br',    cpf:'123.456.789-00', curso:'Ciência da Computação',   semestre:4, turno:'Noturno', ira:8.4, avatar:'JS', passwordHash:'$2a$10$rBd3gP5z7L8TlMkXt/k5OeVW2AoJ9RmUQnIpF6cDgYsXhEbN1avWO' },
  { id:2, ra:'2022005678', nome:'Maria',   sobrenome:'Oliveira Pereira',  email:'maria@aluno.cit.edu.br',   cpf:'234.567.890-11', curso:'Ciência da Computação',   semestre:5, turno:'Noturno', ira:9.1, avatar:'MO', passwordHash:'$2a$10$rBd3gP5z7L8TlMkXt/k5OeVW2AoJ9RmUQnIpF6cDgYsXhEbN1avWO' },
  { id:3, ra:'2024009012', nome:'Pedro',   sobrenome:'Almeida Costa',     email:'pedro@aluno.cit.edu.br',   cpf:'345.678.901-22', curso:'Engenharia de Software',  semestre:2, turno:'Noturno', ira:7.3, avatar:'PA', passwordHash:'$2a$10$rBd3gP5z7L8TlMkXt/k5OeVW2AoJ9RmUQnIpF6cDgYsXhEbN1avWO' },
  { id:4, ra:'2021003456', nome:'Ana',     sobrenome:'Beatriz Rodrigues', email:'ana@aluno.cit.edu.br',     cpf:'456.789.012-33', curso:'Cibersegurança',           semestre:6, turno:'Noturno', ira:8.9, avatar:'AB', passwordHash:'$2a$10$rBd3gP5z7L8TlMkXt/k5OeVW2AoJ9RmUQnIpF6cDgYsXhEbN1avWO' },
  { id:5, ra:'2023007890', nome:'Carlos',  sobrenome:'Eduardo Martins',   email:'carlos@aluno.cit.edu.br',  cpf:'567.890.123-44', curso:'Inteligência Artificial', semestre:4, turno:'Noturno', ira:6.8, avatar:'CE', passwordHash:'$2a$10$rBd3gP5z7L8TlMkXt/k5OeVW2AoJ9RmUQnIpF6cDgYsXhEbN1avWO' },
  { id:6, ra:'2022001122', nome:'Fernanda',sobrenome:'Lima Souza',        email:'fernanda@aluno.cit.edu.br',cpf:'678.901.234-55', curso:'Ciência da Computação',   semestre:5, turno:'Noturno', ira:9.4, avatar:'FL', passwordHash:'$2a$10$rBd3gP5z7L8TlMkXt/k5OeVW2AoJ9RmUQnIpF6cDgYsXhEbN1avWO' },
  { id:7, ra:'2024003344', nome:'Lucas',   sobrenome:'Mendes Ferreira',   email:'lucas@aluno.cit.edu.br',   cpf:'789.012.345-66', curso:'Sistemas de Informação', semestre:2, turno:'Noturno', ira:7.7, avatar:'LM', passwordHash:'$2a$10$rBd3gP5z7L8TlMkXt/k5OeVW2AoJ9RmUQnIpF6cDgYsXhEbN1avWO' },
  { id:8, ra:'2020008899', nome:'Gabriela',sobrenome:'Nunes Barbosa',     email:'gabriela@aluno.cit.edu.br',cpf:'890.123.456-77', curso:'Ciência de Dados',        semestre:8, turno:'Noturno', ira:8.2, avatar:'GN', passwordHash:'$2a$10$rBd3gP5z7L8TlMkXt/k5OeVW2AoJ9RmUQnIpF6cDgYsXhEbN1avWO' },
  { id:9, ra:'2023005566', nome:'Rafael',  sobrenome:'Carvalho Lima',     email:'rafael@aluno.cit.edu.br',  cpf:'901.234.567-88', curso:'Engenharia de Software',  semestre:4, turno:'Noturno', ira:7.5, avatar:'RC', passwordHash:'$2a$10$rBd3gP5z7L8TlMkXt/k5OeVW2AoJ9RmUQnIpF6cDgYsXhEbN1avWO' },
  { id:10,ra:'2021006677', nome:'Juliana', sobrenome:'Torres Nascimento', email:'juliana@aluno.cit.edu.br', cpf:'012.345.678-99', curso:'Ciência da Computação',   semestre:6, turno:'Noturno', ira:8.6, avatar:'JT', passwordHash:'$2a$10$rBd3gP5z7L8TlMkXt/k5OeVW2AoJ9RmUQnIpF6cDgYsXhEbN1avWO' },
  { id:11,ra:'2024007788', nome:'Thiago',  sobrenome:'Augusto Pires',     email:'thiago@aluno.cit.edu.br',  cpf:'111.222.333-44', curso:'Cibersegurança',           semestre:1, turno:'Noturno', ira:0.0, avatar:'TA', passwordHash:'$2a$10$rBd3gP5z7L8TlMkXt/k5OeVW2AoJ9RmUQnIpF6cDgYsXhEbN1avWO' },
  { id:12,ra:'2019009900', nome:'Camila',  sobrenome:'Ramos Braga',       email:'camila@aluno.cit.edu.br',  cpf:'222.333.444-55', curso:'Inteligência Artificial', semestre:8, turno:'Noturno', ira:9.2, avatar:'CR', passwordHash:'$2a$10$rBd3gP5z7L8TlMkXt/k5OeVW2AoJ9RmUQnIpF6cDgYsXhEbN1avWO' },
];
const courses = [
  { id:1, code:'CC301', name:'Banco de Dados Avançado',  icon:'🗄️', professor:'Prof. Carlos Mendes',    progress:72, totalAulas:32, horasCarga:48 },
  { id:2, code:'CC201', name:'Algoritmos e Estruturas',   icon:'⚙️', professor:'Prof.ª Ana Lima',         progress:55, totalAulas:28, horasCarga:40 },
  { id:3, code:'CC302', name:'Redes de Computadores',     icon:'🌐', professor:'Prof. Marcos Rocha',      progress:88, totalAulas:24, horasCarga:36 },
  { id:4, code:'CC303', name:'Engenharia de Software',    icon:'🏗️', professor:'Prof. Roberto Lima',      progress:40, totalAulas:36, horasCarga:56 },
  { id:5, code:'CS301', name:'Cibersegurança',            icon:'🔐', professor:'Prof.ª Juliana Costa',    progress:20, totalAulas:30, horasCarga:45 },
  { id:6, code:'IA401', name:'Inteligência Artificial',   icon:'🤖', professor:'Prof. Fernando Alves',    progress:10, totalAulas:40, horasCarga:60 },
];
const grade = [
  { code:'CC101', name:'Algoritmos e Lógica',    ch:'80h', credits:4, grade:9.2, status:'done'   },
  { code:'CC102', name:'Matemática Discreta',     ch:'60h', credits:3, grade:8.7, status:'done'   },
  { code:'CC201', name:'Estruturas de Dados',     ch:'80h', credits:4, grade:8.1, status:'done'   },
  { code:'CC202', name:'Orientação a Objetos',    ch:'80h', credits:4, grade:9.5, status:'done'   },
  { code:'CC301', name:'Banco de Dados',          ch:'80h', credits:4, grade:null,status:'active' },
  { code:'CC302', name:'Redes de Computadores',   ch:'60h', credits:3, grade:null,status:'active' },
  { code:'CC303', name:'Engenharia de Software',  ch:'80h', credits:4, grade:null,status:'active' },
  { code:'CC401', name:'Inteligência Artificial', ch:'80h', credits:4, grade:null,status:'locked' },
  { code:'CC402', name:'Compiladores',            ch:'60h', credits:3, grade:null,status:'locked' },
  { code:'CC801', name:'TCC',                     ch:'160h',credits:8, grade:null,status:'locked' },
];
const financial = { status:'regular', mensalidade:1890.00, proximoVencimento:'2025-02-15',
  historico:[
    { id:1, descricao:'Mensalidade — Fevereiro 2025', vencimento:'2025-02-15', valor:1890.00, status:'pending' },
    { id:2, descricao:'Mensalidade — Janeiro 2025',   vencimento:'2025-01-15', valor:1890.00, status:'paid',   pagoEm:'2025-01-12' },
    { id:3, descricao:'Mensalidade — Dezembro 2024',  vencimento:'2024-12-15', valor:1890.00, status:'paid',   pagoEm:'2024-12-14' },
  ]};
const notifications = [
  { id:1, icon:'📝', text:'Nova aula disponível em <strong>Banco de Dados</strong>', when:'5 min atrás',  unread:true  },
  { id:2, icon:'📅', text:'Lembrete: Prova de Algoritmos amanhã às 8h',              when:'1 hora atrás', unread:true  },
  { id:3, icon:'💬', text:'Prof. Santos respondeu no fórum',                          when:'3 horas atrás',unread:false },
  { id:4, icon:'💰', text:'Mensalidade vence em 3 dias',                              when:'Ontem',        unread:false },
];
const events = [
  { id:1, name:'Prova P1 — Banco de Dados', date:'2025-01-20', time:'08:00–10:00', local:'Sala 305',    type:'accent' },
  { id:2, name:'Entrega Trabalho — Redes',  date:'2025-01-22', time:'23:59',        local:'Portal EAD', type:'gold'   },
  { id:3, name:'Workshop — IA',             date:'2025-01-25', time:'14:00–18:00',  local:'Auditório A',type:'green'  },
  { id:4, name:'Prazo Rematrícula 2025.1',  date:'2025-01-31', time:'Até 18:00',    local:'Secretaria', type:'accent' },
];
const chatMessages = { ST:[
  { from:'ST', text:'Olá! 👋 Como posso te ajudar hoje?', time:'09:14' },
  { from:'J',  text:'Bom dia! Estou com problema no vídeo da aula 7.', time:'09:15' },
  { from:'ST', text:'Entendido! Tente limpar o cache e recarregar. 🔧', time:'09:16' },
]};

quiz:[
  { q:'Qual alternativa define corretamente a 1ª Forma Normal (1FN)?',
    opts:['Uma tabela pode ter grupos repetitivos','Todos os atributos devem ser atômicos e não multivalorados','A chave primária pode ser qualquer atributo','Dependências transitivas são permitidas'],
    ans:1, exp:'A 1FN exige que todos os atributos sejam atômicos e sem grupos repetitivos.' },
  { q:'O que é uma dependência transitiva?',
    opts:['Quando A→B e B→C, logo A→C indiretamente','Quando dois atributos dependem da mesma chave','Quando a tabela não tem chave primária','Quando há valores nulos na tabela'],
    ans:0, exp:'Dependência transitiva ocorre quando um atributo depende de outro que não é chave primária.' },
  { q:'Qual forma normal elimina dependências transitivas?',
    opts:['1FN','2FN','3FN','FNBC'],
    ans:2, exp:'A 3FN elimina dependências transitivas, garantindo que todo atributo dependa diretamente da chave.' },
  { q:'O que garante a propriedade ACID em um banco de dados?',
    opts:['O sistema operacional','O gerenciador de transações','O driver de conexão','O índice da tabela'],
    ans:1, exp:'O gerenciador de transações do SGBD implementa Atomicidade, Consistência, Isolamento e Durabilidade.' },
  { q:'Qual comando SQL inicia explicitamente uma transação?',
    opts:['COMMIT','ROLLBACK','BEGIN TRANSACTION','SAVEPOINT'],
    ans:2, exp:'BEGIN TRANSACTION (ou START TRANSACTION no MySQL) inicia uma transação explícita no banco.' },
];

module.exports = { users, courses, grade, financial, notifications, events, chatMessages };
