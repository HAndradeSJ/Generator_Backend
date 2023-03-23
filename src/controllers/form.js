
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
   modelo2(params) {
    return (req,res)=> {
        res.render('modelo2',{title:'Modelo2',style:'modelo2.css'}); 
    }
   }
   modelo3(params) {
    return (req,res)=> {
        res.render('modelo3',{title:'Modelo3',style:'modelo3.css'}); 
    }
   }

   // controller de criar documento
   criarmodelo1(params){
    return (req,res)=> {
        res.send('rota post acessada com sucesso');
    }
   }
   criarmodelo2(params){
    return (req,res)=> {
        res.send('rota post acessada com sucesso');
    }
   }
   criarmodelo3(params){
    return (req,res)=> {
        res.send('rota post acessada com sucesso');
    }
   }

}

// exportando a class do meus controllers
module.exports = Home