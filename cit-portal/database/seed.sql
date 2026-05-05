-- ═══════════════════════════════════════════════════════════════
--  CIT — Centro de Inovação Tecnológica
--  seed.sql  |  Dados iniciais — 10 alunos + dados de suporte
--  Todas as senhas são "senha123" (hash bcrypt $2a$10$...)
-- ═══════════════════════════════════════════════════════════════

USE cit_portal;

-- ────────────────────────────────────────────────────────────────
-- PROFESSORES
-- ────────────────────────────────────────────────────────────────
INSERT INTO professores (nome, sobrenome, email, titulacao, departamento) VALUES
  ('Carlos',  'Mendes',     'c.mendes@cit.edu.br',     'doutorado',      'Banco de Dados'),
  ('Ana',     'Lima',        'a.lima@cit.edu.br',       'doutorado',      'Algoritmos'),
  ('Marcos',  'Rocha',       'm.rocha@cit.edu.br',      'mestrado',       'Infraestrutura'),
  ('Roberto', 'Lima',        'r.lima@cit.edu.br',       'doutorado',      'Engenharia de Software'),
  ('Juliana', 'Costa',       'j.costa@cit.edu.br',      'doutorado',      'Segurança'),
  ('Fernando','Alves',       'f.alves@cit.edu.br',      'doutorado',      'Inteligência Artificial'),
  ('Patricia','Souza',       'p.souza@cit.edu.br',      'mestrado',       'Sistemas de Informação'),
  ('Ricardo', 'Ferreira',    'r.ferreira@cit.edu.br',   'especializacao', 'Ciência de Dados');

-- ────────────────────────────────────────────────────────────────
-- CURSOS
-- ────────────────────────────────────────────────────────────────
INSERT INTO cursos (codigo, nome, icone, duracao_anos, turno, descricao) VALUES
  ('CC',  'Ciência da Computação',      '💻', 4, 'noturno',    'Fundamentos profundos de algoritmos, sistemas e teoria computacional.'),
  ('ES',  'Engenharia de Software',     '🏗️', 4, 'noturno',    'Arquitetura de sistemas, metodologias ágeis e desenvolvimento escalável.'),
  ('CS',  'Cibersegurança',             '🔐', 3, 'noturno',    'Defesa de infraestruturas digitais, pentest e gestão de riscos cibernéticos.'),
  ('IA',  'Inteligência Artificial',    '🤖', 4, 'noturno',    'Machine learning, deep learning e sistemas inteligentes para indústria.'),
  ('SI',  'Sistemas de Informação',     '🌐', 4, 'noturno',    'Gestão tecnológica, ERP e transformação digital em ambientes corporativos.'),
  ('CD',  'Ciência de Dados',           '📊', 3, 'noturno',    'Análise preditiva, big data e visualização de dados para tomada de decisão.');

-- ────────────────────────────────────────────────────────────────
-- DISCIPLINAS (por curso CC, semestres 1-4)
-- ────────────────────────────────────────────────────────────────
INSERT INTO disciplinas (codigo, nome, icone, carga_horaria, creditos, semestre_ref, total_aulas, professor_id, curso_id) VALUES
  -- Semestre 1
  ('CC101', 'Algoritmos e Lógica de Programação', '💡', 80, 4, 1, 24, 2, 1),
  ('CC102', 'Matemática Discreta',                '📐', 60, 3, 1, 18, 2, 1),
  ('CC103', 'Fundamentos de Sistemas',             '🖥️', 60, 3, 1, 18, 3, 1),
  -- Semestre 2
  ('CC201', 'Algoritmos e Estruturas de Dados',   '⚙️', 80, 4, 2, 28, 2, 1),
  ('CC202', 'Orientação a Objetos',               '🧩', 80, 4, 2, 26, 4, 1),
  ('CC203', 'Banco de Dados I',                   '🗄️', 60, 3, 2, 20, 1, 1),
  -- Semestre 3
  ('CC301', 'Banco de Dados Avançado',            '🗄️', 80, 4, 3, 32, 1, 1),
  ('CC302', 'Redes de Computadores',              '🌐', 60, 3, 3, 24, 3, 1),
  ('CC303', 'Engenharia de Software',             '🏗️', 80, 4, 3, 36, 4, 1),
  -- Semestre 4
  ('CS301', 'Cibersegurança',                     '🔐', 60, 3, 4, 30, 5, 1),
  ('IA401', 'Inteligência Artificial',            '🤖', 80, 4, 4, 40, 6, 1),
  -- Semestre 7-8
  ('CC801', 'Trabalho de Conclusão de Curso',     '📋', 160, 8, 7, 40, 4, 1);

