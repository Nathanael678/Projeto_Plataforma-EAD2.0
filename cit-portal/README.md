# CIT — Centro de Inovação Tecnológica

Portal acadêmico completo: site público, autenticação, dashboard do aluno e painel de suporte.

## Estrutura de pastas

```
cit-portal/
├── index.html            ← SPA (toda a interface)
├── css/
│   ├── tokens.css        ← Design tokens e reset
│   ├── app.css           ← Shell: sidebar, topbar, main
│   ├── auth.css          ← Login e cadastro
│   └── public.css        ← Site público
├── backend/
│   ├── server.js         ← Express + rotas
│   ├── package.json
│   ├── middleware/
│   │   └── auth.js       ← JWT verification
│   ├── routes/
│   │   ├── auth.js
│   │   ├── users.js
│   │   ├── courses.js
│   │   ├── financial.js
│   │   ├── notifications.js
│   │   └── chat.js
│   └── data/
│       └── store.js      ← In-memory fallback (dev)
├── database/
│   ├── schema.sql        ← CREATE TABLE (MySQL 8.0+)
│   └── seed.sql          ← 12 alunos + dados de suporte
├── .env                  ← Variáveis de ambiente
├── .gitignore
└── README.md
```

## Instalação rápida

```bash
# 1. Banco de dados MySQL
mysql -u root -p < database/schema.sql
mysql -u root -p cit_portal < database/seed.sql

# 2. Backend
cd backend
cp ../.env .env          # edite com suas credenciais
npm install
npm run dev              # nodemon auto-reload
```

Acesse em **http://localhost:3000**

## Login de teste

| RA           | Senha    |
|--------------|----------|
| 2023001234   | senha123 |
| 2022005678   | senha123 |

## Tecnologias

- **Frontend**: HTML5 · CSS3 · Vanilla JS (SPA sem framework)
- **Backend**: Node.js · Express 4 · JWT · bcryptjs
- **Banco de dados**: MySQL 8.0 (schema relacional completo)
- **Segurança**: Helmet · CORS · Rate Limiting · bcrypt hash

---
© 2025 CIT — Centro de Inovação Tecnológica
