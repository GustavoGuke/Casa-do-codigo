// Map é uma estrutura chave valor onde qualquer outra estrutura pode ser a chave
// map deixa o atributo privado
const items = new WeakMap()

class Stack {

    constructor() {
        items.set(this, [])
    }

    push(element){
        const newValue = items.get(this)
        newValue.push(element)
    }

    pop(){
        const newValue = items.get(this)
        const deleteValue = newValue.pop()
        return deleteValue
    }

    size(){
        const value = items.get(this)
        return value.length
    }

    peek(){
        const value = items.get(this)
        return value.slice(-1).join('')
    }

    isEmpty(){
        const value = items.get(this)
        return value.length === 0
    }
    toString(){
        let acc = ''
        let value = items.get(this)
        for(let i of value){
            acc += i
        }
        console.log(acc)   
    }
}

// transformar numero de decimal para binario 
function decimalToBinary(decNumber){

    const remStack = new Stack()
    let number = decNumber
    let rem 
    let binary = ''

    while( number > 0){
        rem = Math.floor(number % 2)
        remStack.push(rem)
        number = Math.floor(number / 2)
    }
   
    while( !remStack.isEmpty()){
        binary += remStack.pop().toString()
    }
    return binary
}
let resultado  = decimalToBinary(6)
console.log(resultado)


// transformar numero de binario para decimal
let resultadoBinToDec = binaryToDecimal(resultado)
console.log(resultadoBinToDec)
function binaryToDecimal(bin){
    let numDec = 0
    let arrayBin = []
    for (i of bin){
        arrayBin.push(i)
    }
    console.log(arrayBin.reverse())

    for(let i = 1; i < arrayBin.length; i++){
        numDec += parseInt(arrayBin[i] * 2) **i
    }
    return numDec
    
}