-- ────────────────────────────────────────────────────────────────
-- ALUNOS (10 alunos — senha: "senha123")
-- hash bcrypt gerado com salt 10
-- ────────────────────────────────────────────────────────────────
INSERT INTO alunos
  (ra, nome, sobrenome, email, cpf, nascimento, telefone, turno, semestre, ira, status, avatar, password_hash, curso_id)
VALUES
  -- 1
  ('2023001234', 'João',      'da Silva Santos',   'joao@aluno.cit.edu.br',      '123.456.789-00', '2004-03-15', '(11) 9 9876-5432', 'noturno', 4, 8.40, 'ativo', 'JS', '$2a$10$rBd3gP5z7L8TlMkXt/k5OeVW2AoJ9RmUQnIpF6cDgYsXhEbN1avWO', 1),
  -- 2
  ('2022005678', 'Maria',     'Oliveira Pereira',  'maria@aluno.cit.edu.br',     '234.567.890-11', '2003-07-22', '(11) 9 8765-4321', 'noturno', 5, 9.10, 'ativo', 'MO', '$2a$10$rBd3gP5z7L8TlMkXt/k5OeVW2AoJ9RmUQnIpF6cDgYsXhEbN1avWO', 1),
  -- 3
  ('2024009012', 'Pedro',     'Almeida Costa',     'pedro@aluno.cit.edu.br',     '345.678.901-22', '2005-01-10', '(11) 9 7654-3210', 'noturno', 2, 7.30, 'ativo', 'PA', '$2a$10$rBd3gP5z7L8TlMkXt/k5OeVW2AoJ9RmUQnIpF6cDgYsXhEbN1avWO', 2),
  -- 4
  ('2021003456', 'Ana',       'Beatriz Rodrigues', 'ana@aluno.cit.edu.br',       '456.789.012-33', '2002-11-05', '(11) 9 6543-2109', 'noturno', 6, 8.90, 'ativo', 'AB', '$2a$10$rBd3gP5z7L8TlMkXt/k5OeVW2AoJ9RmUQnIpF6cDgYsXhEbN1avWO', 3),
  -- 5
  ('2023007890', 'Carlos',    'Eduardo Martins',   'carlos@aluno.cit.edu.br',    '567.890.123-44', '2004-05-28', '(11) 9 5432-1098', 'noturno', 4, 6.80, 'ativo', 'CE', '$2a$10$rBd3gP5z7L8TlMkXt/k5OeVW2AoJ9RmUQnIpF6cDgYsXhEbN1avWO', 4),
  -- 6
  ('2022001122', 'Fernanda',  'Lima Souza',        'fernanda@aluno.cit.edu.br',  '678.901.234-55', '2003-09-14', '(11) 9 4321-0987', 'noturno', 5, 9.40, 'ativo', 'FL', '$2a$10$rBd3gP5z7L8TlMkXt/k5OeVW2AoJ9RmUQnIpF6cDgYsXhEbN1avWO', 1),
  -- 7
  ('2024003344', 'Lucas',     'Mendes Ferreira',   'lucas@aluno.cit.edu.br',     '789.012.345-66', '2005-03-03', '(11) 9 3210-9876', 'noturno', 2, 7.70, 'ativo', 'LM', '$2a$10$rBd3gP5z7L8TlMkXt/k5OeVW2AoJ9RmUQnIpF6cDgYsXhEbN1avWO', 5),
  -- 8
  ('2020008899', 'Gabriela',  'Nunes Barbosa',     'gabriela@aluno.cit.edu.br',  '890.123.456-77', '2001-12-18', '(11) 9 2109-8765', 'noturno', 8, 8.20, 'ativo', 'GN', '$2a$10$rBd3gP5z7L8TlMkXt/k5OeVW2AoJ9RmUQnIpF6cDgYsXhEbN1avWO', 6),
  -- 9
  ('2023005566', 'Rafael',    'Carvalho Lima',     'rafael@aluno.cit.edu.br',    '901.234.567-88', '2004-08-07', '(11) 9 1098-7654', 'noturno', 4, 7.50, 'ativo', 'RC', '$2a$10$rBd3gP5z7L8TlMkXt/k5OeVW2AoJ9RmUQnIpF6cDgYsXhEbN1avWO', 2),
  -- 10
  ('2021006677', 'Juliana',   'Torres Nascimento', 'juliana@aluno.cit.edu.br',   '012.345.678-99', '2002-04-25', '(11) 9 0987-6543', 'noturno', 6, 8.60, 'ativo', 'JT', '$2a$10$rBd3gP5z7L8TlMkXt/k5OeVW2AoJ9RmUQnIpF6cDgYsXhEbN1avWO', 1),
  -- 11 (bônus)
  ('2024007788', 'Thiago',    'Augusto Pires',     'thiago@aluno.cit.edu.br',    '111.222.333-44', '2005-06-19', '(11) 9 8877-6655', 'noturno', 1, 0.00, 'ativo', 'TA', '$2a$10$rBd3gP5z7L8TlMkXt/k5OeVW2AoJ9RmUQnIpF6cDgYsXhEbN1avWO', 3),
  -- 12 (bônus)
  ('2019009900', 'Camila',    'Ramos Braga',       'camila@aluno.cit.edu.br',    '222.333.444-55', '2000-02-11', '(11) 9 7766-5544', 'noturno', 8, 9.20, 'concluido', 'CR', '$2a$10$rBd3gP5z7L8TlMkXt/k5OeVW2AoJ9RmUQnIpF6cDgYsXhEbN1avWO', 4);

