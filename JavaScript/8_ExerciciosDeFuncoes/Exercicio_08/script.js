function limitarCaracteres(texto) {
    if(texto.length > 10) {
        console.log("Texto muito longo")
    } else {
        console.log("Texto dentro do limite")
    }
    console.log(texto.length); // receber a quantidade de letras no console
};


limitarCaracteres('Eu sou thaiza da Silva Capelão');
limitarCaracteres('Oi Thaiza')


// length serve no caso acima para limitar os caracteres