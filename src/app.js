// Importação
const express = require('express');
const exphbs = require('express-handlebars')


// Definindo variaveis pardrão
const app = express();

// Definido minha view egine
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.engine( 'hbs', exphbs.engine( {
    extname: '.hbs',
    defaultView: 'main',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/',
    
}));

app.use('/assets', express.static(__dirname +'/assets'));

//  Rota padrão 
app.use('/', require('./routes/home'));
app.use('/formulario',require('./routes/criarform'))

// Definindo Porta 
const port = 3000;
app.listen(port,()=>{
    console.log(`servidor rondando na porta ${port}`);
})