// Importação 
const { Router } = require('express');
const express = require('express');
const { useInflection } = require('sequelize');
const router = express.Router();

// importação do controllers
const Usecontrollers = require('../controllers/form')
const usecontrollers = new Usecontrollers;

// Rota Home
router.get('/',usecontrollers.renderhome());

// rotas dos modelos
router.get('/modelo1',usecontrollers.modelo1());
router.post('/criarmodelo1',usecontrollers.criarmodelo1());


// exportando o mildeware
module.exports = router