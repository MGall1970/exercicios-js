function mediaAritmetica(vetor){
    let total = 0
    for( let i=0; i<vetor.length; i++ ){
        total += vetor[i]
    }
    console.log( total/vetor.length )
}

mediaAritmetica( [ 5, 10, 15, 20 ] )