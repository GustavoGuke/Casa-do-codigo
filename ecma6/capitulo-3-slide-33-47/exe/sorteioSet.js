let recebernumero = []
let semDuplicata = []


function sorte(){

    for (let i =1; i <= 5; i++){
        let numero = Math.round(Math.random()*10)
        recebernumero.push(numero)
        
    }
    return recebernumero
}

function tirarDubio(){
    let set = new Set(recebernumero)
    for(let j of set){
    semDuplicata.push(j)
    }
    return semDuplicata
}

let sort = sorte()
let td = tirarDubio()

console.log(sort)
console.log(td)



