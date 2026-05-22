-- CIT — Centro de Inovação Tecnológica | seed.sql | 12 alunos + dados
-- Todas as senhas são "senha123"
USE cit_portal;

INSERT INTO professores (nome, sobrenome, email, titulacao, departamento) VALUES
  ('Carlos','Mendes','c.mendes@cit.edu.br','doutorado','Banco de Dados'),
  ('Ana','Lima','a.lima@cit.edu.br','doutorado','Algoritmos'),
  ('Marcos','Rocha','m.rocha@cit.edu.br','mestrado','Infraestrutura'),
  ('Roberto','Lima','r.lima@cit.edu.br','doutorado','Engenharia de Software'),
  ('Juliana','Costa','j.costa@cit.edu.br','doutorado','Segurança'),
  ('Fernando','Alves','f.alves@cit.edu.br','doutorado','Inteligência Artificial');

INSERT INTO cursos (codigo, nome, icone, duracao_anos, turno) VALUES
  ('CC','Ciência da Computação','💻',4,'noturno'),
  ('ES','Engenharia de Software','🏗️',4,'noturno'),
  ('CS','Cibersegurança','🔐',3,'noturno'),
  ('IA','Inteligência Artificial','🤖',4,'noturno'),
  ('SI','Sistemas de Informação','🌐',4,'noturno'),
  ('CD','Ciência de Dados','📊',3,'noturno');

INSERT INTO alunos (ra,nome,sobrenome,email,cpf,nascimento,telefone,turno,semestre,ira,status,avatar,password_hash,curso_id) VALUES
  ('2023001234','João','da Silva Santos','joao@aluno.cit.edu.br','123.456.789-00','2004-03-15','(11) 9 9876-5432','noturno',4,8.40,'ativo','JS','$2a$10$rBd3gP5z7L8TlMkXt/k5OeVW2AoJ9RmUQnIpF6cDgYsXhEbN1avWO',1),
  ('2022005678','Maria','Oliveira Pereira','maria@aluno.cit.edu.br','234.567.890-11','2003-07-22','(11) 9 8765-4321','noturno',5,9.10,'ativo','MO','$2a$10$rBd3gP5z7L8TlMkXt/k5OeVW2AoJ9RmUQnIpF6cDgYsXhEbN1avWO',1),
  ('2024009012','Pedro','Almeida Costa','pedro@aluno.cit.edu.br','345.678.901-22','2005-01-10','(11) 9 7654-3210','noturno',2,7.30,'ativo','PA','$2a$10$rBd3gP5z7L8TlMkXt/k5OeVW2AoJ9RmUQnIpF6cDgYsXhEbN1avWO',2),
  ('2021003456','Ana','Beatriz Rodrigues','ana@aluno.cit.edu.br','456.789.012-33','2002-11-05','(11) 9 6543-2109','noturno',6,8.90,'ativo','AB','$2a$10$rBd3gP5z7L8TlMkXt/k5OeVW2AoJ9RmUQnIpF6cDgYsXhEbN1avWO',3),
  ('2023007890','Carlos','Eduardo Martins','carlos@aluno.cit.edu.br','567.890.123-44','2004-05-28','(11) 9 5432-1098','noturno',4,6.80,'ativo','CE','$2a$10$rBd3gP5z7L8TlMkXt/k5OeVW2AoJ9RmUQnIpF6cDgYsXhEbN1avWO',4),
  ('2022001122','Fernanda','Lima Souza','fernanda@aluno.cit.edu.br','678.901.234-55','2003-09-14','(11) 9 4321-0987','noturno',5,9.40,'ativo','FL','$2a$10$rBd3gP5z7L8TlMkXt/k5OeVW2AoJ9RmUQnIpF6cDgYsXhEbN1avWO',1),
  ('2024003344','Lucas','Mendes Ferreira','lucas@aluno.cit.edu.br','789.012.345-66','2005-03-03','(11) 9 3210-9876','noturno',2,7.70,'ativo','LM','$2a$10$rBd3gP5z7L8TlMkXt/k5OeVW2AoJ9RmUQnIpF6cDgYsXhEbN1avWO',5),
  ('2020008899','Gabriela','Nunes Barbosa','gabriela@aluno.cit.edu.br','890.123.456-77','2001-12-18','(11) 9 2109-8765','noturno',8,8.20,'ativo','GN','$2a$10$rBd3gP5z7L8TlMkXt/k5OeVW2AoJ9RmUQnIpF6cDgYsXhEbN1avWO',6),
  ('2023005566','Rafael','Carvalho Lima','rafael@aluno.cit.edu.br','901.234.567-88','2004-08-07','(11) 9 1098-7654','noturno',4,7.50,'ativo','RC','$2a$10$rBd3gP5z7L8TlMkXt/k5OeVW2AoJ9RmUQnIpF6cDgYsXhEbN1avWO',2),
  ('2021006677','Juliana','Torres Nascimento','juliana@aluno.cit.edu.br','012.345.678-99','2002-04-25','(11) 9 0987-6543','noturno',6,8.60,'ativo','JT','$2a$10$rBd3gP5z7L8TlMkXt/k5OeVW2AoJ9RmUQnIpF6cDgYsXhEbN1avWO',1),
  ('2024007788','Thiago','Augusto Pires','thiago@aluno.cit.edu.br','111.222.333-44','2005-06-19','(11) 9 8877-6655','noturno',1,0.00,'ativo','TA','$2a$10$rBd3gP5z7L8TlMkXt/k5OeVW2AoJ9RmUQnIpF6cDgYsXhEbN1avWO',3),
  ('2019009900','Camila','Ramos Braga','camila@aluno.cit.edu.br','222.333.444-55','2000-02-11','(11) 9 7766-5544','noturno',8,9.20,'concluido','CR','$2a$10$rBd3gP5z7L8TlMkXt/k5OeVW2AoJ9RmUQnIpF6cDgYsXhEbN1avWO',4);

