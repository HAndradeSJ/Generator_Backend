// Importação
const express = require('express');
const exphbs = require('express-handlebars')


// Definindo variaveis pardrão
const app = express();

// Definido minha view egine
// define qual o template a ser utilizado
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

// define a extensão e a instância do handlebars com o modelo que será interpretado o código
app.engine( 'hbs', exphbs.engine( {
    extname: '.hbs',
    defaultView: 'main',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/'
}));



//  Rota padrão 
app.use('/', require('./routes/home'));
app.use('/formulario',require('./routes/criarform'))

// Definindo Porta 
const port = 3000;
app.listen(port,()=>{
    console.log(`servidor rondando na porta ${port}`);
})