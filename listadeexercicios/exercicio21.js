function valorAPagar( idade ){
    let valorInicial = 100
    let valorFinal = 0
    let adicional = 0

    if( idade<10 ){
        adicional = 80
    }else if( idade>=10 && idade<=30 ){
        adicional = 50
    }else if( idade>30 && idade<=60){
        adicional = 95
    }else if( idade>60){
        adicional = 130
    } 

    valorFinal = valorInicial + adicional
    return valorFinal
}

// vi na Web que é possível usar com switch da forma abaixo, 
// apesar de citarem que o if é mais rápido
function aPagar(idade){
    switch(true){
        case( idade<10 ): return 180;
        case( idade>10 && idade<=30 ): return 150;
        case( idade>30 && idade<=60 ): return 195;
        case( idade>60 ): return 230
    }
}

console.log('Com if')
console.log( valorAPagar( 5 ) )
console.log( valorAPagar( 15 ) )
console.log( valorAPagar( 30 ) )
console.log( valorAPagar( 50 ) ) 
console.log( valorAPagar( 95 ) )

console.log('Com switch')
console.log( aPagar( 5 ) )
console.log( aPagar( 15 ) )
console.log( aPagar( 30 ) )
console.log( aPagar( 50 ) ) 
console.log( aPagar( 95 ) )