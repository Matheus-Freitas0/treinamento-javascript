//crie uma função que recebe um nome e retorne o mesmo nome 
// sem as preposições: da, de, do, das e dos.
function removerPreposicoes(nome) {
    
    if (nome.includes("das")) {
        const nomev1 = nome.replace( "das", "").trim("")
        console.log(nomev1);
    }
    else if (nome.includes("da")) {
        const nomev1 = nome.replace( "da", "").trim("")
        console.log(nomev1);
    }
    else if (nome.includes("dos")) {
        const nomev1 = nome.replace( "dos", "").trim("")
        console.log(nomev1);
    }
    else if (nome.includes("do")) {
        const nomev1 = nome.replace( "do", "").trim("")
        console.log(nomev1);
    }
    else if (nome.includes("de")) {
        const nomev1 = nome.replace( "de", "").trim("")
        console.log(nomev1);
    }

    else{
        console.log('Não possui preposição');
    }
}


removerPreposicoes("Maria da Silva")