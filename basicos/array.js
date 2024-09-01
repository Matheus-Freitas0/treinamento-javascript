// lista de numeros
let list = [1, 2, 3, 4, 5]

// verificar o tamanho de uma lista
console.log(list.length);

// adicionar um elemento no final da lista
list.push(10)

// adicionar um elemento no inicio da lista
list.unshift(45)

// remover um elemento no final da lista
list.pop()

// remover um elemento do inicio da lista
list.shift()

for(let i = 0; i < list.length; i++) {
    console.log(`index: ${i} - valor: ${list[i]}`);
}

console.log(list);