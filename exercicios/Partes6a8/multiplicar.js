function multiplicar(numero1, numero2){
    
    if( typeof(numero1)=='number' && typeof(numero2)=='number' && numero1>=0 && numero2>=0){
        
        let menor = numero1
        let maior = numero2
        let resultado = 0

        if( menor < numero2 ){ 
            menor = numero2
            maior = numero1 
         } 
                  
        for(let n=0;n<maior;n++){
            resultado += menor
        }

        console.log(resultado)
    } else {
        console.log('Informe números inteiros não negativo.')
    }
}

multiplicar( 5, 5 )
multiplicar( 0, 7 )
