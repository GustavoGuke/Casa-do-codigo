/*reduce faz um compilado da lista e me traz um unico elemento */

// exemplo sem o metodo

var n = [1,2,3,4,5]
var soma = 0

for(var i = 0; i < n.length; i++){
    soma = soma + n[i]
}
console.log(soma)


// metodo reduce
var resultado = n.reduce(function(somaa, numero){
    return somaa + numero
},0)
console.log(resultado)

// exemplo usando objeto

var alunos = [
    {nome: 'joao',idade:25},
    {nome: 'gustavo',idade:26},
    {nome: 'gabriel',idade:19},
] 

var nomes = alunos.reduce(function(arrayNomes, aluno){
    arrayNomes.push(aluno.nome)
    return arrayNomes
}, [])
console.log(nomes)


let arrayReduce = [2,2,2]

let res = arrayReduce.reduce((acumulador, valorAtual)=>{
    return acumulador + valorAtual
},0)

console.log(res)