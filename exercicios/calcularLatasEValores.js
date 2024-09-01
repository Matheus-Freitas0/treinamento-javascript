// Exercicio 
function calcularLataPequena(metrosQuadrados) {
    let metrosQuadrados2 = parseInt(metrosQuadrados)
    let qtdLatasPequena = 0
    const metrosLataPequena = 6 * 3.6
    
    while ( metrosQuadrados2 >= qtdLatasPequena) {
        qtdLatasPequena++
        metrosQuadrados2 = metrosQuadrados2 - metrosLataPequena
    }
    if (metrosQuadrados2 > 0) {
        qtdLatasPequena++
    }
    console.log(`QTD latas Pequena: ${qtdLatasPequena} latas`);
}
function calcularLataGrande(metrosQuadrados) {
    let metrosQuadrados2 = parseInt(metrosQuadrados)
    let qtdLatasGrande = 0
    const metrosLataGrande = 6 * 18
    
    while ( metrosQuadrados2 >= metrosLataGrande) {
        qtdLatasGrande++
        metrosQuadrados2 = metrosQuadrados2 - metrosLataGrande
    }
    if (metrosQuadrados2 > 0) {
        qtdLatasGrande++
    }
    console.log(`QTD latas Grandes: ${qtdLatasGrande} latas`);
}
function main(metrosQuadrados) {
    const arealataGrande = 18 * 6
    const areaLataPequena = 3.6 * 6
    const area3LatasPequenas = areaLataPequena * 3
    let qtdLataGrande = 0
    let qtdLataPequena = 0 
    let areaPintarFolga = metrosQuadrados * 1.1

    while (areaPintarFolga > area3LatasPequenas) {
        qtdLataGrande++,
        areaPintarFolga = areaPintarFolga - arealataGrande
    }

    while (areaPintarFolga > 0 ) {
        qtdLataPequena++
        areaPintarFolga = areaPintarFolga - areaLataPequena
    }
    
    const valorTotal = (qtdLataGrande * 80) + (qtdLataPequena * 25)
    console.log("------ ORÇAMENTO APROXIMADO ------");
    console.log(`Latas grandes: ${qtdLataGrande}`);
    console.log(`Latas pequenas: ${qtdLataPequena}`);
    console.log(`TOTAL: R$ ${valorTotal.toFixed(2)}`);

}

main(645)