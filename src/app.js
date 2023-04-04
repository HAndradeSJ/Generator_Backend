// Importação
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const cors = require("cors");

// Definindo variaveis pardrão
const app = express();
app.use(cors());

// Configurando bodyParser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


// Definido minha view egine
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.engine( 'hbs', exphbs.engine({
    extname: '.hbs',
    defaultView: 'main',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/',
    
}));

// Definindo pasta de arquivo estaticos 
app.use('/assets', express.static(__dirname +'/assets'));


//  Rota padrão 
app.use('/', require('./routes/home'));



// Definindo Porta 
const port = 8081;
app.listen(port,()=>{
    console.log(`servidor rondando na porta ${port}`);
})