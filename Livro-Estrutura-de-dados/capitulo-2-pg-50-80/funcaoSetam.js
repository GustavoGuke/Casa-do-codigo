// Arrow Function
// função tradicional
var circleAreaEs5 = function circleArea(r){
    var PI = 3.14
    var area = PI * r * r
    return area
}
console.log(circleAreaEs5(3))



// Arrow Function
var arrowAreaPi = r => {
    var PI = 3.14
    var area = PI * r * r
    return area
}
console.log(arrowAreaPi(3))



// VALORES DEFAULT PARA PARAMETROS DE FUNÇÃO
var somar = (x=2, y=3, z=5) => x+y+z
console.log(somar())


