const { Router } = require('express');
const express = require('express');
const router = express.Router();

// importação do controllers
const form = require('../controllers/form');



// Rota Home
router.get('/',form.formns);
router.post('/formulario',form.criar);


// exportando o mildeware
module.exports = Router