INSERT INTO mensalidades (aluno_id,descricao,vencimento,valor,status,pago_em) VALUES
  (1,'Mensalidade — Fevereiro 2025','2025-02-15',1890.00,'pending',NULL),
  (1,'Mensalidade — Janeiro 2025','2025-01-15',1890.00,'paid','2025-01-12 10:23:00'),
  (1,'Mensalidade — Dezembro 2024','2024-12-15',1890.00,'paid','2024-12-14 09:11:00'),
  (2,'Mensalidade — Fevereiro 2025','2025-02-15',1890.00,'paid','2025-02-01 08:00:00'),
  (3,'Mensalidade — Fevereiro 2025','2025-02-15',1890.00,'overdue',NULL);

INSERT INTO notificacoes (aluno_id,icone,texto,lida,tipo) VALUES
  (1,'📝','Nova aula disponível em <strong>Banco de Dados</strong>',0,'info'),
  (1,'📅','Lembrete: Prova de Algoritmos amanhã às 8h',0,'aviso'),
  (1,'💬','Prof. Santos respondeu no fórum',1,'info'),
  (1,'💰','Mensalidade vence em 3 dias',1,'financeiro'),
  (NULL,'📢','Calendário de provas P1 disponível no portal',0,'aviso');

INSERT INTO eventos (nome,data_evento,hora_inicio,hora_fim,local_evento,tipo) VALUES
  ('Prova P1 — Banco de Dados','2025-01-20','08:00','10:00','Sala 305','prova'),
  ('Entrega Trabalho — Redes','2025-01-22','23:59',NULL,'Portal EAD','entrega'),
  ('Workshop — Inteligência Artificial','2025-01-25','14:00','18:00','Auditório A','workshop'),
  ('Prazo Rematrícula 2025.1','2025-01-31',NULL,'18:00','Secretaria','prazo');
