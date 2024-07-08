//Ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles.
function maiorValor(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        const maior = num1
        console.log(`Maior numero é ${maior}`);
    } 
    else if (num2 > num1 && num2 > num3) {
        const maior = num2
        console.log(`Maior numero é ${maior}`);
    }
    else {
        const maior = num3
        console.log(`Maior numero é ${maior}`);
    }
}
maiorValor(123,2321,456)
