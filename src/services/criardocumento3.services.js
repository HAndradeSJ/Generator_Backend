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
        
          var table = [
            [{
              val:`${colunahorizontal}`,
              opts: {
                cellColWidth:400,
                color:"white",
                align: "center",
                backgroundColor:"black",
                b:true,
                sz: '30',
                shd: {
                  fill: "black",
                  themeFill: "text1",
                  "themeFillTint": "100"
                },
                fontFamily: "Avenir Book"
              }
            },{
              val:`${colunahorizontal}`,
              opts: {
                b:true,
                color: "white",
                sz:'30',
                cellColWidth:400,
                backgroundColor:"black",
                align: "center",
                shd: {
                  fill: "black",
                  themeFill: "text1",
                  "themeFillTint": "100"  
                },
                fontFamily: "Avenir Book"
              }
            },{
              val:`${colunahorizontal}`,
              opts: {
                color:"white",
                align: "center",
                cellColWidth:300,
                backgroundColor:"black",
                b:true,
                sz: '30',
                shd: {
                  fill: "black",
                  themeFill: "text1",
                  "themeFillTint": "100"
                },
                fontFamily: "Avenir Book"
              }
            }],
            [`${colunavertical}`],
            [`${colunavertical}`],
            [`${colunavertical}`],
            [`${colunavertical}`],
            
          ]
          
          var tableStyle = {
            tableColWidth: 500,
            tableSize: 300,
            tableColor: "black",
            tableAlign: "center",
            spacingLine: 240, 
            spacingLineRule: 'atLeast', 
            indent: 100, 
            borders: true, 
            borderSize: 2, 
            columns: [{ width: 200 }, { width: 200 }, { width:200 }], 
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