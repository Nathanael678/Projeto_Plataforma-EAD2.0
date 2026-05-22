# 🎓 CIT — Centro de Inovação Tecnológica

> Portal acadêmico completo desenvolvido com Node.js, Express e MySQL. Inclui site público, autenticação JWT, dashboard do aluno, gestão de cursos, financeiro, chat e muito mais.

---

## 📸 Visão Geral

O portal CIT é uma Single Page Application (SPA) que reúne em um único sistema:

- **Site público** com hero, cursos, notícias e footer
- **Autenticação** com login e cadastro de alunos (JWT + bcrypt)
- **Dashboard** com resumo de progresso, eventos e notificações
- **Cursos** com acompanhamento de progresso por disciplina
- **Grade curricular** com histórico completo de notas
- **Financeiro** com histórico de mensalidades e status de pagamento
- **Chat** de suporte integrado
- **Calendário** com provas, entregas e eventos

---

## 🛠️ Tecnologias

**Frontend**
- HTML5 · CSS3 · JavaScript Vanilla (SPA sem framework)
- Design system próprio com tokens CSS (tipografia Instrument Serif + Geist)

**Backend**
- Node.js · Express 4
- JSON Web Token (JWT) para autenticação
- bcryptjs para hash de senhas
- Helmet · CORS · express-rate-limit para segurança

**Banco de dados**
- MySQL 8.0
- Schema relacional com 12 tabelas normalizadas
- Seeds com 12 alunos pré-cadastrados

---

## 📁 Estrutura do Projeto

```
cit-portal/
├── index.html                  # SPA — toda a interface
├── css/
│   ├── tokens.css              # Design tokens e reset global
│   ├── app.css                 # Shell: sidebar, topbar, main
│   ├── auth.css                # Páginas de login e cadastro
│   └── public.css              # Site público (nav, hero, footer)
├── backend/
│   ├── server.js               # Entrada do servidor Express
│   ├── package.json
│   ├── middleware/
│   │   └── auth.js             # Verificação JWT
│   ├── routes/
│   │   ├── auth.js             # POST /api/auth/login | /register
│   │   ├── users.js            # GET|PUT /api/users/me
│   │   ├── courses.js          # GET /api/courses
│   │   ├── financial.js        # GET /api/financial
│   │   ├── notifications.js    # GET|PATCH /api/notifications
│   │   └── chat.js             # GET|POST /api/chat/:contact
│   └── data/
│       └── store.js            # In-memory store (dev/fallback)
├── database/
│   ├── schema.sql              # CREATE TABLE (MySQL 8.0+)
│   └── seed.sql                # Dados iniciais (12 alunos)
├── .env                        # Variáveis de ambiente (não versionar)
├── .gitignore
└── README.md
```

---

## ⚙️ Instalação e Execução

### Pré-requisitos

