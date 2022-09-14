import mysql from 'mysql2/promise'


const con = await mysql.createConnection({
    host: process.env.MYSQL_HOST, //ip
    user: process.env.MYSQL_USER, //usuário do banco
    password: process.env.MYSQL_PWD, //senha do usuário
    database: process.env.MYSQL_DB, //nome do banco de dados
   
})

console.log('B.D Conectado!');

export { con }