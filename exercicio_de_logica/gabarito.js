// // 1) Apresentação Pessoal
// let nome = "Matheus";
// let idade = 19;
// let comidaFavorita = "Pizza";

// console.log("Meu nome é",nome,", tenho" , idade , "anos e minha comida favorita é" , comidaFavorita,".");

// // 2) Classificação por Idade
// let idadePessoa = 20;

// if (idadePessoa < 13) {
//     console.log("Você é uma criança");
// } else if (idadePessoa >= 13 && idadePessoa <= 17) {
//     console.log("Você é um adolescente");
// } else if (idadePessoa >= 18 && idadePessoa <= 64) {
//     console.log("Você é um adulto");
// } else {
//     console.log("Você é um idoso");
// }

// // 3) Número Par ou Ímpar
// let numero = 7;

// if (numero % 2 == 0) {
//     console.log("O número" , numero , "é par.");
// } else {
//     console.log("O número" , numero , "é ímpar.");
// }

// // 4) Maior Número entre Três
// let num1 = 100, num2 = 25, num3 = 15;
// let maior;

// if (num1 > num2 && num1 > num3) {
//     maior = num1;
// }
// else if (num2 > num1 && num2 > num3) {
//     maior = num2;
// }
// else{
//     maior = num3
// }
// console.log("O maior numero é", maior);

// // 5) Pode Votar?
// let idadeVoto = 17;

// if (idadeVoto < 16) {
//     console.log("Você não pode votar.");
// } else if ((idadeVoto >= 16 && idadeVoto <= 17) || idadeVoto > 70) {
//     console.log("O voto é opcional.");
// } else {
//     console.log("O voto é obrigatório.");
// }

// // 6) Acesso ao Sistema
// let usuario = "admin";
// let senha = "1234";

// if (usuario == "admin" && senha == "1234") {
//     console.log("Acesso permitido.");
// } else {
//     console.log("Acesso negado.");
// }

// // 7) Número Positivo, Negativo ou Zero
// let numVerificar = -5;

// if (numVerificar > 0) {
//     console.log("O número é positivo.");
// } else if (numVerificar < 0) {
//     console.log("O número é negativo.");
// } else {
//     console.log("O número é zero.");
// }

// // 8) Pode Entrar na Festa?
// let idadeFesta = 22;

// if (idadeFesta >= 18 && idadeFesta <= 50) {
//     console.log("Pode entrar na festa.");
// } else {
//     console.log("Entrada negada.");
// }

// // 9) Dia Útil ou Final de Semana
// let diaSemana = 6;

// if (diaSemana >= 1 && diaSemana <= 5) {
//     console.log("É um dia útil.");
// } else if (diaSemana == 6 || diaSemana == 7) {
//     console.log("É final de semana.");
// } else {
//     console.log("Dia inválido.");
// }

// // 10) Maior Número sem Usar If (EXERCICIO EXTRA)
// let a = 21, b = 20;
// let maiorNumero = (a >= b) * a + (b > a) * b;

// console.log("O maior número é " + maiorNumero);

// Semana 2

// 1) Dia Útil ou Final de Semana

// function saberDiaSemana(diaSemana) {
//     if (diaSemana >= 1 && diaSemana <= 5) {
//         console.log("É um dia útil.");
//     } else if (diaSemana == 6 || diaSemana == 7) {
//         console.log("É final de semana.");
//     } else {
//         console.log("Dia inválido.");
//     }
// }

// saberDiaSemana(7)

// // 2) Financiamento de carros

// function aprovacaoFinan(salario, valorCarro, parcelas) {
//     const porcentagemPermitida = salario * 0.3;
//     const valorParcela = valorCarro / parcelas
//     console.log(porcentagemPermitida);
//     console.log(valorParcela)
//     if (valorParcela <= porcentagemPermitida) {
//         console.log("Permitido financiamento!!!");
//     } else {
//         console.log("Financiamento negado!!!");
//     }
// }

// aprovacaoFinan(5000, 35000, 24)

// // 3) Casa de câmbio