- [Node.js](https://nodejs.org/) v18 ou superior
- [MySQL](https://www.mysql.com/) 8.0 ou superior
- npm ou yarn

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/cit-portal.git
cd cit-portal
```

### 2. Configure o banco de dados

```bash
# Crie o banco e as tabelas
mysql -u root -p < database/schema.sql

# Insira os dados iniciais
mysql -u root -p cit_portal < database/seed.sql
```

### 3. Configure as variáveis de ambiente

```bash
cp .env .env.local
# Edite o arquivo com suas credenciais
```

```env
PORT=3000
NODE_ENV=development

JWT_SECRET=cit_secret_2025_troque_em_producao

DB_HOST=localhost
DB_PORT=3306
DB_NAME=cit_portal
DB_USER=root
DB_PASS=sua_senha
```

### 4. Instale as dependências e inicie

```bash
cd backend
npm install

# Desenvolvimento (com auto-reload)
npm run dev

# Produção
npm start
```

Acesse **http://localhost:3000** 🚀

---

## 🔐 Contas de Teste

Todos os alunos usam a senha padrão `senha123`.

| Nome            | RA           | E-mail                        | Curso                      |
|-----------------|--------------|-------------------------------|----------------------------|
| João Silva      | 2023001234   | joao@aluno.cit.edu.br         | Ciência da Computação      |
| Maria Oliveira  | 2022005678   | maria@aluno.cit.edu.br        | Ciência da Computação      |
| Pedro Almeida   | 2024009012   | pedro@aluno.cit.edu.br        | Engenharia de Software     |
| Ana Rodrigues   | 2021003456   | ana@aluno.cit.edu.br          | Cibersegurança             |
| Carlos Martins  | 2023007890   | carlos@aluno.cit.edu.br       | Inteligência Artificial    |
| Fernanda Lima   | 2022001122   | fernanda@aluno.cit.edu.br     | Ciência da Computação      |
| Lucas Mendes    | 2024003344   | lucas@aluno.cit.edu.br        | Sistemas de Informação     |
| Gabriela Nunes  | 2020008899   | gabriela@aluno.cit.edu.br     | Ciência de Dados           |
| Rafael Carvalho | 2023005566   | rafael@aluno.cit.edu.br       | Engenharia de Software     |
| Juliana Torres  | 2021006677   | juliana@aluno.cit.edu.br      | Ciência da Computação      |
| Thiago Pires    | 2024007788   | thiago@aluno.cit.edu.br       | Cibersegurança             |
| Camila Ramos    | 2019009900   | camila@aluno.cit.edu.br       | Inteligência Artificial    |

---

## 🗄️ Diagrama do Banco de Dados

```
alunos ────────────── cursos
  │                     │
  ├── matriculas ── disciplinas ── professores
  │                     │
  ├── grade_curricular   └── aulas
  │                           │
  ├── progresso_aulas ────────┘
  │
  ├── mensalidades
  ├── notificacoes
  └── mensagens_chat
       │
       └── eventos (curso, disciplina, professor)
```

**Total: 12 tabelas** com relacionamentos via chaves estrangeiras, suporte completo a CRUD.

---

## 🌐 Rotas da API

| Método | Rota | Descrição | Auth |
|--------|------|-----------|------|
| POST | `/api/auth/login` | Login do aluno | ❌ |
| POST | `/api/auth/register` | Cadastro de novo aluno | ❌ |
| GET | `/api/users/me` | Dados do aluno logado | ✅ |
| PUT | `/api/users/me` | Atualizar perfil | ✅ |
| GET | `/api/users/me/grade` | Grade curricular | ✅ |
| GET | `/api/courses` | Lista de cursos | ✅ |
| GET | `/api/courses/:id` | Detalhe de um curso | ✅ |
| GET | `/api/financial` | Situação financeira | ✅ |
| GET | `/api/notifications` | Notificações | ✅ |
| PATCH | `/api/notifications/read-all` | Marcar todas como lidas | ✅ |
| GET | `/api/chat/:contact` | Histórico do chat | ✅ |
| POST | `/api/chat/:contact` | Enviar mensagem | ✅ |
| GET | `/api/health` | Status do servidor | ❌ |

---

## 🔒 Segurança

- Senhas armazenadas com **bcrypt** (salt rounds: 10)
- Autenticação stateless via **JWT** (expira em 7 dias)
- Headers de segurança com **Helmet**
- Rate limiting: 200 req/15min globais · 10 req/15min no login
- CORS restrito a `localhost:3000` (configurável via `.env`)

---

## 📦 Dependências

```json
{
  "express": "^4.18.2",
  "cors": "^2.8.5",
  "helmet": "^7.1.0",
  "express-rate-limit": "^7.1.5",
  "bcryptjs": "^2.4.3",
  "jsonwebtoken": "^9.0.2",
  "express-validator": "^7.0.1",
  "mysql2": "^3.6.0"
}
```

---

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/minha-feature`)
3. Commit suas alterações (`git commit -m 'feat: adiciona minha feature'`)
4. Push para a branch (`git push origin feature/minha-feature`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<p align="center">
  Feito com ❤️ por <strong>CIT — Centro de Inovação Tecnológica</strong>
</p>
