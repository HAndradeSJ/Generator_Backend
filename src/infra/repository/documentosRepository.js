// Importando o banco de dados
const db = require("../db/db");

// criando um class para inserir documentos
class documentosRepository {
  constructor() {
    this.db = db;
  }

  // função para gerar o numero identifador do documento
  gerarNumero() {
    return new Promise((resolve, reject) => {
      this.db.query(
        `SELECT num_doc FROM documentos ORDER BY id des`,
        [],
        async (error, response) => {
          if (error) return reject(error);
          var num = response[0] ? parseInt(response[0].num_doc, 10) + 1 : 1;
          return resolve(num);
          
        }
      );
    });
  }

  // inserindo dados no banco
  criaModelo1(data) {
    return new Promise((resolve, reject) => {
      try {
        this.db.query(
          `INSERT INTO documentos (num_doc, tipo_doc, data_hora, usuario, descricao) values (?,?,?,?,?)`,
          [data.numero, "Modelo 1", new Date(), data.usuario, data.desc],
          // Acusando o erro
          async (error, response) => {
            if (error) return reject(error);
            return resolve({ success: "Modelo criado com sucesso" });
          }
        );
      } catch (error) {
        return reject(new Error(error));
      }
      
      
    })
  }
    criaModelo2(data) {
      return new Promise((resolve, reject) => {
        try {
          this.db.query(
            `INSERT INTO documentos (num_doc, tipo_doc, data_hora, usuario, descricao) values (?,?,?,?,?)`,
            [data.numero, "Modelo 2", new Date(), data.usuario, data.desc],
            // Acusando o erro
            async (error, response) => {
              if (error) return reject(error);
              return resolve({ success: "Modelo criado com sucesso" });
            }
          );
        } catch (error) {
          return reject(new Error(error));
        }
        
        
      })
    }
    criarmodelo3(data){
      return new Promise((resolve, reject) => {
        try {
          this.db.query(
            `INSERT INTO documentos (num_doc, tipo_doc, data_hora, usuario, descricao) values (?,?,?,?,?)`,
            [data.numero, "Modelo 3", new Date(), data.usuario, data.desc],
            // Acusando o erro
            async (error, response) => {
              if (error) return reject(error);
              return resolve({ success: "Modelo criado com sucesso" });
            }
          );
        } catch (error) {
          return reject(new Error(error));
        }
        
        
      })
       
    }
      
    
    
    
  
}
// exportação do repository
module.exports = documentosRepository;