// const converterDolar = (valorProduto) =>{
//     if (typeof(valorProduto) === "number") {
//         const convReal = valorProduto * 5.80
//         console.log(`${convReal}`);
//     }
//     else {
//         console.log(`Valor invalido`);
//     }
// }
// converterDolar(1232)

// // 4) Conversão de Peso em Outros Planetas

// function converterPeso(peso, planeta) {
//     const planet = planeta.toLowerCase()
//     switch (planet) {
//         case "mercurio":
//             const mercurio = (peso)* 0.37
//             console.log(`No planeta ${planet} o peso é ${mercurio}`);
//             break;
//         case "venus":
//             const venus = (peso)* 0.88
//             console.log(`No planeta ${planet} o peso é ${venus}`);
//             break;
//         case "marte":
//             const marte = (peso)* 0.38
//             console.log(`No planeta ${planet} o peso é ${marte}`);
//             break;
//         case "jupiter":
//             const jupiter = (peso)* 2.64
//             console.log(`No planeta ${planet} o peso é ${jupiter}`);
//             break;
//         case "saturno":
//             const saturno = (peso)* 1.15
//             console.log(`No planeta ${planet} o peso é ${saturno}`);
//             break;
//         case "urano":
//             const urano = (peso)* 1.17
//             console.log(`No planeta ${planet} o peso é ${urano}`);
//             break;
//         default:
//             console.log("Planeta não identificado");
//             break;
//     }

// }
// converterPeso(2722, "Mercurio")

// 5) Números maiores que 10

// function maioresQue10(numero1,numero2,numero3,numero4,numero5) {

//     const sequenciaNumeros = [
//         numero1, numero2, numero3, numero4, numero5
//     ]

//     let total = 0

//     console.log('Numeros maiores que dez:');

//     for (let posicao = 0; posicao < sequenciaNumeros.length; posicao++) {

//         const numeroAtual = sequenciaNumeros[posicao];

//         if (numeroAtual > 10) {
//             total++
//             console.log(numeroAtual);
//         }

//     }

//     console.log(`Total de numeros maiores que dez: ${total}`);

// }

// maioresQue10(5,8,11,14,19)

// // 6) Média de Valores e Números Acima da Média

// function mediaDeValores(num1,num2,num3,num4,num5) {
//     const object = [num1,num2,num3,num4,num5];
//     console.log(object);
//     const somaTotal = num1 + num2 + num3 + num4 + num5
//     const mediaTotal = somaTotal / 5
//         console.log(`Média : ${mediaTotal}`);
//         console.log("Valores maiores que a média :");
//     for (let i = 0; i < object.length ; i++) {
//         const numAtual = object[i];
//         if (numAtual > mediaTotal) {
//             console.log(numAtual);
//         }
//     }
// }
// mediaDeValores(35,43,112,1,9)


// //Exercicio 1
// function maiorEMenor(array) {
//   let maior = array[0];
//   let menor = array[0];

//   for (let i = 1; i < array.length; i++) {
//       if (array[i] > maior) {
//           maior = array[i];
//       }
//       if (array[i] < menor) {
//           menor = array[i];
//       }
//   }

//   return { maior, menor };
// }

// console.log(maiorEMenor([5, 3, 9, 2, 8])); // { maior: 9, menor: 2 }
// console.log(maiorEMenor([12, 25, 7, 5, 1])); // { maior: 25, menor: 1 }

// //Exercicio 2
// function calculadora(num1, num2, operador) {
//   switch (operador) {
//       case "+":
//           return num1 + num2;
//       case "-":
//           return num1 - num2;
//       case "*":
//           return num1 * num2;
//       case "/":
//           if (num2 === 0) {
//               return "Erro: Divisão por zero!";
//           }
//           return num1 / num2;
//       default:
//           return "Operador inválido!";
//   }
// }

// console.log(calculadora(10, 5, "+")); // 15
// console.log(calculadora(10, 5, "-")); // 5
// console.log(calculadora(10, 5, "*")); // 50
// console.log(calculadora(10, 0, "/")); // Erro: Divisão por zero!
// console.log(calculadora(10, 5, "^")); // Operador inválido!


