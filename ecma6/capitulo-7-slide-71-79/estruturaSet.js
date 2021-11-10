// SET é uma estrutura de dados que nos permite ter listas com valores que nunca se duplicam.

function Set() {
    var array = []

    //METODO adicionar um valor 
    this.add = function (valor) {
        //INDEXOF retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente.
        if (array.indexOf(valor) === -1) {
            array.push(valor)
        }
    }

    this.mostrarValores = function () {
        console.log(array)
    }
}

var set = new Set()
set.add(1)
set.add(2)
set.add(2)
set.mostrarValores()


// Estrutura SET
/*
var estruturaSet = new Set([3, 2, 3])
for (let valor of estruturaSet) {
    console.log(valor)
    // resultado 3,2
}*/


