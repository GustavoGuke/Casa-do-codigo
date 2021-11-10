const queue = require('./queueWithCount')

function hotPotato(elementList, num){
    const fila  = new queue()
    const eliminatedList = []

    // preenche a fila
    for(let i = 0; i < elementList.length; i++){
        fila.enqueue(elementList[i])
    }
    // enquanto o tamanho da fila for maior que 1
    while( fila.size() > 1){

        // passo pela fila e enquanto o i for menor que num
        for( let i =0; i < num; i++){

            // incremento na frente da fila o meu ultimo valor
            fila.enqueue(fila.dequeue())
        }
        // joga os eliminiados em uma lista nova
        eliminatedList.push(fila.dequeue())
    }

    // retorno os eliminados e o vencedor
    // que no caso foi o ultimo
    return {
        eliminated: eliminatedList,
        winner: fila.dequeue()
    }
}

const names = ['jonh','jack', 'camila', 'Ingrid','carl']
const result = hotPotato(names,2)

result.eliminated.forEach(element => {
    console.log(`Eliminado ${element}`)
});
console.log(result.winner)