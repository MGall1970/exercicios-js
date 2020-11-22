function conceitos(notas){
    let retorno = []
    console.log('Recebi: ', notas )
    for(let index=0;index<notas.length;index++){
        if(notas[index]<=4.9){
            retorno.push('D')
        }else if(notas[index]>=5 && notas[index]<=6.9){
            retorno.push('C')
        }else if(notas[index]>=7 && notas[index]<=8.9){
            retorno.push('B')
        }else if(notas[index]>=9 && notas[index]<=10){
            retorno.push('A')
        }else{
            retorno.push('?')
        }
    }
    console.log( 'Conceitos: ', retorno )
}

conceitos([4.3,6.4,8,2,9.8,'Z'])
