// 16 - Crie um algoritmo para receber um documento formatado. 
// Utilizando Regex, exibe em tela se o documento é RG, CPF ou CNPJ.
// formato RG: 11.111.111-1
// formato CPF: 111.111.111-11
// formato CNPJ: 11.111.111/1111-11
function identificadorDocumento(documento) {
    const rg = /^[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}-?[0-9]$/
    const cpf = /^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}-?[0-9]{2}$/
    const cnpj = /^[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/[0-9]{4}-?[0-9]{2}$/
    if (rg.test(documento)) {
        console.log(documento ,'Este documento é um RG');
        }
    else if(cpf.test(documento)){
        console.log(documento ,'Este documento é um CPF');
    }
    else if (cnpj.test(documento)){
        console.log(documento ,'Este documento é um CNPJ');
    }
    else{
        console.log(documento ,'Documento inválido');
    }
}
identificadorDocumento('11.111.111/1111-11');
