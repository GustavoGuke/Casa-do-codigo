// arguments retorna o parametro de uma função em que ele não foi declarado


// exemplo simples
function arg(){
    const array = []
    for(let i = 0; i < arguments.length; i++){
        array.push(arguments[i])
    }
    return array
}

retorno = arg('teste 1', 'teste 2', 'teste 3')
//console.log(retorno)



// exemplo com obj
function pessoa(){
    const nome = arguments[0]
    const departamento = arguments[1]
    const qtd = arguments.length
    const carro = []

    for (let i = 0; i < qtd; i++){
        carro.push(arguments[i])
    }

    let obj = {
        nome,
        departamento,
        carro
    }
    return obj
    //return `${nome}, ${departamento}, ${carro}`
}

let p1 = pessoa('gustavo', 'TI', 'Weekend', 'palio')
console.log(p1)



// exemplo de soma
function soma(){
    let soma = 0

    for (let i = 0; i < arguments.length; i++){
        soma += arguments[i]
    }

    console.log(soma)
}
soma(1,2,3)