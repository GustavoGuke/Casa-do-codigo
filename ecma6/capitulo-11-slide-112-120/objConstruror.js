// Palavra reservada NEW retorna um objeto literal


function Livro(titulo){
    this.titulo = titulo
}
// New cria um novo contexto de execução sendo assim
// ela cria um novo objeto não passando a referencia do outro
var livro = new Livro('ECMAscript 6')
var livro1 = new Livro('Estrutura de dados')
console.log(livro)
livro1.titulo = 'Node'
console.log(livro1)


// Objeto Literal

// declarção 
var livroObj = {
    titulo: 'Python'
}
// impressao
console.log(livroObj)
// passando a referencia do livroObj para outra variavel
var livroObj2 = livroObj
// ao mudar o seu conteudo ele mudara para a variavel livroObj 
// pq ele aponta para a variavel
livroObj2.titulo = 'Django'

// impressao
console.log(livroObj)
console.log(livroObj2)

// alterando a variavel livroobj tbm alterara a outra variavel que
// aponta para essa variavel.
livroObj.titulo = 'Python para redes'
console.log(livroObj)
console.log(livroObj2)