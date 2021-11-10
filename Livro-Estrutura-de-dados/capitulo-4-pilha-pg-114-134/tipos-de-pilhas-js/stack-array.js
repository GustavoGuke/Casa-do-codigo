// criar uma classe e representar um pilha
// pilha: o ultimo a entrar éo primeiro a sair

class Stack {
    constructor() {
        this.items = []
    }

    pushi(elemento){
        this.items.push(elemento)
    }

    popi(){
        this.items.pop()
    }

    peek(){
        //console.log(this.items.slice(-1).join(" "))
        console.log(this.items[this.items.length -1 ])
    }

    isEmpyt(){
        console.log(this.items.length === 0) 
    }

    clear(){
        // for (let i = this.items.length; i == this.items.length; i--){
        //     this.items.pop(this.items[i])
        // }
        console.log(this.items = [])
    }

    size(){
        console.log(this.items.length)
    }
}

let pilha = new Stack

// add na ultima posição
pilha.pushi('teste')
pilha.pushi('teste2')
pilha.pushi('teste2')
pilha.pushi('teste4')

// remove na ultima posição
//pilha.popi()

// mostrar o ultimo elemento da lista
pilha.peek()

// // ver se esta vazia
setTimeout(()=> {
    pilha.isEmpyt()
    // tamanho 
    pilha.size()
},2000) 

// // remover tudo
// pilha.clear()

