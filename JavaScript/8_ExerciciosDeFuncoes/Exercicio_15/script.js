function sumEvenNumbers(numeros) {
  var soma = 0;
  for(var i = 0; i < numeros.length; i++) {
    if(numeros[i] % 2 === 0) {
      soma += numeros[i];
    }
  }
  return soma;
}