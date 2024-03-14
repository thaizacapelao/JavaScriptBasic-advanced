let carro = {
    portas: 4,
    portaMalas: '200l',
    motor: '2.0'
}

let adicionais = {
    tetoSolar: true,
    arcondicionado: true,
}

console.log(carro);

Object.assign(carro, adicionais);

console.log(carro);