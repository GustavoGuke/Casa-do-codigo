// Remove elementos de um array

let num = [1,2,3,4,5,6,7,8,9]


// removendo na ultima posição
//num.pop()

// remove na primeira posição
//num.shift()
//console.log(num)


// logica do metodo shift
let n = []
for( let i = 0; i < num.length; i++){
    
    num[i] = num[i + 1]
    if (num[i] !== undefined){
        n.push(num[i])
    }
}
console.log(n)
