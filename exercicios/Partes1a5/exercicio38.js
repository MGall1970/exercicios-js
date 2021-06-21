function impares(inicio=1,fim=100){
    let retorno=[]
    if(fim<inicio){
        let auxiliar = inicio
        inicio = fim
        fim = auxiliar
    }
    for(let index=inicio;index<=fim;index++){
        if( index%2 != 0 ){
            retorno.push(index)
        }
    }
    console.log( retorno )
}

impares(1,15)