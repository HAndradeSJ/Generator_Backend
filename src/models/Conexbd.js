// importação
const Sequelize = require('sequelize');

// fazendo a conexção do banco de dados
var sequelize = new Sequelize(
    "testehenrique",
    "root",
    "1234",
    {
        host: "0.0.0.0",
        dialect: "sqlite",
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
        storage: "src/models/testehenrique.sqlite"
    }
);
  

// promise para validar a conexação
// sequelize.authenticate().then(result => res.status(200).send(result))
// .catch(err => res.status(500));


// exportação da constante do banco de dados
module.exports = sequelize
