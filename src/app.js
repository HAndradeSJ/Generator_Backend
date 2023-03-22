// Importação
const express = require('express');

// Definindo variaveis pardrão
const app = express();


// Definido minha view egine
app.set('view engine', 'ejs');

//  Rota padrão 
app.use('/', require('./routes/home'));
app.use('/formulario',require('./routes/criarform'))

// Definindo Porta 
const port = 3000;
app.listen(port,()=>{
    console.log(`servidor rondando na porta ${port}`);
})