// // Exercicio 3
// function inverterString(str) {
//   let resultado = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//       resultado += str[i];
//   }
//   return resultado;
// }

// console.log(inverterString("JavaScript")); // "tpircSavaJ"
// console.log(inverterString("Hello World!")); // "!dlroW olleH"

// //Exercicio 4
// function numerosParesEntre(a, b) {
//   let pares = [];
//   for (let i = a; i <= b; i++) {
//       if (i % 2 === 0) {
//           pares.push(i);
//       }
//   }
//   return pares;
// }

// console.log(numerosParesEntre(1, 10)); // [2, 4, 6, 8, 10]
// console.log(numerosParesEntre(7, 14)); // [8, 10, 12, 14]
// console.log(numerosParesEntre(15, 20)); // [16, 18, 20]


// //Exercicio 5
// function fatorial(n) {
//   if (n === 0) return 1;
//   let resultado = 1;
//   for (let i = 1; i <= n; i++) {
//       resultado *= i;
//   }
//   return resultado;
// }

// console.log(fatorial(5)); // 120
// console.log(fatorial(0)); // 1
// console.log(fatorial(7)); // 5040


// function compararCombustiveis(gasolina, etanol) {
//     // Rendimento do etanol é 70% do rendimento da gasolina
//     const rendimentoEtanol = 0.70;

//     // Calcular o preço efetivo por rendimento
//     const precoEfetivoGasolina = gasolina;
//     const precoEfetivoEtanol = etanol / rendimentoEtanol;

//     // Comparar os preços efetivos
//     if (precoEfetivoEtanol < precoEfetivoGasolina) {
//         console.log("O etanol compensa mais.");
//     } else {
//         console.log("A gasolina compensa mais.");
//     }
// }

// // Exemplo de uso
// const precoGasolina = 5.50; // preço por litro da gasolina
// const precoEtanol = 1.90; // preço por litro do etanol

// compararCombustiveis(precoGasolina, precoEtanol);

// let gasolina = 5.40
// let etanol = 1.90
// let redimentoEtanol = 0.70
// function combustivel(etanol, gasolina) {
//     if (gasolina >= etanol / redimentoEtanol ) {
//         console.log(' o etanol compensa ');
   
//     } else{
//         console.log('gasolina compensa');
        
//     }    
    
// }
// combustivel(etanol,gasolina)

/*
    06. Exercicio:
    Receba o nome completo de uma 
    pessoa e coloque a primeira letra em maiusculo
*/

// function nomeComAPrimeiraLetraMaiuscula(nomeCompleto){

//     let primeiraLetraEmMaiusculo = true
//     let maiuscula = ''

//     for(let i = 0; i < nomeCompleto.length; i++){
//         let primeiraLetra = nomeCompleto.charAt(i)

//         if(primeiraLetraEmMaiusculo){
//             primeiraLetra = primeiraLetra.toLocaleUpperCase()

//         }
//         if(primeiraLetra == ' '){
//             primeiraLetraEmMaiusculo = true
//         }else{
//             primeiraLetraEmMaiusculo = false
//         }
//         maiuscula = maiuscula + primeiraLetra

//     }

//     console.log(maiuscula);
// }


// let nomeCompleto1 = 'matheus freitas'
// nomeComAPrimeiraLetraMaiuscula(nomeCompleto1)



// function nomeComAPrimeiraLetraMaiuscula(nomeCompleto) {
//     let resultado = '';
//     let maiuscula = true;
  
//     for (let i = 0; i < nomeCompleto.length; i++) {
//       let letra = nomeCompleto[i];
  
//       if (maiuscula && letra !== ' ') {
//         resultado += letra.toUpperCase();
//         maiuscula = false;
//       } else {
//         resultado += letra;
//       }
  
//       if (letra === ' ') {
//         maiuscula = true;
//       }
//     }
  
//     console.log(resultado);
//   }
// nomeComAPrimeiraLetraMaiuscula("ana beatriz da silva");  