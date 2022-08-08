const axios = require('axios');
const XLSX = require('xlsx')

async function buscarDadosApi() {
    const response = await axios.get('https://api.github.com/users');
    const teste = response.data;
    return teste
}
buscarDadosApi().then(dados => {
    
    const covertJsonToExcel=()=>{

        const workSheet=XLSX.utils.json_to_sheet(dados)   //CRIA PLANILHA
        const workBook=XLSX.utils.book_new();               //CRIA PASTA ONDE CONTERÁ A PLANILHA
    
        XLSX.utils.book_append_sheet(workBook,workSheet, "dados")     //ASSOCIA A PLANILHA A PASTA
        
        /* GENERATE BUFFER */     XLSX.write(workBook,{bookType:"xlsx", type:"buffer"})
        /* BINARY STRING */       XLSX.write(workBook,{bookType:"xlsx", type:"binary"}) 
    
        XLSX.writeFile(workBook,"jsonToExcel-"+ Math.floor(Math.random() * 10000000 + 1) +".xlsx")    //BAIXA O ARQUIVO PARA A MÁQUINA
                                             // 🔺 SERVE PARA GERAR NÚMEROS ALEATÓRIOS ASSIM NAO IMPEDE A GERAÇÃO DE MAIS DE UM ARQUIVO POR NOME IGUAL
    }
    
    covertJsonToExcel()

  });


