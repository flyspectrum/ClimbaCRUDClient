import mysql from 'mysql2/promise';

export const connection = mysql.createPool({
  host: 'localhost',
  user: 'admin',
  password: '123456',
  database: 'cadastro_app'
});
