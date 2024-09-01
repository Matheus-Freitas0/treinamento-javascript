// toda string é imutável
let texto = 'Aula de String no javascript'

// length (para saber o tamanho de um texto)
console.log(texto.length);

// toLowercase (deixa tudo em minusculo)
console.log(texto.toLowerCase());

// toUpperCase (deixa tudo em maiusculo)
console.log(texto.toUpperCase());

// indexOf (retorno a posicao inicial do texto pesquisado)
// quando for -1, signifca que nao existe
console.log(texto.indexOf('banana'));
// 'Aula de String no javascript'
//  0123456789

if (texto.indexOf('Aula') > -1) {
    console.log('aula esta contida no texto');
}

// charAt (para pegar um character com base no posicao)
console.log(texto.charAt(0));

// replace (substitui o valor no texto)
console.log(texto.replace('javascript', 'java'));

// split (corta o texto no valor especificado)
console.log(texto.split(' '));

// percorrer um texto
console.log('--------------------------------------');
for (let index = 0; index < texto.length; index++) {
    console.log(texto.charAt(index));
}

// utilizado para extrair uma parte do texto.
// primeiro parametro: index inicial
// segundo parametro: index final
console.log('usando substring -> ', texto.substring(8, 14));
console.log('usando substring -> ', texto.substring(8));

console.log('startWith', texto.startsWith('Aula'));
console.log('endsWith', texto.endsWith('cript'));


// ordem lexicografica
const nome1 = 'edney'
console.log(nome1.localeCompare('caio'));
console.log(nome1.localeCompare('f'));
console.log(nome1.localeCompare('Jefferson'));