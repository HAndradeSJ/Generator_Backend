// importação
const Sequelize = require('sequelize');
const db = require('./Conexbd');
 
// Definido a tabela
const documentos = db.define('documentos',{
    id_documento:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    tipo:{
        type:Sequelize.INTEGER,
        allowNull : true
    },
    datadescricao:{
        type:Sequelize.DATE,
        allowNull: false
    },
    usuario:{
        type:Sequelize.STRING,
        allowNull: false
    }

})
// Codigo para ver se minha tabela do vs tá diferente da do banco 
db.sync({alter:true});

module.exports = documentos;