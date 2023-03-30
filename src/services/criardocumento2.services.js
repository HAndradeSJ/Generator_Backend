    //  Importação
    const officegen = require('officegen');

    // Criando a class 
    class  geratordocumentos2{
        criarmodelo2(req,res){
            // pegando dados do formulario
            var  pretitulo   = req.body.titulo;
            var  namearquivo = req.body.nomearquivo;
            var  pretextarea = req.body.texst;
            var  substitulo  = req.body.subtitulo;
            var  texsubs     = req.body.textsubs

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

            var subtitulop = documento.createP({align:'center'});
                // estilazendo o elemento
                subtitulop.addText(substitulo,{
                    border:'solid',
                    borderSize:12,
                    borderColor:'88CFF',
                    font_size:20
                    });
            var textosub = documento.createP({align:'justify'});
            textosub.addText(texsubs,{undefined:false,font_size:18});

            
            // Nomeando o arquvio 
            res.writeHead(200,{
            "Content-Type": "application/vnd.openxmlformats-officedocument.documentml.document",
            "Content-disposition":"attachment; filename = "+namearquivo+ '.doc'
             })

            // fazendo download do docsx
             documento.generate(res);
        }

    }

    // exportação da minha class
    module.exports = geratordocumentos2;