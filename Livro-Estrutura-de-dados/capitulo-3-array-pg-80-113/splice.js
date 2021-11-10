// inserir e remover valor do array em qualquer posição

// altera o array original  caso não queira alterar o array usar o slice
let num = [1,2,3,4,5,6,7,8,9]


// remove um valor sendo o primeiro valor o indice apartir de
// segundo valor quantos valores serão removidos
num.splice(3,0,2)
console.log(num)

// inserindo um valor 
//num.splice(1,0,10,20)
//console.log(num)


// logica do metodo splice
// primeiro é o indice apartir de
// segundo o valor a ser removido (remover 2 valores splice(3, 2))
// terceiro o valor a ser inserido, sendo nesse o segundo valor igual a 0 para nao remover (split(3, 0, 3)) apartir do 3 acrescenta o valor 3