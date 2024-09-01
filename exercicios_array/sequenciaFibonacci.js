//crie um algoritmo para montar uma lista com a sequência de Fibonacci até o número 1000.
function calcularFibonacci() {
    
let fibonacci = [0 , 1]

while (true) {
    let proximoNumero = fibonacci[fibonacci.length -1] + fibonacci[fibonacci.length - 2];
    
    if (proximoNumero > 1000) {
        break
    }
    fibonacci.push(proximoNumero)
}
    return fibonacci
}

const sequencia = calcularFibonacci()
console.log(sequencia);
