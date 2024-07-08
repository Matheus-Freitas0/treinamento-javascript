// // variaveis test
// let a = 10;
// console.log(a)

// const b = 20;
// console.log(b)

// // Object test
// let pessoa = {};
// {
// pessoa.nome = "Matheus"
// pessoa.sobrenome = "Freitas"
// pessoa.idade = "18 anos"
// pessoa["cor do olhos"] = "preto"
// pessoa.endereco = {};
// pessoa.endereco.rua = "Av. Otto Baumgart, 245"
// pessoa.endereco.bairro =  "Vila Guilherme"
// pessoa["endereco"]["cidade"] = "São Paulo - SP"
// pessoa["endereco"]["CEP"] =  "02049-000"
// }
// console.log(pessoa)

// // mostra o que a variavel contem 
// for(var propriedade in pessoa){
//     console.log(propriedade)
// }
// // delete pessoa.endereco
// // console.log(pessoa)


// // Juntar informações de texto com a variavel
// console.log (`Seu nome é --> ${pessoa.nome}, tem --> ${pessoa.idade}, seu endereço é --> ${pessoa.endereco.rua}`);

// //switch dia da semana
// const dia = new Date().getDay()

// console.log(dia)

// switch (dia) {

// case 0:
//     console.log("Hoje é domingo")
//     break;
// case 1:
//     console.log("Hoje é segunda")
//     break;
// case 2:
//     console.log("Hoje é terça")
//     break;
// case 3:
//     console.log("Hoje é quarta")
//     break;
// case 4:
//     console.log("Hoje é quinta")
//     break;
// case 5:
//     console.log("Hoje é sexta")
//     break;
// case 6:
//     console.log("Hoje é sabado")
//     break;
// default: 
//     console.log("Não sei q dia é hoje")
// }

// // Array test
// const jogos = [
//     "CS-GO", "Valorant", "LOL", "COD", "TFT" , "Rainbow-six" , "Dragon-ball" , "Mortal-kombat", "Fifa" , "Far-cry"
// ];

// // consultar o array
// jogos.valueOf();
// console.log(jogos.valueOf());
// // imprimir array na tela
// jogos.toString();
// // Tamanho do array (length é uma porpriedade então não usa parenteses)
// jogos.length;
// // Inserir novo elemento no final do array
// jogos.push("Fortnite");
// // Remover ultimo elemento do array
// jogos.pop();
// // Retirar elemento do incio 
// jogos.shift()
// // Adiciona elemento ao inicio 
// jogos.unshift("Mario bros")
// // Localizar elemento
// jogos.indexOf(1)
// // Remove elementos em uma posição (posição, quantidade que quer remover)
// jogos.splice(1,1)
// // Splice pode ser usado para substituir ou adicionar (posição, quantidade que quer remover, itens que vão ser adicionados)
// jogos.splice(1,2,"Minecraft", "Devour")
// // percorre o array, invocando uma função para cada elemento 
// jogos.forEach(function (elemento){
//      console.log(elemento);
// });
// // filtrando o array encontrando os que correspondem a ele
// jogos.filter
// // Verificar se todos os elementos são compativeis com a condição
// jogos.every 
// // Verificar se algum elemento é compativel com a condição
// jogos.some 
// // Mapear os elementos do array
// jogos.map
// // Acumula os elementos de um array (soma)
// jogos.reduce 
// // Juntar dois arrays (jogos.concat(elemento que quer juntar))
// jogos.concat()
// // Fatiar uma array (jogos.slice(inicio, um depois do indice))
// jogos.slice()
// // Inverter a ordem de um array original( altera o array)
// jogos.reverse()
// // Ordenar os elementos de um array (console.log(jogos.sort()) nomeia em ordem alfabetica)
// jogos.sort()
// // Adicionar um separador as strings do array
// jogos.join(";");
// // Encontra a primeira condição que a corresponda
// jogos.find;
// // mostra qual é a posição do elemento
// jogos.findIndex;
// Verificação de existência
// console.log(array.includes(20)); // true

// Remover quando a elementos iguais 
// new Set()

//// Function Simples
// function soma(a , b) {
//     return a + b;
// }
// console.log(soma 
//     (4 , 2)
// ) 

// const produto = {item:"Sapato", preco: 100};

// const valorImpostoA = function (preco) {
//     return preco * 0.1;
// }

// function valorImpostoB(preco) {
//     return preco * 0.2;
// }

// const calcularPreco = function (produto, valorImposto) {
//     return produto.preco + valorImposto(produto.preco);
// }

// console.log(calcularPreco(produto, valorImpostoA));
// console.log(calcularPreco(produto, valorImpostoB));

// // function fabrica
// const criarPessoa = function (nome, idade,numero,cpf,) {
//     return {
//         Nome: nome,
//         Idade: idade,
//         Numero: numero,
//         Cpf: cpf
//         };
//     };
// const pessoa1 = console.log(criarPessoa("Matheus", 23, 9783438212, "223-323-312-1"));
// const pessoa2 = console.log(criarPessoa("Larissa", 35, 9783438212, "223-323-312-1"));

// // fuction de contrução
// const CriarPessoa = function (nome, idade) {
//     this.nome = nome,
//     this.idade = idade
// }

// const Matheus = new CriarPessoa("Matheus", 18);
// console.log(Matheus);

// // arrow fuction
// const criarPessoa = (nome,idade) => {
//     return {
//         Nome:nome,
//         Idade:idade
//     }
// }
// console.log(criarPessoa("Matheus",18));
// console.log(criarPessoa("Larissa",19));

// // RegExp identificar numero
// const RegExp = /\(\d{2}\)\s\d{4,5}-?\d{4}/;
// let telefone = "(11) 94646-7247" 

// console.log(RegExp.exec(telefone));
// console.log(RegExp.test(telefone));

// // DATA E HORA
// const hoje = new Date()
// console.log(new Date());
// //contagem em milisegundos 
// console.log(hoje.getTime())  

// // receber o tempo em milisegundos 
// console.log(Date.parse ("12/25/2022"))

// // Verificar se esta na instancia da variavel

// const Pessoa = function(nome, idade) {
//     this.nome = nome,
//     this.idade = idade
// }
// const pedro = new Pessoa("Pedro", 22)
// console.log(pedro instanceof Pessoa);

// // Usar numero digitado no console 
// const numeroEntrada = process.argv.slice(2)
// const primeiroParametro = numeroEntrada[0]

// const numInteiro = parseInt(primeiroParametro)

