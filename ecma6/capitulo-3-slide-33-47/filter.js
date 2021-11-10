/* filter busca na lista algo de acordo com o criterio passado*/
var alunos = [
    {nome: 'joao',idade:17},
    {nome: 'gustavo',idade:26},
    {nome: 'gabriel',idade:10},
] 
var alunoMaior = []
var alunoMenor = []


// for simples para filtrar
for(var i = 0; i < alunos.length; i++){
    if(alunos[i].idade <=17){
        alunoMenor.push(alunos[i])
    }
}

for(var i = 0; i < alunos.length; i++){
    if(alunos[i].idade >=18){
        alunoMaior.push(alunos[i])
    }
}
console.log(alunoMaior)
console.log(alunoMenor)



// usando metodo filter
var maior = alunos.filter(function(aluno){
    return aluno.idade >= 18
})
var menor = alunos.filter(function(aluno){
    return aluno.idade <=17 
})


console.log(maior)
console.log(menor)
