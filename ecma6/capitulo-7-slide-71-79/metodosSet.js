var music = new Set()

// adiciona um valor, não salva valores repetidos
music.add("musica2")
music.add("musica1")
//music.add("musica26")

// deleta um valor
music.delete("musica1")

// apaga tudo
//music.clear()

for (let i of music){
    console.log(i)
}
console.log('*****************************************************')

// metodo has mostrara se a musica ja esta na lista
if(music.has("musica26")){
    console.log("Musica ja inserida na lista")
}else{
    console.log("Inserindo musica na lista")
    music.add("musica26")
}

for (let i of music){
    console.log(i)
}
console.log('*****************************************************')

// metodo size mostra o volume da lista
let myMusic = music.size
console.log('A lista tem ',myMusic,' musicas')