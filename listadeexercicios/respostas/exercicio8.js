function jogadas(anotacoes){
    let contador, maior=0, recorde=0, menor=999, pior=0
    let lances = anotacoes.split(' ')
    let tamanho = lances.length

    //console.log( lances )

    for( contador=0; contador<tamanho; contador++ ) {

        if( maior < parseInt( lances[contador] ) ){
            
            maior = parseInt( lances[contador] )
            
            if(contador>0){
                recorde++                    
            }   
        }
        
        if( menor > parseInt( lances[contador] ) ){

            menor = parseInt( lances[contador] )
            pior = contador                    
        }

        //console.log(contador,tamanho,maior,menor,recorde,pior)
    }
    
    return console.log( [recorde, (pior+1)] )
}

// ctrl+alt+n executa o programa
// ctrl+alt+m para o programa
jogadas('10 20 20 8 25 3 0 30 1')