// break para    continue pula

var numero = [1,2,3,4,5,6,7,8,9]

for(var i of numero){
    if(i > 2){
        break
    }
    console.log(i)
    
}

for(var i of numero){
    if(i % 2 == 0){
        continue
        // nao ira mostrar os numeros que tem resto igual a 0
    }
    console.log(i)
    
}
