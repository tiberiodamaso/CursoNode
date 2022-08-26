import chalk from 'chalk';
import fs from 'fs';


function trataErro(erro) {
    throw new Error(chalk.red(erro))
}

// SÍNCRONA
function pegaArquivoSincrono(caminhoDoArquivo){
    fs.readFile(caminhoDoArquivo, 'utf-8', (erro, data) => {
        if (erro) {
            trataErro(erro)
        }
        console.log(chalk.green(data))
    })
}

//ASSÍNCRONO COM PROMISES
function pegaArquivoAssincrono(caminhoDoArquivo){
    fs.promises
    .readFile(caminhoDoArquivo, 'utf-8')
    .then((dadosDoArquivo) => console.log(chalk.yellow(dadosDoArquivo)))
    .catch((erro) => trataErro(erro))
}

// ASSÍNCRONO COMO ASYN/AWAIT
async function pegaArquivoAssincronoAsyncAwait(caminhoDoArquivo){
    try {
        const texto = await fs.promises.readFile(caminhoDoArquivo, 'utf-8')
        console.log(chalk.magenta(texto))
    } catch (erro) {
        trataErro(erro);
    } finally {
        console.log('O programa finalizou a execução')
    }
}

pegaArquivoSincrono('./arquivos/texto1.md')
pegaArquivoAssincrono('./arquivos/texto1.md')
pegaArquivoAssincronoAsyncAwait('./arquivos/texto1.md')