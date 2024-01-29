const soma = function(a, b) {
    return a + b;
}

console.log(soma(323, 54));

const saudacao = function(nome) {
    if( nome === "Thaiza") {
        return "Olá, Thaiza!";
    }
}

console.log(saudacao("Thaiza"));

function multiplicarTresNumeros(x, y, z) {
    return x * y * z;
}

console.log(multiplicarTresNumeros(4, 5, 6))

const mult = multiplicarTresNumeros(4, 5, 6);

console.log("O valor da multiplicação é " + mult);

function podeDirigir(idade, cnh) {
    if(idade >= 18 && cnh == true) {
        console.log("Pode dirigir"); 
    } else {
        console.log("Não pode dirigir");
    }
}

podeDirigir(19, true);
podeDirigir(16, false);
podeDirigir(20, 1);
podeDirigir(25, true);

// 1 = true    0 = false