let pessoa = {
    "nome": "Thaiza",
    "idade": 26,
    "peso": 58,
    "profissao": "Desenvolvedora",
    "hobbies": ["Jogar", "Sair", "Conversar"],
}

let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto);

//O Objeto pessoa vai todo se transformar em string não vai ser mais possivel uitlizar dessa fprma:

console.log(pessoaTexto.nome);

//dará undefined pois nao é mais um objeto, pessoaTexto se tornou o todo 


//Para virar um json novamente:

let pessoaJSON = JSON.parse(pessoaTexto);

console.log(pessoaJSON.hobbies[1]);