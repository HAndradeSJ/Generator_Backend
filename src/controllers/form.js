// Rota do fomrulario 
const formns = function(request,response){
    return response.render('form',{layout:MASTER_DIR, title: 'Formulario'})
};
// Rota de criar documento
const criar = function(request,response){
    return response.criardocumento(request,response);
}

module.exports = {formns,criar};

