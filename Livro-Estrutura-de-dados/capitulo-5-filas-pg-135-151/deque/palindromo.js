const deque = require("./dequeWithCount")

function palindromoCheck(aString){ 
    if( aString === undefined || aString === null || (aString !== null && aString.length === 0) || typeof aString === "number"){
        return false
    } // 1

    const filaDeque = new deque() // 2
    const lowerString = aString.toLocaleLowerCase().split('').join('') // 3
    let isEqual = true
    let firstChar, lastChar
    console.log(lowerString)
    

    for(let i = 0; i < lowerString.length; i++){
        filaDeque.addBack(lowerString.charAt(i))
    } // 4
    console.log(filaDeque.toString())

    while( filaDeque.size() > 1 && isEqual){ // 5
        firstChar = filaDeque.dequeueFront() // 6
        lastChar = filaDeque.dequeueBack()   // 7

        if( firstChar !== lastChar){
            isEqual = false
        }  // 8
    }
    return isEqual

}

console.log(palindromoCheck('racecar'))