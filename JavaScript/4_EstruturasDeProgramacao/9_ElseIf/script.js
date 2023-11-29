let nome = "Thaiza";
let idade = 26;

if (nome != undefined && nome == "Gabriel") {
    console.log("O nome está definido");
} else if (nome == "Thaiza" && nome.length > 5 && idade == 25) {
    console.log("O nome é Thaiza");
} else {
    console.log("Não é a Thaiza!");
}

//Teste para mostrar que a estrutura funciona apenas com else if

if(1 > 2) {
    console.log("teste");
} else if(1 == 1) {
    console.log("testando");
}