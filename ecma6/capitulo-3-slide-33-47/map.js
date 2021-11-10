/* Map itera a lista fazendo uma copia sem modificar a original */

//exemplo simples sem map

var numeros = [1,2,3]
var dobro = []

for(var i=0; i < numeros.length; i++){
    dobro.push(numeros[i] *2)
}

console.log(numeros)
console.log(dobro)


//usando o metodo map

var triplo = numeros.map(function(numero){
    return numero * 3
})

console.log(triplo)


// exercicios
var casal = ['homem', 'mulher']

function casamento(par){
    return par = ['pai', 'mae', 'filho']
}

var familia = casal.map(function(){
    return  ['pai', 'mae', 'filho', 'cachorro']
})

funcaoCasamento = casal.map(casamento)
console.log(casal)
console.log(funcaoCasamento[0])
console.log(familia[0])

