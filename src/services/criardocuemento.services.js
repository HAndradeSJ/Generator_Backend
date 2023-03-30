
//  Importação
const https = require('http');
const officegen = require('officegen');
const fs = require('fs');

    class geratordocumentos {
      criarmodelo1(req,res){
        // pegando os dados do corpo 
        var  pretitulo = req.body.titulo
        var  namearquivo = req.body.nomearquivo
        var  pretextarea = req.body.desc
        var  itemlista = req.body.itemlista;

        // Genrando a lista
        var semilista = '/n'
        var contador = 1
        while (contador <=itemlista){
          semilista = semilista + 'item'+'/n'
          contador = contador + 1
        }
        var plista = semilista + '/n'
        // Criando documetno do word em branco
        let  documento  = officegen('documento');

        // Colocando os dados dentro do documento em branco
        var titulo = documento.createP({align:'center'});
          // estilizando a o elemento
          titulo.addText(pretitulo,{
            border:'solid',
            borderSize: 12,
            borderColor:'88CFF'
          });

        var lista = documento.createP({align:'left'});
        lista.addText(plista,{bold:true,underline:true});

        var desc = documento.createP({align:'justify'});
        desc.addText(pretextarea,{bold:true,underline:true});

        // Nomeando o arquvio 
        res.writeHead(200,{
          "content-type": "application/vnd.openxmlformats-officedocument.documentml.document",
          "content-disposition": "attachment; filename = " + namearquivo
        })
        // fazendo download do docsx
        documento.generate(res);


      }
  

 }

module.exports = geratordocumentos;