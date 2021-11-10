
const _items = Symbol('stackItems')
class Stack {
    constructor() {
        this[_items] = []
        
    }

    pushi(elemento){
        this[_items].push(elemento)
    }

    popi(){
        this[_items].pop()
    }

    peek(){
        //console.log(this.items.slice(-1).join(" "))
        console.log( this[_items][ this[_items].length -1 ])
    }

    isEmpyt(){
        console.log( this[_items].length === 0) 
    }

    clear(){
        // for (let i = this.items.length; i == this.items.length; i--){
        //     this.items.pop(this.items[i])
        // }
        console.log( this[_items] = [])
    }

    size(){
        console.log( this[_items].length)
    }
}
let pilha = new Stack

// add na ultima posição
pilha.pushi('teste')
pilha.pushi('teste3')
console.log(pilha[_items])
pilha.peek()
pilha.size()
pilha[_items][0] = 1
console.log(pilha[_items])