let data = new Date
let daysOfWeek = ['dom','seg','ter','qua','qui','sex','sab']
let n = []

// getDay traz o numero do dia começando por 0
console.log(daysOfWeek[data.getDay()])

/*
for( let i = 0; i < daysOfWeek.length; i++){
    
    daysOfWeek[i] = daysOfWeek[i +1]
    if (daysOfWeek[i] !== undefined){
        n.push(daysOfWeek[i])
    }
}
console.log(n)
*/

let dia = daysOfWeek.forEach( d => {
    n.push(d)
})
console.log(n)