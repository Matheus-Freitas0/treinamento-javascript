//Escrever um script que peça cinco valores inteiros, calcular a sua média, e escrever na tela
// os números que são superiores à média.

function mediaDeValores(num1,num2,num3,num4,num5) {
    const object = [num1,num2,num3,num4,num5];
    console.log(object);
    const somaTotal = num1 + num2 + num3 + num4 + num5
    const mediaTotal = somaTotal / 5
        console.log(`Média : ${mediaTotal}`);
        console.log("Valores maiores que a média :");
    for (let i = 0; i < object.length ; i++) {
        const numAtual = object[i];
        if (numAtual > mediaTotal) {
            console.log(numAtual);
        }
    }
}
mediaDeValores(35,43,112,1,9)
