const Stack = require('../tipos-de-pilhas-js/stack-weakMap')

// const remStack = new Stack()
// Stack.testando()
// remStack.push(2)
// remStack.toString()

function baseConverter(dec, base){
    const stack = new Stack()
    const digitis = '0123456789ABCDEFGHIJKLMNOPQRSTUVWYXZ'

    let number = dec
    let rem 
    let baseString = ''

    if( !(base >= 2 && base <=36)){
        return ''
    }

    while(number > 0){
        rem = Math.floor(number % base)
        stack.push(rem)
        number = Math.floor(number / base)
    }

    while(!stack.isEmpty()){
        baseString += digitis[stack.pop()]
    }

    return baseString
}

let resultado = baseConverter(100345,35)
console.log(resultado)