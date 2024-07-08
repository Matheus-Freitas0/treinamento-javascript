// Faça um algoritmo para ler: a descrição do produto (nome), a quantidade adquirida e o preço unitário.
// Calcular e escrever o total (total = quantidade adquirida * preço unitário), o desconto e o total a pagar (total
// a pagar = total - desconto), sabendo-se que:
// - Se quantidade <= 5 o desconto será de 2%
// - Se quantidade > 5 e quantidade <=10 o desconto será de 3%
// - Se quantidade > 10 o desconto será de 5%

function totalPagar(nome, quantidade, unitario) {
    const upperNome = nome.toUpperCase()
    const intQuant = parseInt(quantidade)
    const floatUnar = parseFloat(unitario)
    const porcMenor5 = 0.98
    const porcMenor10 = 0.97
    const porcMaior10 = 0.95
    const totalGeral = intQuant * floatUnar
    const objTotalPagar = {Produto : upperNome, quantidade : intQuant, ["Preço unitario"] : floatUnar}
    
    console.log(objTotalPagar);
    
    if (intQuant <= 5 ) {
        const totalF = totalGeral * porcMenor5
        const total = totalF.toFixed(2)
        console.log(`Valor a ser pago é ${total}`);
    }
    else if (intQuant > 5, intQuant <=10 ) {
        const totalF = totalGeral * porcMenor10
        const total = totalF.toFixed(2)
        console.log(`Valor a ser pago é ${total}`);
    }
    else if (intQuant > 10 ) {
        const totalF = totalGeral * porcMaior10
        const total = totalF.toFixed(2)
        console.log(`Valor a ser pago é ${total}`);
    }
    else{
        console.log("Variaveis não correspondentes");
    }
}
totalPagar("mouse", 11, 10)