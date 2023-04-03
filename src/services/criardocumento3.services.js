//  Importação
const officegen = require('officegen');

// Criando a Class
    class geratordocumentos3{
        criamodelo3(res,req){
            // Pegando dado do formulario
            var  pretitulo =        req.body.titulo;
            var  pretextarea =      req.body.text2;
            var  namearquivo =      req.body.nomearquivo;
            var  colunavertical=    req.body.columnvertical;
            var  colunahorizontal = req.body.columnhorizontal;

            // Criando documetno do word em branco
            let  documento  = officegen('docx');

            // Colocando os dados dentro do documento em branco
            var titulo = documento.createP({align:'center'});
            // estilizando a o elemento
                titulo.addText(pretitulo,{
                border:'solid',
                borderSize:12,
                borderColor:'88CFF',
                font_size:35
                });

            var texto = documento.createP({align:'justify'});
            texto.addText(pretextarea,{underline:false,font_size:18});



                
            // Nomeando o arquvio 
            res.writeHead(200,{
            "Content-Type": "application/vnd.openxmlformats-officedocument.documentml.document",
            "Content-disposition":"attachment; filename = "+namearquivo+ '.doc'
            })

             // fazendo download do docsx
             documento.generate(res);

             
            
        }
          

    }


// exportando a class 
module.exports = geratordocumentos3;