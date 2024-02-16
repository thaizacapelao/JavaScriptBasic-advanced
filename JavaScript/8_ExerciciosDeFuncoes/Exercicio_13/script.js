function calculateAverage(numbers) {
    return numbers.length === 0 ? 0 : 
      numbers.reduce((sum, num) => sum + num, 0) /
      numbers.length;
  }

  function calcularMedia(numbers) {
    var soma;
    numbers.forEach((num) => soma = soma + num);

    return soma === 0 ? 0 : soma / numbers.length;
  }

  function calcularMediaFor(numbers) {
    var soma;

    for(let i = 0; i < numbers.length; i = i ) {
        let num = numbers[i];
        soma = soma + num;
    }

    return soma === 0 ? 0 : soma / numbers.length;
  }