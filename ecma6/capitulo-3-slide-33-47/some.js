/* some valida se pelo menos umas das condições satisfaz ele traz true*/

// exemplo sem o metodo
var pesoMalas = [12,32,21,29,3]
var malaAcimaDoPeso = false
for(var i = 0; i < pesoMalas.length; i++){
    if(pesoMalas[i] > 30){
        malaAcimaDoPeso = true
    }
}

// metodo some
var malaPesada = pesoMalas.some(function(peso){
    return peso < 5
})
console.log(malaAcimaDoPeso)
console.log(malaPesada)