-- ────────────────────────────────────────────────────────────────
-- MATRÍCULAS — aluno 1 (João, semestre 4, CC)
-- ────────────────────────────────────────────────────────────────
INSERT INTO matriculas (aluno_id, disciplina_id, ano_semestre, progresso, status, nota_p1, nota_p2, nota_final) VALUES
  (1, 7,  '2025.1', 72, 'ativo',    NULL,  NULL, NULL),   -- CC301 Banco de Dados Avançado
  (1, 8,  '2025.1', 88, 'ativo',    NULL,  NULL, NULL),   -- CC302 Redes de Computadores
  (1, 9,  '2025.1', 40, 'ativo',    NULL,  NULL, NULL),   -- CC303 Eng. de Software
  (1, 10, '2025.1', 20, 'ativo',    NULL,  NULL, NULL),   -- CS301 Cibersegurança
  (1, 11, '2025.1', 10, 'ativo',    NULL,  NULL, NULL),   -- IA401 IA
  (1, 4,  '2024.2', 55, 'ativo',    7.50,  NULL, NULL);   -- CC201 Algoritmos

-- GRADE CURRICULAR — aluno 1
INSERT INTO grade_curricular (aluno_id, disciplina_id, nota, status, ano_semestre) VALUES
  (1, 1,  9.20, 'done',   '2023.1'),  -- CC101
  (1, 2,  8.70, 'done',   '2023.1'),  -- CC102
  (1, 4,  8.10, 'done',   '2023.2'),  -- CC201
  (1, 5,  9.50, 'done',   '2023.2'),  -- CC202
  (1, 7,  NULL, 'active', '2025.1'),  -- CC301
  (1, 8,  NULL, 'active', '2025.1'),  -- CC302
  (1, 9,  NULL, 'active', '2025.1'),  -- CC303
  (1, 11, NULL, 'locked', NULL),      -- IA401
  (1, 12, NULL, 'locked', NULL);      -- CC801 TCC

-- ────────────────────────────────────────────────────────────────
-- MENSALIDADES
-- ────────────────────────────────────────────────────────────────
INSERT INTO mensalidades (aluno_id, descricao, vencimento, valor, status, pago_em) VALUES
  (1, 'Mensalidade — Fevereiro 2025',  '2025-02-15', 1890.00, 'pending', NULL),
  (1, 'Mensalidade — Janeiro 2025',    '2025-01-15', 1890.00, 'paid',    '2025-01-12 10:23:00'),
  (1, 'Mensalidade — Dezembro 2024',   '2024-12-15', 1890.00, 'paid',    '2024-12-14 09:11:00'),
  (1, 'Mensalidade — Novembro 2024',   '2024-11-15', 1890.00, 'paid',    '2024-11-13 15:45:00'),
  (2, 'Mensalidade — Fevereiro 2025',  '2025-02-15', 1890.00, 'paid',    '2025-02-01 08:00:00'),
  (3, 'Mensalidade — Fevereiro 2025',  '2025-02-15', 1890.00, 'overdue', NULL),
  (4, 'Mensalidade — Fevereiro 2025',  '2025-02-15', 1890.00, 'pending', NULL),
  (5, 'Mensalidade — Fevereiro 2025',  '2025-02-15', 1890.00, 'paid',    '2025-02-03 11:30:00');

