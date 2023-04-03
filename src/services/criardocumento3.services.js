//  Importação
const { request } = require('http');
const officegen = require('officegen');

// Criando a Class 
    class criarmodelo3{
      criarmodelo3(req,res){

          // pegando dados do formulario
          var  pretitulo   = req.body.titulo;
          var  namearquivo = req.body.nomearquivo;
          var  pretextarea = req.body.texts;
          var  colunavertical = req.body.colunavertical;
          var  colunahorizontal = req.body.colunahorizontal;

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

          //  inserindo a tabela 
          

        
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
module.exports = criarmodelo3;