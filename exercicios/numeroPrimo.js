//Receba um numero, verifique se é um numero primo. Exibir resultado no console.

function numeroPrimo(numero) {
    const numeroInt = parseInt(numero)
    if (numeroInt == 2 || numeroInt == 3 ||  numeroInt == 5 ) {
        console.log(`O numero ${numeroInt} é primo!!!`);
    }
    else if (numeroInt % 2 == 0|| numeroInt % 3 == 0||numeroInt % 5 == 0) {
        console.log(`O numero ${numeroInt} não é primo!!!`);
    }
    else{
        console.log(`O numero ${numeroInt} é primo!!!`);
    }
}

numeroPrimo(11.37373)
