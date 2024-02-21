function countVowels(texto) {
  const contarVogais = texto.match(/[aeiouAEIOU]/g)
  return contarVogais ? contarVogais.length : 0;
}

console.log(countVowels("Ontem eu fui na Thaiza"))
console.log(countVowels(""))