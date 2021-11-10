// fazer um parametro de função ser obrigatorio
function parametroObrigatorio(param){
    throw new Error (`O parametro  da função é obrigatorio`)
}
function inserir(obejto = parametroObrigatorio('objeto')){
    console.log(obejto)
} 
inserir()