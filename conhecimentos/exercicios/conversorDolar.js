// 19 - Sabendo o valor do dólar é de 5,50. Crie um algoritmo que recebe o valor de um produto em dólares e informe 
// quanto em reais é necessário para comprar o produto.

const converterDolar = (valorProduto) =>{
    if (typeof(valorProduto) === "number") {
        const convReal = valorProduto * 5.50
        console.log(`${convReal}`);
    } 
    else {
        console.log(`Valor invalido`);
    }
}
converterDolar(1232)