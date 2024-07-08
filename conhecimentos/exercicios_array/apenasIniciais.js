//crei uma função que recebe um nome e retorne as iniciais do mesmo. 
// Exemplo: Edney Ronan Roldao de Souza = ERRS (não considerar as proposições)

function editarFirstName(name) {
    let firstName = name.split(' ');
    const preposicoes = ["de","da","do","dos","das"]
    let inicias = " "
    for (let i = 0; i < firstName.length; i++) {
        if (!preposicoes.includes(firstName[i].toLowerCase())){
            let firstLetter = firstName[i].charAt(0).toUpperCase()
            inicias += firstLetter
        }
        }
    return inicias
}
console.log(editarFirstName("Edney Ronan Roldao de Souza"))
