// Map é uma estrutura chave valor onde qualquer outra estrutura pode ser a chave
// map deixa o atributo privado
const items = new WeakMap()

class Stack {

    // operador hash deixa a propriedade privada es6
    //#teste
    constructor() {
        items.set(this, [])
        //this.#teste = 1
        
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

    toString(){
        let acc = ''
        let value = items.get(this)
        for(let i of value){
            acc += i
        }
        console.log(acc)
        //console.log(this.#teste)
    }
    isEmpty(){
        const value = items.get(this)
        return value.length === 0
    }

    //static metodo não visto nas instância da classe, chamado colocando o nome da classe+nome do metodo
    static testando(){
        console.log('teste')
    }
}

// const stack = new Stack()
// stack.push(2)
// stack.push(3)
// stack.push(310)
// stack.push(10)
// stack.peek()
// stack.pop()
// console.log(stack.size())
// console.log(stack.peek())
// //console.log('\n',stack.toString())
// stack.toString()
// Stack.testando()
// console.log(stack.teste)

module.exports = Stack