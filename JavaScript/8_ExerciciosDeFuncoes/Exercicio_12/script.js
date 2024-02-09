function isPalindrome(palavra){
    var reverse = palavra.split('').reverse('').join('');
        if(palavra === reverse) {
            return true;
        } else {
            return false;
     }
}