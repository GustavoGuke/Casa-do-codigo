// melhorias do ES6 em Objetos Literais

var livro = {
    titulo: 'Estrutura de dados Js'
}
livro.autor = 'Loiane Groller'
livro['mostrarLivro'] = function(){
    console.log(this.titulo, this.autor)
}

livro.mostrarLivro()


// declaração de propriedades
const nome = 'Gustavo'
const sobreNome = 'Lima'
const pessoa = {
    nome, // obter o valor da variavel sem precisar usar  nome = nome
    sobreNome,
    mostrar(){ // usar função diretamente dentro objeto
        console.log(this.nome, this.sobreNome)
    }
}
pessoa.mostrar()

const apelido = "apelido";
const pessoas = {
    nome: 'José',
    [apelido]: 'zé',
    mostrarNome(){
        console.log(this[apelido])
    }
}
console.log(pessoas[apelido])
pessoas.mostrarNome()



