let pessoa = {
    nome: 'Thaiza'
}

let pessoa2 = pessoa

console.log(pessoa == pessoa2); 

pessoa2.nome = 'Capelão';

console.log(pessoa.nome);