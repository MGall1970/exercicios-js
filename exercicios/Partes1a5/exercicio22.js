function jurosCompostos(mes,valor){
    let retorno = valor
    if(mes>1){ 
        retorno = valor * ( Math.pow( ( 1 + 0.05 ), mes ) ) 
    }
    return retorno 
}

console.log( jurosCompostos(1,100) )
console.log( jurosCompostos(2,100) )
console.log( jurosCompostos(3,100) )