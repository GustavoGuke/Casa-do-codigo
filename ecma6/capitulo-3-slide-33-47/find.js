/* Find funciona como o metodo filter */

// exemplo sem usar o metodo em array
var tv = ['record', 'sbt', 'band']
var tvLibertadores

for(var i =0; i < tv.length; i++){
    if(tv[i] == 'sbt'){
        tvLibertadores = tv[i]
    }
}
console.log(tvLibertadores)


// exemplo sem usar o metodo em objeto
var canais = [
    { tv: 'cultura'},
    { tv: 'gazeta'},
    { tv: 'redeTv'},
]
var canal = ''
for(var i = 0; i < canais.length; i++){
    if(canais[i].tv == 'cultura'){
        canal = canais[i]
    }
}
console.log(canal)

// metodo find
var channel = canais.find(function(cn){
   return cn.tv == 'gazeta'
})

var tV = tv.find(function(assistir){
    return assistir == 'sbt'
})
console.log(channel)
console.log(tV)