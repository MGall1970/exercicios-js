function troca(vetor1,vetor2){
    let tamanho = vetor1.length

    if(vetor1.length != vetor2.length){
        console.log('Os vetores precisam ter tamanhos iguais!')
    } else {
        console.log('Recebi: ', vetor1, vetor2 )

        for(let index=0;index<tamanho;index++){
            vetor1.push( vetor2[index] )
            vetor2.push( vetor1[index] )
        }

        console.log( 'Adicionei: ', vetor1, vetor2 )

        for(let index=0;index<tamanho;index++){
            vetor1.shift()
            vetor2.shift()
        }

        console.log( 'Troquei: ', vetor1, vetor2 )
    }
}

troca([1,2,3],[4,5,6,7])
troca([1,2,3],[4,5,6])
