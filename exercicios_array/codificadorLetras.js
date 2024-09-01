//crie uma função que recebe um texto. 
// Essa função deve substituir todas as ocorrências da letra "a" por "@".
const textPadrao = "Programação é a arte de instruir computadores para executar tarefas, criando soluções eficientes e inovadoras."
function codificarText(text) {
    let textNovo = []
    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i) == "a") {
            textNovo.push("@")
        } else {
            textNovo.push(text.charAt(i))
        }
    }
    return textNovo.join("")
}
console.log(codificarText(textPadrao));
