//17 - crie uma função que recebe um texto e uma letra. Essa função 
// deve fazer a contagem de quantas vezes a letra aparece no texto.
function contadorLetras(texto,letra) {
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == letra) {
            contador++;
            }
}
    return contador;
}
console.log(contadorLetras("ola", "a"));
console.log(contadorLetras("ola", "o"));
console.log(contadorLetras("ola", "l"));
console.log(contadorLetras("ola", "z"));
