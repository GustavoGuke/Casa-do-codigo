// Conversão undeline para marcar atributo como private
class Stack {
    constructor(){
        this._items = {}
        this._count = 0
    }

    // incrementa
    pushi(elemento){
        this._items[this._count] = elemento
        this._count++
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
        let objString = `${this._items[0]}`
        for(let i = 1; i < this._count; i++){
            objString = `${objString},${this._items[i]}`
        }
        return objString
    }
}
let pilha = new Stack()
pilha.pushi(2)
console.log(pilha.toString())