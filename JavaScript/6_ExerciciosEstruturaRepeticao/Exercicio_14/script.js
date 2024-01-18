const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const semPares = [];

arr.forEach(numero => {
  if (numero % 2 !== 0) {
    semPares.push(numero);
  }
});