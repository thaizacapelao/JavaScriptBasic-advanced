let num = 17;
let divisoes = 0;

for(let t = 1; t <= num; t++) {
    if(num % t == 0) {
        divisoes++;
    }
}

if(divisoes == 2) {
    console.log(`O número ${num} é primo`);
} else {
    console.log(`O número ${num} não é primo`);
}