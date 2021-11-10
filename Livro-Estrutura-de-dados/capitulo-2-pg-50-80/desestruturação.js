// INICIA VARIAVEIS DE UMA SÓ VEZ

// declaração
let [x, y] = [2, 3]
console.log(x , y)



// troca de valores das variaveis
let a = 2;
let b = 3;
[a,b] = [b,a];
console.log(a,b)



// abreviação de propriedades
let [nome, sobreNome] = ['Gustavo', 'Lima']
let obj = {
    nome,
    sobreNome,
    printNome(){
        console.log(this.nome, this.sobreNome)
    }
}
obj.printNome()