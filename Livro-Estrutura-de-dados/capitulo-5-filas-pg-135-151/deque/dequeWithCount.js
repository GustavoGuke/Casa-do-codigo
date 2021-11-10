

// Deque entra e sai em ambos (entrada e saida)
class Deque {
    constructor() {
        this.count = 0,
            this.lowerCount = 0,
            this.items = {}
    }
    // entra na frente
    addFront(element) {
        if (this.isEmpty()) {
            this.addBack(element)
        }
        else if (this.lowerCount > 0) {
            this.lowerCount--
            this.items[this.lowerCount] = element
        }
        else {
            for( let i = this.count; i > 0; i--){
                this.items[i] = this.items[i - 1]
            }
            this.count++
            this.lowerCount = 0
            this.items[0] = element
        }
    }
    // entra no final
    addBack(element) {
        this.items[this.count] = element
        this.count++
    }
    // sai na frente
    dequeueFront() {
        if (this.isEmpty()) {
            return undefined
        }
        const result = this.items[this.lowerCount]
        delete this.items[this.lowerCount]
        this.lowerCount++
        return result
    }
    // sai no final
    dequeueBack(){
        if (this.isEmpty()) {
            return undefined
        }
        this.count--
        const result = this.items[this.count]
        delete this.items[this.count]
        return result
    }
    // primeira posição
    peek() {
        if (this.isEmpty()) {
            return undefined
        }
        return this.items[this.lowerCount]
    }
    // vazio
    isEmpty() {
        return this.count - this.lowerCount === 0
    }
    // size
    size() {
        return this.count - this.lowerCount
    }
    // retorna a fila
    toString() {
        if (this.isEmpty()) {
            return undefined
        }
        let objectString = `${this.items[this.lowerCount]}`
        for (let i = this.lowerCount + 1; i < this.count; i++) {
            objectString = `${objectString},${this.items[i]}`
        }
        return objectString
    }
    // limpa a fila
    clear() {
        this.items = {}
        this.count = 0
        this.lowerCount = 0
    }
}
module.exports = Deque


// const deque = new Deque()
// deque.addBack(2)
// deque.addBack(5)
// deque.addFront(1)

// deque.dequeueBack()
// deque.dequeueFront()

// deque.addFront(9)


// console.log(deque.peek())
// console.log(deque.toString())
// console.log(deque.size())
