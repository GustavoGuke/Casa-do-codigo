// Tipos de Function

// Por meio de declaração
function declarativa(){
    console.log('Function declaration')
}
declarativa()


// Por meio de expressão
const funcaoDeexpressao = function(){
    console.log('Function expression')
}
funcaoDeexpressao()



// Por meio de função construtor
function Cursos(plataforma, nome, prazo){
    this.plataforma = plataforma
    this.nome = nome
    this.prazo = prazo

}
const funcaoConstrutora = new Cursos('udemy', 'React', 2021)
console.log('Function construtor \n',funcaoConstrutora)