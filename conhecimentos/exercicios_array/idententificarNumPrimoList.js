//crie uma lista de números inteiros positivos 
// e imprima na tela apenas os que são números primos.

const listRandow = [23,123,4765,867,543,2,6,8,90,7,13,5,17]
const listPrimo = []

for (let index = 0; index < listRandow.length; index++) {
    const itemAtual = listRandow[index];
    if (itemAtual == 2 || itemAtual == 3 ||  itemAtual == 5 ) {
    }
    else if (itemAtual % 2 == 0|| itemAtual % 3 == 0||itemAtual % 5 == 0) {
        }
    else{
        listPrimo.push(itemAtual)
        }
}
console.log(listPrimo);