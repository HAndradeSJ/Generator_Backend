
//  Importação
const officegen = require('officegen');

    class geratordocumentos1 {
      criarmodelo1(req,res){
        // pegando os dados do corpo 
        var  pretitulo =   req.body.titulo
        var  namearquivo = req.body.nomearquivo
        var  pretextarea = req.body.desc
        var  itemlista =   req.body.itemlista;

        // Genrando a lista
        var semilista = '\n'
        var contador = 1
        while (contador <=itemlista){
          semilista = semilista + 'item da lista'+'\n'
          contador = contador + 1
        }
        var plista = semilista +'\n'
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
        // estiliazando os componetes 
        var lista = documento.createP({align:'left'});
        lista.addText(plista,{font_size:17});

        var desc = documento.createP({align:'justify'});
        desc.addText(pretextarea,{underline:false,font_size:18});

        // Nomeando o arquvio 
        res.writeHead(200,{
          "Content-Type": "application/vnd.openxmlformats-officedocument.documentml.document",
          "Content-disposition":"attachment; filename = "+namearquivo+ '.doc'
        })
        // fazendo download do docsx
        documento.generate(res);
      }
  

 }

module.exports = geratordocumentos1;