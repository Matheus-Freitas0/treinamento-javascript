//crie uma lista de números e realize a soma de todos eles.

const listaNums = [12,32,54,76,12,43,21,543,3,2,1]

let soma = 0

for (let index = 0; index < listaNums.length; index++) {
    const linhaAtual = listaNums[index];
    soma += linhaAtual
}
console.log(soma);
