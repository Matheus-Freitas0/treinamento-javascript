// 17 - Pedir as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e exibir
// uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o aluno 
// é aprovado). Exibir também a média calculada.
function calcularMedia(nota1, nota2) {
    const media = (nota1 + nota2) / 2
    if (media >= 6) {
        console.log(`Esta aprovado com a média de: ${media}`);
    } else {
        console.log(`Esta reprovado com a média de: ${media}`);
    }
}
calcularMedia(9,6)
