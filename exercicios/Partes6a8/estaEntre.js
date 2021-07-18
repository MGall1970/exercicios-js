function estaEntre( numero, minimo, maximo, inclusivo=false ){

    if( typeof( numero ) == 'number' && 
        typeof( minimo) == 'number' && 
        typeof( maximo ) == 'number' ){

        if( inclusivo ) {
            return console.log( numero >= minimo && numero <= maximo )
        } else {
            return console.log( numero > minimo && numero < maximo )
        }

    } else { return console.log('Parâmetros inválidos!') }

}

estaEntre( 50, 50, 100 )
estaEntre( 50, 50, 100, true )