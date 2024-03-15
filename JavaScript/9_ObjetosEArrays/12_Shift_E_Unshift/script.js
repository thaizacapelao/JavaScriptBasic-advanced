// Shift = inserir um elemento no array (NO COMEÇO DO ARRAY)
// Unshift = retirar um elemento no array (NO FINAL DO ARRAY)

let carros = ['Vovorola', 'Audi', 'BMW', 'Mercedes'];

let elementoRemovido = carros.shift();

console.log(elementoRemovido);
console.log(carros);

carros.unshift('Jeep');

console.log(carros);
console.log(carros[0]);