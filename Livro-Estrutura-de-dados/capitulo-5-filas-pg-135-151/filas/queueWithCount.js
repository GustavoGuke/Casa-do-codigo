// fila primeiro a entrar primeiro a sair
class Queue {
    constructor(){
        this.count = 0,
        this.lowerCount = 0,
        this.countSize = 0
        this.items = {}
    }
    // entra
    enqueue(element){
        this.items[this.count] = element
        this.count++
        this.countSize++
    }
    // sai
    dequeue(){
        if( this.isEmpty()){
            return undefined
        }
        const result = this.items[this.lowerCount]
        delete this.items[this.lowerCount]
        this.lowerCount++
        this.countSize--
        return result
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
        return this.count - this.lowerCount === 0
    }
    // size
    size(){
        //return this.count - this.lowerCount  subtrair count por lowerCount outra opção
        return this.countSize
    }
    // retorna a fila
    toString(){
        if( this.isEmpty()){
            return undefined
        }
        let objectString = `${this.items[this.lowerCount]}`
        for (let i = this.lowerCount + 1; i < this.count; i++){
            objectString = `${objectString},${this.items[i]}`
        }
        return objectString
    }
    // limpa a fila
    clear(){
        this.items = {}
        this.count = 0
        this.lowerCount = 0
        this.countSize = 0
    }
}
module.exports = Queue
// let fila  = new Queue()
// fila.enqueue('john')
// fila.enqueue('jack')
// fila.enqueue('camila')

// fila.dequeue()
// fila.dequeue()

// console.log(fila.size())
// console.log(fila.toString())