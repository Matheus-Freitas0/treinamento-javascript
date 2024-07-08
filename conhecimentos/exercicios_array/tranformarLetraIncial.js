//crie uma função que recebe uma string e transforme a letra inicial de cada palavras em
//  maiúsculo e as subsequentes em minúsculo.
const text = "texto de teste PRINCIPAL"
function tranformarMax(string) {
    let textLower = string.toLowerCase().split(" ");
    for (let i = 0; i < textLower.length; i++) {
        textLower[i] = textLower[i].charAt(0).toUpperCase() + textLower[i].slice(1)
    }
    return textLower.join(" ")
}
const textFinal = tranformarMax(text)
console.log(textFinal);
