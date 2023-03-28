const db = require("../db/db");

class documentosRepository {
  constructor() {
    this.db = db;
  }

  gerarNumero() {
    return new Promise((resolve, reject) => {
      const { numero } = this.db.query(
        `SELECT num_doc FROM documentos`,
        [],
        async (error, response) => {
          if (error) return reject(error);
          return resolve(response[0]);
        }
      );

      try {
        this.db.query(
          `INSERT INTO documentos (num_doc) values (?)`,
          [numero + 1],
          async (error, response) => {
            if (error) return reject(error);
            this.db.query(
              `SELECT numero FROM documentos order by desc`,
              [],
              async (error, response) => {
                if (error) return reject(error);
                return resolve(response[0]);
              }
            );
          }
        );
      } catch (error) {
        return reject(new Error(error));
      }
    });
  }

  criaModelo1(data) {
    return new Promise((resolve, reject) => {
      try {
        this.db.query(
          `INSERT INTO documentos (num_doc, tipo_doc, data_hora, usuario, descricao) values (?,?,?,?,?)`,
          [
            data.num_doc,
            data.tipo_doc,
            new Date(),
            data.usuario,
            data.descricao,
          ],
          async (error, response) => async (error, response) => {
            if (error) return reject(error);
            return resolve({success: "Modelo criado com sucesso"});
          }
        );
      } catch (error) {
        return reject(new Error(error));
      }
    });
  }
}

module.exports = documentosRepository;