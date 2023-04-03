// Importação
const { Router } = require("express");
const express = require("express");
const router = express.Router();

// importação do controllers
const Usecontrollers = require("../controllers/form");
const usecontrollers = new Usecontrollers();

// Rota Home
router.get("/", usecontrollers.renderhome());

// rotas dos modelos
router.get("/modelo1", usecontrollers.modelo1());
router.get("/modelo2", usecontrollers.modelo2());
router.get("/modelo3", usecontrollers.modelo3());

// rotas de criação de modelos
router.post("/criarmodelo1", usecontrollers.criarmodelo1());
router.post("/criarmodelo2", usecontrollers.criarmodelo2());
router.post("/criarmodelo3", usecontrollers.criarmodelo3());



// exportando o mildeware
module.exports = router;


