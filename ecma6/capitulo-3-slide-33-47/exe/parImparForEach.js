/* Alterar codigo para o foreach */

var numeros = [1,2,3,4,5]
for(var i = 0; i < numeros.length; i++){
    if(numeros[i] % 2 === 0){
        console.log(i,numeros[i],'é par')
    }else{
        console.log(i,numeros[i],'é impar')
    }
}

// forEach
console.log('\n\n')
var number = numeros.forEach(function(parImpar){
    if(parImpar % 2 === 0){
        console.log(parImpar,'é par')
    }else{
        console.log(parImpar,'é impar')
    }
})