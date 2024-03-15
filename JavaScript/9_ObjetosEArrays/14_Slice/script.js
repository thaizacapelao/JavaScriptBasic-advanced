let nums = [0,1,2,3,4,5,6,7,8,9];

console.log(nums.slice(4,5));
console.log(nums.slice(4,6)); // para pegar um só elemento é necessario passar dois
// parametros de numeros para ele, do contrario se só passar 1, no caso o "4"
// ele vai trazer todos os objetos do array depois do indice 4

console.log(nums.slice(2));

console.log(nums.slice(-2)); //usando numeros negativos começamos de tras para frente

console.log(nums.slice(3,-2)); // ele tira os dois ultimos no -2