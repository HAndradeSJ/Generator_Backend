//  Importação
 const documento = require('../models/documentos');
 async function criardocumentos(response,request){
        
    // inserindo dados na tabela documentos
    return (
          await documento.create({

                // colocar os dados do front_end

          }).then(result => res.status(200).send(result))
          .catch(err => res.status(500).send(err))
          
    )
 }




export default criardocumentos;