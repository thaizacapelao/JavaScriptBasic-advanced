function decrementacaoNumerosPares(num) {
    for (let i = num; i >= 0; i--) {
        if(i % 2 == 0) {
            console.log(i)
        }
    }
}

console.log(decrementacaoNumerosPares(15));
console.log(decrementacaoNumerosPares(83));
console.log(decrementacaoNumerosPares(46));