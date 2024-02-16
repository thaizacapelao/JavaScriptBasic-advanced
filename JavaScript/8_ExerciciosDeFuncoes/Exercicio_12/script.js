function isPalindrome(palavra){
    var reverse = palavra.split('').reverse('').join('');
        if(palavra === reverse) {
            return true;
        } else {
            return false;
     }
}

/*
Quando você usa split(''), está dividindo a string em uma array onde cada caractere se torna um elemento dessa array.
ex: ['h', 'e', 'l', 'l', 'o']

Quando aplicado a uma array de caracteres, ele inverte a ordem dos caracteres.
ex: ['o', 'l', 'l', 'e', 'h']

O método join é utilizado para juntar todos os elementos de uma array em uma única string.
ex: 'olleh'
*/