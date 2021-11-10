// concatena varios arrays em apenas um, não modifica os arrays originais
let letras = ['a', 'b', 'c']
let numeros = [1,2,3,]
let bool = [true, false]
let tudo = []

let res = tudo.concat(letras, numeros, bool)

console.log(res)
console.log(tudo)