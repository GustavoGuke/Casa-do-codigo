// Sequencia de fibonacci

// exemplo do livro NÂO ENTENDIDO 
let fibonacci = []
fibonacci[1] = 1
fibonacci[2] = 2
for(let i = 3; i < 10; i++){  
    fibonacci[i] = fibonacci[i -1] + fibonacci[i -2]
}

for(let i =1; i < fibonacci.length; i++){
    console.log(fibonacci[i ])
}


// exemplo da internet ENTENDIDO implementado com desestruturação
let [ultimo, penultimo, soma] = [1, 0, ]
let resultado = []

for(let i=1; i < 20; i++){
    soma = penultimo + ultimo;
    [penultimo, ultimo] = [ultimo, soma];
    resultado.push(soma)
}
console.log(resultado)