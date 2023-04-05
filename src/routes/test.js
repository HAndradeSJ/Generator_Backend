// Importação
const { Router } = require("express");
const express = require("express");
const router = express.Router();

const Usecontrollers = require("../controllers/teste");
const usecontrollers = new Usecontrollers();
 

router.get("/",usecontrollers.teste());


// exportando o mildeware
module.exports = router;
