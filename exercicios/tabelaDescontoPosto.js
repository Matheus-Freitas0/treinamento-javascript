//Um posto está vendendo combustíveis com a seguinte tabela de descontos:

function calcularCombustiveis(litros, combustivel) {
    const numlitros = parseFloat(litros)
    const stringCombs = combustivel.toLowerCase()
    const valorAlcool = 2.90
    const valorGasolina = 3.30
    if (numlitros <= 20 && stringCombs === "alcool") {
        const descLitros = numlitros * (valorAlcool * 0.97)
        const descAlcool = descLitros.toFixed(2)
        console.log(`Valor a ser pago: ${descAlcool} reais`);
    }
    else if(numlitros >= 20 && stringCombs === "alcool"){
        const descLitros = numlitros * (valorAlcool * 0.95)
        const descAlcool = descLitros.toFixed(2)
        console.log(`Valor a ser pago: ${descAlcool} reais`);
    }
    else if(numlitros <= 20 && stringCombs === "gasolina"){
        const descLitros = numlitros * (valorGasolina * 0.96)
        const descAlcool = descLitros.toFixed(2)
        console.log(`Valor a ser pago: ${descAlcool} reais`);
    }
     else if(numlitros >= 20 && stringCombs === "gasolina"){
        const descLitros = numlitros * (valorGasolina * 0.94)
        const descAlcool = descLitros.toFixed(2)
        console.log(`Valor a ser pago: ${descAlcool} reais`);
    }
    else{
        console.log("ERROR, VARIAVEIS NÃO IDENTIFICADAS");
    }
}
calcularCombustiveis("20.5", "GaSoliNa")
