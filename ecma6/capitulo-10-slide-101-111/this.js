// Funcionalidade do This em funcões


// this referencia ao proprio metodo
var obj = {
    meuContexto: function(){
        console.log(this)
    }
}
obj.meuContexto()


// Dentro da função anonima o This tem uma execução diferente
const equipe = {
    nome: 'Guerreiros Z',
    membros: ['Goku', 'Kuririn', 'Vegeta'],
    membrosDaEquipe: function(){
        const that = this // devemos declarar o this e receber seu valor 
        this.membros.forEach(function(membro){
            console.log(membro, 'é da raça ', that.nome) // e dps fazer uma gambiarra
        })
    }
}
//equipe.membrosDaEquipe()


// com arrow function o this funciona normalmente
const equipe2 = {
    nome: 'Clã Uchiha',
    membros: ['sasuke', 'sarada', 'itachi'],
    membrosDaEquipe: function(){ 
        this.membros.forEach(membro => {
            console.log(membro, 'é do ', this.nome)
        })
    }
}
//equipe2.membrosDaEquipe()



const versus = (e1,e2) => {
    console.log(e1.membros,'Versus', e2.membros)
    
}
versus(equipe,equipe2)
