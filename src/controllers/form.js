const path = require('path');
const location = path.join(__dirname + '../views');
// Defindo a class do meus controllers
class Home {
    
    // controller para renderizar a home
    renderhome(params) {
        return (req,res)=> {
            res.sendfile(location +"home.html");
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