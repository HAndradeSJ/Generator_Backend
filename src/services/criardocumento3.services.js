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
          var table = [
            [{
              val: "No.",
              opts: {
                cellColWidth:200,
                b:true,
                sz: '48',
                spacingBefore: 120,
                spacingAfter: 120,
                spacingLine: 240,
                spacingLineRule: 'atLeast',
                shd: {
                  fill: "7F7F7F",
                  themeFill: "text1",
                  "themeFillTint": "80"
                },
                fontFamily: "Avenir Book"
              }
            },{
              val: "Title1",
              opts: {
                b:true,
                color: "A00000",
                align: "right",
                shd: {
                  fill: "92CDDC",
                  themeFill: "text1",
                  "themeFillTint": "80"
                }
              }
            },{
              val: "Title2",
              opts: {
                align: "center",
                vAlign: "center",
                cellColWidth: 42,
                b:true,
                sz: '48',
                shd: {
                  fill: "92CDDC",
                  themeFill: "text1",
                  "themeFillTint": "80"
                }
              }
            }],
            [1,``],
            [3,``],
            [4,``],
            [5,``],
            [6,``],
            [7,``],
          ]
          
          var tableStyle = {
            tableColWidth: 200,
            tableSize: 30,
            tableColor: "ada",
            tableAlign: "left",
            tableFontFamily: "Comic Sans MS",
            spacingBefor: 120, 
            spacingAfter: 120, 
            spacingLine: 240, 
            spacingLineRule: 'atLeast', 
            indent: 100, 
            fixedLayout: true,
            borders: true, 
            borderSize: 2, 
            columns: [{ width: 10 }, { width: 1 }, { width: 10 }], 
          }
          documento.createTable (table, tableStyle); 
        
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