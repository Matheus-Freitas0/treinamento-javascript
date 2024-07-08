//Vc trabalha em uma empresa de financiamento de carros. Para aprovar um financiamento, o valor da parcela não pode 
// comprometer mais que 30% do salário do cliente. Construa um sistema que recebe o valor da parcela do financiamento de 
// um carro e o salário do cliente que deseja comprar o carro. Com base na regra acima, o sistema deve informar se 
// o financiamento foi aprovado ou não.

function aprovacaoFinan(salario, valorCarro, parcelas) {
    const porcentagemPermitida = salario * 0.3;
    const valorParcela = valorCarro / parcelas
    console.log(porcentagemPermitida);
    console.log(valorParcela)
    if (valorParcela <= porcentagemPermitida) {
        console.log("Permitido financiamento!!!");
    } else {
        console.log("Financiamento negado!!!");
    }
}

aprovacaoFinan(5000, 35000, 24)
