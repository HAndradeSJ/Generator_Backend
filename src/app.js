// Importação
const express = require('express');
const exphbs = require('express-handlebars')
// const db = require('./models/Conexbd');

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
app.use('/formulario',require('./routes/home'))

// Codigo para ver se minha tabela do vs tá diferente da do banco 
// db.sync({alter:true});

// Definindo Porta 
const port = 8081;
app.listen(port,()=>{
    console.log(`servidor rondando na porta ${port}`);
})