// find traz o primeiro elemento encontrado

let brothers = [
    {nome: 'Milena', age: 22},
    {nome: 'Glenda', age: 18},
    {nome: 'teio', age: 29},
    {nome: 'João', age: 10},
    {nome: 'João2', age: 15},
]
// find
let cassula = brothers.find( p => p.age < 17 && p.nome.endsWith(`2`))
console.log(cassula)


// finIndex traz o index da minha condição
let maisVelho = brothers.findIndex( p => p.age > 27)
console.log(maisVelho)



// retornar maior idade
let maisVelhoReduce = brothers.reduce((acc, valor) => {
    if(acc.age >= valor.age) return acc
    return valor
}) 
console.log(maisVelhoReduce)