// backend/data/db.js
'use strict';
const mysql = require('mysql2');

// Configure com as credenciais do SEU MySQL
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',      // Se o seu usuário for diferente de root, mude aqui
  password: 'sua_senha_aqui', // COLOQUE A SUA SENHA DO MYSQL AQUI
  database: 'portal_cit',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool.promise();