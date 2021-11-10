// Operator Rest recebe um array com uma qtde indefinida de valores passados
// sintaxe para usa-lo é  ...argumento

function somar(...arry){
    let soma = 0
    for(let i = 0; i < arry.length; i++){
        soma += arry[i]
    }

    let soma2 = arry.reduce((acc, valor) => {
        return acc + valor
    },0)
    return soma
}
let soma1 = somar(2,3)
console.log(soma1)

/*

// Arrow function
soma = (...array) => {
    let soma = 0
    for(let i = 0; i < array.length; i++){
        soma += array[i]
    }
    console.log(soma)
}
soma(3,3)


// rest com reduce e arrow 
let restReduce = (mult, ...valores) =>{
    return valores.reduce((acc, va) => {
        return acc + (va * mult)
    },0)
}
console.log(restReduce(2, 1,2))


// destinguir letra de numero
let letraNumero = (...letraNumero) => {
    let letras = []
    let number = []
    

    for (let i = 0; i < letraNumero.length; i++){
        
        if (typeof(letraNumero[i]) == 'string'){
            letras.push(letraNumero[i])
        }else{
            number.push(letraNumero[i])
        }
    }

    return {letras, number}
}

let resultado = letraNumero(1,2,3, 'aaa', 'bb')

console.log(resultado)*/