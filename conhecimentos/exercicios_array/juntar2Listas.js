//Crie duas listas com números aleatórios. Junte as duas lista em uma única lista. Obs: descartar os números repetidos.

const listaUm = [1,2,3,5,6,8,0]
const listaDois = [1,3,4,7,9,1]

const listaCompleta = listaUm.concat(listaDois)
const numUnico = [...new Set(listaCompleta)]
const ordemNum = numUnico.sort()
console.log(ordemNum);