//Escreva um script para entrar com 5 números e exibir a quantidade de números maiores que 10.

const sequenciaNum = [
    3,8,5,43,50
]

for (let i = 0; i < sequenciaNum.length; i++) {
    const numAtual = sequenciaNum[i];
    if (numAtual > 10) {
        console.log(numAtual);
    }
}