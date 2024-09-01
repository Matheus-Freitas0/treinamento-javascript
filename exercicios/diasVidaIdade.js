// 20 - A partir da data atual e a data de nascimento de uma pessoa, determine a idade da pessoa e quantos dias ela 
// viveu. Obs: considere que todos os anos tiveram 365 dias.

function calcularIdade(dataNascimento = "") {
    const diaHoje = new Date()
    const token = dataNascimento.split("/")
    const ano = parseInt(token[2])
    const mes = parseInt(token[1]) - 1
    const dia = parseInt(token[0])
    const diaNascimento = new Date(ano, mes, dia)
    const diffData = diaHoje - diaNascimento
    const dataDias = diffData / (1000*60*60*24)
    const dias = dataDias.toFixed(0)
    const anos = dias / 365
    const anosT = anos.toFixed(2)
    console.log(token);
    console.log(dias, "dias de vida");
    console.log(anosT, "de idade ");
}

calcularIdade("14/08/2005")
