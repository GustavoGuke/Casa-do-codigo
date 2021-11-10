// Capitulo sobre array detalhado

let daysOfWeek = ['dom','seg','ter','qua','qui','sex','sab']

// quantos elementos tem o array
console.log(daysOfWeek.length)


// percorrendo o array com função FOREACH
console.log('\npercorrendo o array com função FOREACH (traz os dados e o indice, menos codigo)')
daysOfWeek.forEach((days, i) =>{
    console.log(days,i+1)
})


// percorrendo array com FOR OF
console.log('\npercorrendo array com FOR OF (traz os dados)')
for(i of daysOfWeek){
    console.log(i)
}

// percorrendo array com FOR IN
console.log('\npercorrendo array com FOR IN (traz o indice)')
for(i in daysOfWeek){
    console.log(i)
}

// percorrendo array com FOR() tradicional
console.log('\npercorrendo array com FOR() tradicional')
for(let i = 0; i < daysOfWeek.length; i++){
    console.log(daysOfWeek[i], i+1)
}

