import { defaultEquals } from '../util/defaultEquals'
import { Node } from './models/linked-list-models'

export default class LinkedList {

    constructor(equalsFn = defaultEquals) {
        this.count = 0  // numero de elementos na lista
        this.head = undefined
        this.equalsFn = equalsFn
    }

    push(element){
        const node = new Node(element)
        let current;

        if(this.head == null) {
            this.head = node
        } else {
            current = this.head
            while( current.next !== null){
                // obtem o ultimo item
                current = current.next
            }
            // e atribui o novo elemento a next para criar a ligação
            current.next = node
        }
        this.count++
    }
}