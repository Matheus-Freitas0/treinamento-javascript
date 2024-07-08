// EXERCICIO 
function validadorCredito(salario) {
    if (salario <= 2000) {
        console.log(`Salario médio: ${salario}`);
        console.log("Percentual de crédito 0");
        console.log("Sem credito adicional");

    } 
    else if (salario >= 2000, salario <= 10000){
        const persentualMedio = salario * 0.2
        console.log(`Salario médio: ${salario}`);
        console.log("Percentual de crédito 20% ");
        console.log(`Valor de credito especial ${persentualMedio}`);
    }
    else if (salario >= 10000, salario <= 20000){
        const persentualMedio = salario * 0.3
        console.log(`Salario médio: ${salario}`);
        console.log("Percentual de crédito 30% ");
        console.log(`Valor de credito especial ${persentualMedio}`);
    }
    else{
        const persentualMedio = salario * 0.4
        console.log(`Salario médio: ${salario}`);
        console.log("Percentual de crédito 40% ");
        console.log(`Valor de credito especial ${persentualMedio}`);
    }
}
validadorCredito(2500)
