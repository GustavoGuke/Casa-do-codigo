let numero = [5,3,8,1,10]

// ordenação de numeros
let n = numero.sort((a,b) => a - b)
//console.log(n)


// ordenação com string  locale compare
let nome = ['gustavo', 'Gustavo', 'ana', 'Ana']

let ordenar = nome.sort((a, b) =>  a.localeCompare(b))
//console.log(ordenar)



// ordenação em objetos

let brothers = [
    {nome: 'Glenda', age: 18},
    {nome: 'teio', age: 29},
    {nome: 'João', age: 10},
    {nome: 'Milena', age: 22},
]

// trazer do mais novo  para o mais velho  ordenar por idade
let age = brothers.sort((a,b) => a.age - b.age)
//console.log(age)


// ordenar pela letra do alfabeto
let name = brothers.sort((a,b) => a.nome.localeCompare(b.nome))
//console.log(name)


// teste retornar um novo array de brothers com tds nomes em minusculo
let names = brothers.map( newValores => {
    return { nome: newValores.nome.toLocaleLowerCase(), age: newValores.age}
})
console.log(names)
