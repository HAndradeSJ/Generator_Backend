
//  Importação
//  const documento = require('../models/documentos');
 const htmlDocx= require('html-docx-js');
    class geratordocumentos{
      criarmodelo1(){
        var  pretitulo = req.body.titulo
        var  namearquivo = req.body.nomearquivo
        var  pretextarea = req.body.desc
        var  itemlista = req.body.itemlista

        var semilista = '<ul>'
        var contador = 1
        while(contador<=itemlista){
         semilista= semilista + `<li>item</li>`
         contador = contador + 1
        }
        lista= semilista + '</ul>'
    
        var titulo = `<h1>${pretitulo}</h1>`
        var desc = `<p>${pretextarea}</p>`
        var Abertura = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Gerator Word</title></head><body>"
        var fechamento = "</body></html>"
        var documento = Abertura +titulo+lista+desc+fechamento;

        const docx = htmlDocx.asBlob(documento);

        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Content-Disposition', `attachment; filename=${ sluggify(namearquivo) }.docx`);
        res.setHeader('Content-Length', docx.length);
        res.send(docx);

      }
    
 }

  
        

    
 

module.exports = geratordocumentos;