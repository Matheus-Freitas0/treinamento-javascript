//Ler 3 valores (considere que não serão informados valores iguais) e escrever a soma dos 2 maiores.
function somaMaiores(num1, num2, num3) {
    if (num1 > num2 && num3 > num2 ) {
        const soma = num1 + num3
        console.log(`Soma dos maiores numeros são ${soma}`);
}
    else if (num2 > num1 && num3 > num1) {
        const soma = num3 + num2
        console.log(`Soma dos maiores numeros são ${soma}`);
        }
    else{
        const soma = num1 + num2
        console.log(`Soma dos maiores numeros são ${soma}`)
    }
}
somaMaiores(23,231,123)