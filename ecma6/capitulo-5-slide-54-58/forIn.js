// itera sobre objetos trazendo os valores do nomes

var pessoa = {nome:'fulano',sobreNome: 'Detal'}

    

// for..in..
for(var j in pessoa){
    console.log(pessoa[j])
}


// object.keys para iterar sobre as chaves
for( var i of Object.keys(pessoa)){
    console.log(i)
}


// object.values com forEach  para iterar sobre os valores
Object.values(pessoa).forEach(function(p) {
    console.log(p)
});


// entries retorna um array de pares
Object.entries(pessoa).forEach(function(t) {
    console.log(t)
});
