//EXERCICIO 

function categorizarNadador(idade){
    const idadeInt = parseInt(idade)
    if (idadeInt >=5, idadeInt <=7) {
        console.log("Categoria infantil A você tem", idadeInt,"anos");
    } else if (idadeInt >=8, idadeInt <=11) {   
    console.log("Categoria infatil B você tem", idadeInt,"anos");
    }   
    else if (idadeInt >=12, idadeInt <=13) {   
    console.log("Categoria juvenil B você tem", idadeInt,"anos");
    }   
    else if (idadeInt >=14, idadeInt <=17) {
    console.log("Categoria juvenil B você tem", idadeInt,"anos");
    }
    else{
        console.log("Categoria adulto você tem", idadeInt,"anos");
    }
}
categorizarNadador("11")