-- ────────────────────────────────────────────────────────────────
-- NOTIFICAÇÕES
-- ────────────────────────────────────────────────────────────────
INSERT INTO notificacoes (aluno_id, icone, texto, lida, tipo) VALUES
  (1, '📝', 'Nova aula disponível em <strong>Banco de Dados</strong>', 0, 'info'),
  (1, '📅', 'Lembrete: Prova de Algoritmos amanhã às 8h',              0, 'aviso'),
  (1, '💬', 'Prof. Santos respondeu no fórum',                          1, 'info'),
  (1, '💰', 'Mensalidade vence em 3 dias',                              1, 'financeiro'),
  (NULL, '📢', 'Calendário de provas P1 disponível no portal',          0, 'aviso'),
  (NULL, '🎉', 'Inscrições para o Hackathon CIT 2025 abertas',          0, 'info');

-- ────────────────────────────────────────────────────────────────
-- EVENTOS DO CALENDÁRIO
-- ────────────────────────────────────────────────────────────────
INSERT INTO eventos (nome, data_evento, hora_inicio, hora_fim, local_evento, tipo, disciplina_id, criado_por) VALUES
  ('Prova P1 — Banco de Dados',  '2025-01-20', '08:00', '10:00', 'Sala 305',    'prova',    7,  1),
  ('Entrega Trabalho — Redes',   '2025-01-22', '23:59', NULL,    'Portal EAD',  'entrega',  8,  3),
  ('Workshop — Inteligência Art.','2025-01-25', '14:00', '18:00', 'Auditório A', 'workshop', 11, 6),
  ('Prazo Rematrícula 2025.1',   '2025-01-31', NULL,    '18:00', 'Secretaria',  'prazo',    NULL, NULL),
  ('Prova P1 — Eng. de Software','2025-02-05', '19:00', '21:00', 'Sala 210',    'prova',    9,  4),
  ('Semana da Tecnologia CIT',   '2025-02-17', '09:00', '18:00', 'Campus',      'workshop', NULL, NULL);

-- ────────────────────────────────────────────────────────────────
-- MENSAGENS DO CHAT — aluno 1
-- ────────────────────────────────────────────────────────────────
INSERT INTO mensagens_chat (aluno_id, contato_sigla, remetente, texto) VALUES
  (1, 'ST', 'suporte', 'Olá, João! 👋 Como posso te ajudar hoje?'),
  (1, 'ST', 'aluno',   'Bom dia! Estou com problema para acessar o vídeo da aula 7.'),
  (1, 'ST', 'suporte', 'Entendido! Tente limpar o cache do navegador e recarregar. 🔧');

-- ────────────────────────────────────────────────────────────────
-- AULAS — disciplina CC301 Banco de Dados Avançado (amostra)
-- ────────────────────────────────────────────────────────────────
INSERT INTO aulas (disciplina_id, numero, titulo, descricao, duracao_min, ordem) VALUES
  (7, 1,  'Revisão de Modelagem Relacional',      'Revisão de entidades, atributos e relacionamentos.',  50, 1),
  (7, 2,  'Normalização — 1FN, 2FN e 3FN',        'Formas normais e como eliminar redundâncias.',        50, 2),
  (7, 3,  'Forma Normal de Boyce-Codd',            'FNBC e casos especiais de dependência funcional.',   50, 3),
  (7, 4,  'Índices e Performance',                 'B-Trees, hash index e análise de planos de execução.',50, 4),
  (7, 5,  'Stored Procedures e Triggers',          'Lógica no banco: criação, uso e boas práticas.',     50, 5),
  (7, 6,  'Transações e Controle de Concorrência', 'ACID, lock, deadlock e isolation levels.',           50, 6),
  (7, 7,  'Replicação e Alta Disponibilidade',     'Master-replica, failover e balanceamento de carga.', 50, 7);

-- ────────────────────────────────────────────────────────────────
-- PROGRESSO NAS AULAS — aluno 1, disciplina 7
-- ────────────────────────────────────────────────────────────────
INSERT INTO progresso_aulas (aluno_id, aula_id, concluida, tempo_assistido, ultima_posicao) VALUES
  (1, 1, 1, 2958, 2958),  -- Aula 1 — concluída (50min)
  (1, 2, 1, 2958, 2958),  -- Aula 2 — concluída
  (1, 3, 1, 2958, 2958),  -- Aula 3 — concluída
  (1, 4, 1, 2958, 2958),  -- Aula 4 — concluída
  (1, 5, 1, 2958, 2958),  -- Aula 5 — concluída
  (1, 6, 0, 1540, 1540),  -- Aula 6 — em andamento
  (1, 7, 0,    0,    0);  -- Aula 7 — não iniciada
