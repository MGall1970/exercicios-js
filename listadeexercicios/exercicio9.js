function classifica(nota){
    
    let multiplo, diferenca

    if(nota>=38){
        
        for( let i=nota; i<=100; i++){
            if( i % 5 == 0 ){
                multiplo=i
                break
            }
        }

        diferenca = multiplo - nota
        if( diferenca<3 ){
            nota = multiplo
        } 
    }
    
    if(nota<40){
        console.log(`REPROVADO com ${nota}`)
    }else{
        console.log(`APROVADO com ${nota}`)
    }
    
}

classifica(84)
classifica(29)
classifica(38)
classifica(37)