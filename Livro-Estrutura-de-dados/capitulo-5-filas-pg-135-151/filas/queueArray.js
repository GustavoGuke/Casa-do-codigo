class Queue {
    constructor(){
        this.items = []
        this.lowerCount = 0
    }
    // entra 
    queuePush(element){
        this.items.push(element)
    }
    // sai
    queueShift(){
        if(this.isEmpty()){
            return undefined
        }
        this.items.shift()
    }
    // primeira posição
    peek(){
        if(this.isEmpty()){
            return undefined
        }
        return this.items[this.lowerCount]
    }
    // vazio
    isEmpty(){
        return this.items.length === 0
    }
    // tamanho
    size(){
        if(this.isEmpty()){
            return undefined
        }
        return this.items.length
    }
    // limpar
    clear(){
        return this.items = []
    }
    // retornar fila em string
    toString(){
        if(this.isEmpty()){
            return undefined
        }
        let filaString = ''
        for( let i of this.items){
            filaString += i
        }
        return filaString
    }
    // retornar fila em array
    toArray(){
        if(this.isEmpty()){
            return undefined
        }
        let filaArray = this.items
        console.log(filaArray)
    }

}
//module.exports = Queue

let fila = new Queue()
fila.queuePush(3)
fila.queuePush(39)
fila.queuePush(13)
fila.queuePush(53)
fila.queuePush(93)

// fila.queueShift()
fila.queueShift()
fila.queueShift()

 console.log(fila.peek())
 console.log(fila.toString())
// fila.toArray()
// console.log(fila.size())