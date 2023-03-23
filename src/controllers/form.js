
// Defindo a class do meus controllers
class Home {
    
    // controller para renderizar a home
    renderhome(params) {
        return (req,res)=> {
            res.render('home',{title:'Home',style:'home.css'});
        }
   } 
   //controller para renderizar modelo
   modelo1(params) {
    return (req,res)=> {
        res.render('modelo1',{title:'Modelo1',style:'modelo1.css'}); 
    }
   }
   // controller de criar documento
   criarmodelo1(params){
    return (req,res)=> {
        res.send('rota post acessada com sucesso');
    }
   }

}

// exportando a class do meus controllers
module.exports = Home