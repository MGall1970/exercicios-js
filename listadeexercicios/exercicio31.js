function haNegativos(vetor){
    let qtMenos = 0
    for( let i=0; i<vetor.length; i++){
        if(vetor[i]<0){
            qtMenos++
        }
    }
    console.log(`H� ${qtMenos} n�meros negativos.`)
}

haNegativos( [-10,-1,0,1,10] )