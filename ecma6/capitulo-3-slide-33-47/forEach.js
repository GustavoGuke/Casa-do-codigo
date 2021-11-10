
/*
ForEach

for convencional 
let nomes = ['gustavo', 'joao', 'gabriel']
for(let i=0 ;i <nomes.length;i++){
    console.log(i,nomes[i])
}

ForEach
var nomes = ['gustavo', 'joao', 'gabriel']
nomes.forEach(function(nome){
    console.log(nome)
})

forEach em uma função
var nomes = ['gustavo', 'joao', 'gabriel']
function imprimieNome(nome){
    console.log(nome)
}
nomes.forEach(imprimieNome)



//ForEach processa a lista antes da primeira passada então 
// o push não irá aparecer 
var nomes = ['gustavo', 'joao', 'gabriel']
nomes.forEach(function(nome){
    nomes.push('lorena')
    console.log(nome)
})
console.log(nomes)
*/

var nomes = ['gustavo', 'joao', 'gabriel']
nomes.forEach(function(nome){
    console.log(nome)
})

