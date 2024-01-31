function imprimirNumeroAleatorio(num) {
    return Math.floor(Math.random() * num) + 1;
}

console.log(imprimirNumeroAleatorio(5));
console.log(imprimirNumeroAleatorio(25));
console.log(imprimirNumeroAleatorio(50));

// Ele vai retornar numeros aleatórios ate o valor que eu definir
// ao invocar a função 