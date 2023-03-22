const { Router } = require('express');
const express = require('express');
const router = express.Router();
// importação dos controllers
const Usecontrollers = require('../controllers/form')
const usecontrollers = new Usecontrollers;


// Rota Home
router.post('/formulairo',usecontrollers.criardocumento());


// exportando o mildeware
module.exports = Router