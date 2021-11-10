var bruxos = ['harry Potter', 'hermione', 'rony']

var iteradorBruxos = bruxos[Symbol.iterator]()

/*
console.log(iteradorBruxos.next())
console.log(iteradorBruxos.next())
console.log(iteradorBruxos.next())
console.log(iteradorBruxos.next())
*/

for (var i = 0; i <= bruxos.length;i++){
    console.log(iteradorBruxos.next())
}



