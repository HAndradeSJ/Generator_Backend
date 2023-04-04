// Importando o banco de dados
const { parse } = require("path");
const db = require("../db/db");



// função para quando o numeral for 0
function strzero(nr,n,str){
  return Array(n-String(nr).length + 1).join(str || '0') +nr;
}

// criando um class para inserir documentos
class documentosRepository {
  constructor() {
    this.db = db;
  }

  // função para gerar o numero identifador do documento
  gerarNumero() {
    return new Promise((resolve, reject) => {
      this.db.query(
        `SELECT num_doc FROM documentos ORDER BY id DESC`,
        [],
        async (error, response) => {
          var date = new Date()
          var year = date.getFullYear();
          if(error) return reject(error);
          if(response.length == 0){
            var num = strzero(0,5)
          }
          else{
            var num = response[0].num_doc.split('/');
            num = num[0]
          }
          var num = strzero(parseInt(num)+1,3);
          num =  num + '/' + year;
          return resolve(num)
          
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
            [data.numero, "Modelo 2", new Date(), data.usuario, data.texts],
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
    criarModelo3(data){
      return new Promise((resolve, reject) => {
        try {
          this.db.query(
            `INSERT INTO documentos (num_doc, tipo_doc, data_hora, usuario, descricao) values (?,?,?,?,?)`,
            [data.numero, "Modelo 3", new Date(), data.usuario, data.texts],
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
