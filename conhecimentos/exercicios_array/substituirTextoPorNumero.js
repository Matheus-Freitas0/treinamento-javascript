//Crie uma função que recebe um texto e substitua todos os números encontrados pela 
// frase: “para ver o número você precisar ser um assinante do nosso serviço”.

const RegExp = /\d/g;
const texto = "O número 1 é o maior número do mundo, o número 2 é o segundo maior número do mundo, o número 3 é o terceiro maior número do mundo"
const textoSemNumeros = texto.replace(RegExp, "para ver o número você precisar ser um assinante do nosso serviço")
console.log(textoSemNumeros)

