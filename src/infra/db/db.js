// Importações
const mysql = require("mysql");

// Armazenando as contants no dotenv
require('dotenv').config({path:__dirname+'/./../../../.env'});

// definindo a conexao com o banco
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    multipleStatements: true,
});

// conectando com o banco
db.connect( (erro) => {
    if(erro){
        throw erro;
    }
    console.log(`Rodando o banco de dados  ${process.env.DB_NAME}`);
});
// instanciando o banco
global.db = db;

// exportando o banco
module.exports = db;