// itera sobre um iteravel apenas se for realmente iteravel n~itera em objetos

var numero = [1,2,3,4,5]

//for normal

for(let i = 0; i <= numero.length; i++){
    console.log(numero[i])
}

// for..of..
for(j of numero){
    console.log(j)
    
}