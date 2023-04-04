// Importando minhas class e metodos derivados
const Usarservices1 = require("../services/criardocuemento1.services");
const usarservices1 = new Usarservices1();
const Usarservices2 = require("../services/criardocumento2.services");
const usarservices2 = new Usarservices2();
const Usarservices3 = require("../services/criardocumento3.services");
const usarservices3 = new Usarservices3();
const DocumentosRepository = require("../infra/repository/documentosRepository");
const db = require("../infra/db/db");
const documentosRepository = new DocumentosRepository();

// Defindo a class do meus controllers
class Home {
  // controller para renderizar a home
  renderhome(params) {
    return (req, res) => {
      res.render("home", { title: "Home", style: "home.css" });
    };
  }
  //controller para renderizar modelo
  modelo1(params) {
    return (req, res) => {
      documentosRepository.gerarNumero().then((response) => {
        res.render("modelo1", {
          title: "Modelo1",
          style: "modelo1.css",
          numero_doc:response,
        });
      });
    };
  }
  modelo2(params) {
    return (req, res) => {
      documentosRepository.gerarNumero().then((response) => {
        res.render("modelo2", {
          title: "Modelo2",
          style: "modelo2.css",
          numero_doc:response,
        });
      });
    };
  }
  modelo3(params) {
    return (req, res) => {
      documentosRepository.gerarNumero().then((response) => {
        res.render("modelo3", {
          title: "Modelo3",
          style: "modelo3.css",
          numero_doc:response,
        });
      });
    };
  }
  // Renderização de geneciador de modelos 
  meusmodelos(){
    return (req,res)=>{
       documentosRepository.listall().then((response) => {
       res.render("gerenciador",{title:"Meus Modelos",style:"meusmodelos.css",documento:response})
       })
    }
  }



 // controller de criar documento

  criarmodelo1() {
    return (req, res) => {

      // pegando dados do formulario
      const data = req.body;

      // Cadastrando do banco database
      documentosRepository.criaModelo1(data)

      // Chamando a função do word
      usarservices1.criarmodelo1(req, res)
    
          
  }
}
  criarmodelo2(req, res) {
    return (req, res) => {
       // pegando dados do formulario
       const data = req.body;

       // Cadastrando do banco database
       documentosRepository.criaModelo2(data)

      // Chamando a funçao do word
      usarservices2.criarmodelo2(req,res);
    };
  }
  criarmodelo3(req, res) {
    return (req, res) => {
       // pegando dados do formulario
        const data = req.body;

        // Cadastrando do banco database
        documentosRepository.criarModelo3(data)

        // chamando a função do word
        usarservices3.criarmodelo3(req,res);

    };
  }
}


// exportando a class do meus controllers
module.exports = Home;
