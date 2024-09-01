// EXERCICIO 
function converterPeso(peso, planeta) {
    const planet = planeta.toLowerCase()
    switch (planet) {
        case "mercurio":
            const mercurio = (peso / 100)* 0.37
            console.log(`No planeta ${planet} o peso é ${mercurio}`);
            break;
        case "venus":
            const venus = (peso / 100)* 0.88
            console.log(`No planeta ${planet} o peso é ${venus}`);
            break;
        case "marte":
            const marte = (peso / 100)* 0.38
            console.log(`No planeta ${planet} o peso é ${marte}`);
            break;
        case "jupiter":
            const jupiter = (peso / 100)* 2.64
            console.log(`No planeta ${planet} o peso é ${jupiter}`);
            break;
        case "saturno":
            const saturno = (peso / 100)* 1.15
            console.log(`No planeta ${planet} o peso é ${saturno}`);
            break;
        case "urano":
            const urano = (peso / 100)* 1.17
            console.log(`No planeta ${planet} o peso é ${urano}`);
            break;
        default:
            console.log("Planeta não identificado");
            break;
    }
    
}
converterPeso(2722, "Mercurio")