//crie uma lista de números de 0 até 20.
// Separe os números ímpares dos pares para outras listas.
const listaNums = [16,344,614,895,1745,5232,87,18,30,564,967,77423,67,100634,76575,586789,23,71,88,69]

let listaPar = []
let listaImpar = []

for (let index = 0; index < listaNums.length; index++) {
    const itemAtual = listaNums[index];
    if (itemAtual % 2 == 0) {
        listaPar.push(itemAtual)
    }
    else{
        listaImpar.push(itemAtual)
    }
}
console.log(listaPar);
console.log(listaImpar);