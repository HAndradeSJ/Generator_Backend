
// Defindo a class do meus controllers
class Home {
    
    // controller para renderizar a home
    renderhome(params) {
        return (req,res)=> {
            res.render('../views/home.ejs');
        }
   } 
        
    
   
}
// exportando a class do meus controllers
module.exports = Home