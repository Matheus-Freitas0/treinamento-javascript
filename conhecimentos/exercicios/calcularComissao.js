// 18 - Pedir o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que ele 
// recebe uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que ultrapassar este valor, 
// calcular e escrever o seu salário total.

const calcularSalario = (salariofixo, vendas) => {
    const floatVendas = parseFloat(vendas)
    const floarSalario = parseInt(salariofixo)
    if (floatVendas <= 1500) {
        const comissao = floatVendas * 0.03
        const salarioTotal = floarSalario + comissao
        console.log(salarioTotal);
    } else {
        const comissao = floatVendas * 0.05
        const salarioTotal = floarSalario + comissao
        console.log(salarioTotal);
    }
}
calcularSalario(1500, 1501)