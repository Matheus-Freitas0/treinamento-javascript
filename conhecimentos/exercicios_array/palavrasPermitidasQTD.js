// 15 - Você está criando um sistema que permite palavras entre 4 e 8 caracteres. 
// Crie um algoritmo que recebe um texto e faça a contagem de palavras válidas e 
// as inválidas.

function identificadorTamanhoPermitido(text) {
    let textV1 = text.toLowerCase().split(" ");
    let validas = 0
    let invalidas = 0

    textV1.forEach(palavra => {
        if (palavra.length >= 4 && palavra.length <= 8) {
            validas++
        } else {
            invalidas++
        }
    })
    console.log("Palavras validas:" , validas),
    console.log("Palavras invalidas:" , invalidas)
}
identificadorTamanhoPermitido("Programação é a arte de instruir computadores para executar tarefas, criando soluções eficientes e inovadoras.")
