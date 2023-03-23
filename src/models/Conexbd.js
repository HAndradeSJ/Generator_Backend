// importação
const Sequelize = require('sequelize');

// fazendo a conexção do banco de dados
const sequelize = new Sequelize('testehenrique','root','1234',{
    host: 'localhost',
    dialect:'mysql'
    
})

// promise para validar a conexação
sequelize.authenticate().then(result => res.status(200).send(result))
.catch(err => res.status(500));


// exportação da constante do banco de dados
module.exports = sequelize
