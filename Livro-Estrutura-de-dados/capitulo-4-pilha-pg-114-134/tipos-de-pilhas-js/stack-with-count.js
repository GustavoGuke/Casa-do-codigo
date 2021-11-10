class Stack {
    constructor(){
        this.items = {}
        this.count = 0
    }

    // incrementa
    pushi(elemento){
        this.items[this.count] = elemento
        this.count++
    }

    // tira
    popi(){
        if(this.isEmpyt()){ 
            return undefined
        }
        this.count--
        const result = this.items[this.count]
        delete this.items[this.count]

        return result
    }

    // mostra se esta vazio
    isEmpyt(){
        return this.count === 0
    }

    // tamanho
    size(){
        return this.count
    }

    // ultimo valor inserido
    peek(){
        if(this.isEmpyt()){ 
            return undefined
        }
        return this.items[this.count -1]
    }

    // limpar pilha
    clear(){
        this.items = {}
        this.count = 0
    }

    // retornar os valores em string
    toString(){
        if(this.isEmpyt()){
            return ''
        }
        let objString = `${this.items[0]}`
        for(let i = 1; i < this.count; i++){
            objString = `${objString},${this.items[i]}`
        }
        return objString
    }
}

let pilha = new Stack()
pilha.pushi(2)
pilha.pushi(5)
pilha.pushi(9)
console.log(pilha.toString())
console.log(Object.getOwnPropertyNames(pilha))
console.log(Object.keys(pilha))
console.log(pilha.items)
pilha.items[0]=7
console.log(pilha.toString())