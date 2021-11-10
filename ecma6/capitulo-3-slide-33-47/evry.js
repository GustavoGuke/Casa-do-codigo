/* every traz um resultado booleano se todos elementos respeitam uma dada condição */
var pessoa = [
    {nome: 'joao',idade:25},
    {nome: 'gustavo',idade:26},
    {nome: 'gabriel',idade:9},
] 

// exemplo sem usar o metodo
var pessoaMaior = true

for(var i = 0; i < pessoa.length; i++){
    if(pessoa[i].idade <= 18){
        pessoaMaior = false
    }
}

// metodo every
var pMaior = pessoa.every(function(id){
    return id.idade >=18
})
console.log(pMaior)
console.log(pessoaMaior)