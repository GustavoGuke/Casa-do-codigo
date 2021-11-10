// include devolve true ou falso ao buscar um elemento no array

let brothers = [
    { nome: 'Milena', age: 22 },
    { nome: 'Glenda', age: 18 },
    { nome: 'teio', age: 29 },
    { nome: 'joão', age: 10 },
    { nome: 'João', age: 15 },
]

let procurarPorIrmao = (nomes, fn) => {
    let nomeMinusculo = fn.sort((a, b) => a.nome.localeCompare(b.nome))
    console.log(nomeMinusculo)

    nomeMinusculo.forEach(nome => {
        if (nome.nome.toLowerCase().includes(nomes.toLowerCase())) {
            console.log(nome.nome, nome.age)
        }
    })
}
procurarPorIrmao('j', brothers)

let teste = 'texto'
console.log(teste.includes('ext')?teste:false)