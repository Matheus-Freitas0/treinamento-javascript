//crie uma função que recebe um nome e exibe em tela se esse nome é um palìndromo.
// Palíndromo é uma palavra, frase ou número que permanece igual quando lida de trás para frente.

function identificarPalindromo(nome) {
    let nomeV1 = nome
    nomeV1 = nomeV1.split('').reverse().join("")
    if (nomeV1 == nome) {
        console.log(nome,'e', nomeV1, 'são um palíndromo ');
    }
    else{
        console.log(nome,'e',nomeV1, 'não são um palíndromo');
    }
}
identificarPalindromo("matheus")
