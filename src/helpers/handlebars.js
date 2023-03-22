// IMPORTAÇÃO DO Handlebars E CONSTANTES PADRÃO 
var exphbs = require('express-handlebars');
const {PARTIALS_DIR,VIEWS_DIR,LAYOUTS_DIR} = require('./constants')

// Configuração paradrão do Handlebars
exports.init = function(app){
    app.engine('html', exphbs.engine({
        partialsDir: PARTIALS_DIR,
        layoutsDir:  LAYOUTS_DIR
    }));
    app.set('view engine', 'html');
    app.set('view', VIEWS_DIR)
}