
// Defindo a class do meus controllers
class Home {
    
    // controller para renderizar a home
    renderhome(params) {
        return (req,res)=> {
            res.render('home',{title:'Formulario',style:'home.css'});
        }
   } 
   //controller para criar documento
   criardocumento(params) {
    return (req,res)=> {
        
        
    }
   }
}
// exportando a class do meus controllers
module.exports = Home