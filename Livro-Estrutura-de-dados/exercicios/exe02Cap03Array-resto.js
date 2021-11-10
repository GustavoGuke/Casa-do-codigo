// trazer true se o resto do numero for 0 sendo dividido por 2

let numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

function resto(n) {
    n.forEach(numero => {
        // operador ternário
        numero % 2 === 0 ? console.log(`${numero}: ${true}`) : console.log(`${numero}: ${false}`)
    })
}
resto(numero)



console.log('\n\n')
// refatoração
let res = x => x % 2 === 0 ? console.log(`${x}: ${true}`) : console.log(`${x}: ${false}`)
numero.forEach(res)




let vOrf = numero.filter( n => {
    return n % 2 === 0
})
console.log('\n\n')
console.log(vOrf)