let banners = ['texto exemplo']
let bannerAtual = 0
let button = document.getElementById("btn")
let buttonPiscar = document.getElementById("btnPiscar")

function trocarBanner(){
    bannerAtual = (bannerAtual + 1) % 2 
    document.querySelector('h2#mensagem').textContent = banners[bannerAtual]
}

let tempo = setInterval(trocarBanner, 1000)

button.addEventListener('click', ()=> {
    clearInterval(tempo)
})

buttonPiscar.addEventListener('click', ()=> {
     tempo = setInterval(trocarBanner, 1000)
})