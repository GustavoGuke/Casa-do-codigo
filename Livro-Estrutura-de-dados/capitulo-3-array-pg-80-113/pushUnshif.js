// metodo push e unshift

let num = []
num[1]= 1
num[2] = 2
num[0] = 4

// adiciona no final do array
num.push(5)
// adiciona no inicio do array
//num.unshift(3)
//console.log(num)


// logica do metodo push length percorre o array trazendo seu ultimo valor 
//num[num.length] = 6;


// logica do metodo unshift
// Array.prototype.inseriFirstPosition = function(value){

//     for (let i = this.length; i >= 0; i--){
//         console.log(this)
//         this[i] = this[i - 1];
//     }
//     this[0] = value;
// };

// num.inseriFirstPosition(3)

console.log(num)