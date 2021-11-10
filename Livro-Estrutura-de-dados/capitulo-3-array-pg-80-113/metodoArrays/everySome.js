// Every traz false se houver uma condição falsa não importa se é apenas uma
// Some traz True não importa se é apenas uma

// array 
let number =  [2,8,6,1]

// arrowFunction
let isEven = x => x % 2 == 0


// every
console.log(number.every(isEven))

// some
console.log(number.some(isEven))