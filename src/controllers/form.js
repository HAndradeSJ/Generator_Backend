// Defindo a class do meus controllers
class Home {
    
    // controller para renderizar a home
    renderhome(params) {
    console.log("teste de rota")
        return (req,res)=> {
            res.render('home',{layout:MASTER_DIR, title: 'Formulario'});
        }
   } 
        
    
   
}
// exportando a class do meus controllers
module.exports = Home