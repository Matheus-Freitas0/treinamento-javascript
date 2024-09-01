//Escreva um algoritmo que recebe uma temperatura em celsius e 
// converta para Fahrenheit. Fórmula: celsius = 5 * (Fahrenheit - 32) / 9
function conversorFahrenheit(grausCelsius) {
    if (typeof(grausCelsius) === 'number') {
        const fahrenheit = grausCelsius * 9 / 5 + 32
        console.log(`${grausCelsius} graus celsius são equivalentes a ${fahrenheit} fahrenheit.`);
    } else {
        console.log("Isso não é um numero.");
    }
}
conversorFahrenheit(25)
