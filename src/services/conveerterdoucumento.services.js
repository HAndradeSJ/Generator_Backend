function  CreateDocument(nomearquivo){
        // Pegando Informação do formulario 
        var  pretitulo = document.getElementById('titulo').value;
        var  namearquivo = document.getElementById('nomearquivo').value;
        var  pretextarea = document.getElementById('desc').value;
    
        // criando as varias que armazenarão codigo default do html
        var titulo = `<h1>${pretitulo}</h1>`
        var desc = `<p>${pretextarea}</p>`
        var Abertura = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Gerator Word</title></head><body>"
        var fechamento = "</body></html>"
        var documento = Abertura +titulo+desc+fechamento;
    
        // covertendo html em word com blob
        var blob = new Blob([documento, {type: 'application/msword'}]);
    
        //  definindo a url do usuario 
        var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(documento);
    
        // Nomeando o arquivo do word colocando a extenção e tipo
        namearquivo = namearquivo?namearquivo +'.doc': 'document.doc';
    
        // Fazendo Download do arquivo
        var linkdownload = document.createElement('a');
        document.body.appendChild(linkdownload);
    
        // Condição de  reconhecimento do navegador
        if(navigator.msSaveOrOpenBlob){
            // recebendo o arquivo do word e o nome 
            navigator.msSaveOrOpenBlob(blob,namearquivo);
        }
        else{
            // definindo uma variavel para meu computador 
            linkdownload.href = url;
    
            // e mandando ele fazer download do arquivo quando clicar
            linkdownload.download = namearquivo;
            linkdownload.click();
        }
        // Removendo  o lind de donwload para não ficar fazendo donwload
        document.body.removeChild(linkdownload);
    }

    
// exportando função services 
export {CreateDocument};