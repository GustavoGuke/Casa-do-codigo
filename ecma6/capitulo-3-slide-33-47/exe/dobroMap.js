/* escrver um array com numeros inteiro e usar o map para devolver o dobro do numeros */

var numeros = [10,20,30,40,50]
var n = []

// usando o for
for(var i = 0; i < numeros.length; i++){
    n.push(numeros[i] * 2) 
}

// metodo map
var dobro = numeros.map(function(numero){
    return numero * 2
})

console.log(dobro)
console.log(n)