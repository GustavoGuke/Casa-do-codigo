// filter itera o array e busca a condição verdadeira ou falsa depende do que esta
// sendo buscado no array e traz um novo array com os dados buscados


// array 
let number = [2,8,6,1]

// arrowFunction
let isEven = x => x % 2 == 0

// filter
let myFilter = number.filter(isEven)
console.log(myFilter)

// filter com map
let myMap = number.map(isEven).filter( n => {
    return n === true
})
console.log(myMap)