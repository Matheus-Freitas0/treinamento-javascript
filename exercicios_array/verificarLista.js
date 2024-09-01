//crie uma lista de marcas de carros, depois crie uma função que verifique se 
// uma determinada marca existe dentro da lista.

const listaMarcas = ['Ford', 'Chevrolet', 'Tesla', 'Dodge', 'Jeep',
    'BMW', 'Mercedes-Benz', 'Audi', 'Volkswagen', 'Volvo', 'Ferrari' ]

function encontrarMarca(marca) {
    const filtrarMarca = listaMarcas.includes(marca)    
    
    console.log(filtrarMarca);
}
encontrarMarca("Chevrolet")
