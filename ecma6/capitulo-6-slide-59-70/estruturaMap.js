// Map é uma estrutura chave valor onde qualquer outra estrutura pode ser a chave


var estruturaMap = new Map()
function funcao(){}
var obj = {}

// definir os valores com set
estruturaMap.set("string", "uma string")
estruturaMap.set(funcao, "uma função")
estruturaMap.set(obj, "um objeto")


// recuperar os valores com get através da chaves
console.log(estruturaMap.get("string"))
console.log(estruturaMap.get(funcao))
console.log(estruturaMap.get(obj))
console.log('\n')

// para saber o tamanho do Map usar size
console.log('Map Tamanho ',estruturaMap.size)
console.log('\n')

// para saber se uma chave ja existe usar o metodo has (true se existe e false se não existe)
console.log('Metodo has ',estruturaMap.has(funcao))
console.log('Metodo has ',estruturaMap.has("tt"))
console.log('\n')


// para deletar um item no Map usar o metodo delete
//estruturaMap.delete(funcao)
//console.log('Metodo delete usado para excluir a função =',estruturaMap.has(funcao))

// para limpar tds os itens usar o clear
//estruturaMap.clear()
//console.log('clear para limpar tudo = ',estruturaMap.size)


// MAP é iteravel então usamos o for..of

// object.keys para iterar sobre as chaves
for( var c of estruturaMap.keys()){
    console.log(c)
}
console.log('\n')

// iterar sobre os valores values()
for( var c of estruturaMap.values()){
    console.log(c)
}
console.log('\n')

// devolve um array
for( var c of estruturaMap.entries()){
    console.log(c[0])
}
console.log('\n')