function classificarNumero(numero) {
  if (numero > 0) {
      return numero % 2 === 0 ? "Positivo e Par" : "Positivo e Ímpar";
  } else if (numero < 0) {
      return "Negativo";
  } else {
      return "Neutro";
  }
}