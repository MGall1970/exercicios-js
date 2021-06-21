function multiplica(vetor=[],multiplicador=1){
    let resultado=[]
    for( let index=0; index<vetor.length; index++ ){
        resultado.push( vetor[index] * multiplicador )
    }
    return resultado
}

function multiplicaSe( vetor, multiplicador ){
    let resultado=[]
    if(multiplicador==5){
        resultado = multiplica( vetor, multiplicador )
    } 
    return resultado
}

console.log( multiplica( [1,2,3,4,5], 2 ) )
console.log( multiplicaSe( [1,2,3,4,5], 1 ) )
console.log( multiplicaSe( [1,2,3,4,5], 5 ) )