// serve para procurar no array se existe determinado objeto (basicamente achar uma agulha no paleiro)


let carros = ["BMW", "Mercedes", "Jeep", "Audi","VW", "Fiat"];

console.log(carros.includes("Jeep"));
console.log(carros.includes("Ford"));

if (carros.includes("Audi", "BMW", "Mercedes", "Jeep")) {
    console.log("Sou uma mulher feliz");
} else{
    console.log("Triste vida");
}