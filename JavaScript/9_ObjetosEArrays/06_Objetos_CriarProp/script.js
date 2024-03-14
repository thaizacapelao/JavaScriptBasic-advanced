let pessoa = {
    nome: "Thaiza",
    idade: 26,
    profissao: "Programadora"
}

console.log(pessoa.nome, pessoa.idade, pessoa.profissao);

delete pessoa.nome;

console.log(pessoa.nome);

console.log(pessoa);

pessoa.casado = true; //adicionar é mais utilizado que o delete

console.log(pessoa.casado);