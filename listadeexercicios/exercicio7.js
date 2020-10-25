function baskara(a,b,c){
    let delta, resultados = []
    let r1, r2
    delta = (b**2) - (4*a*c) 
    if(delta<0){
        return console.log('O delta é negativo!')
    } else {
        // havia retornado um uma string e não notei que o enunciado pedia um vetor
        /* r1 = ( -b + Math.sqrt( delta ) ) / (2 * a)
        r2 = ( -b - Math.sqrt( delta ) ) / (2 * a)
        console.log( `Os resultados são ${r1} e ${r2}`) 
        return console.log( resultados )*/
        resultados.push( ( -b + Math.sqrt( delta ) ) / (2 * a) )
        resultados.push( ( -b - Math.sqrt( delta ) ) / (2 * a) )
        return console.log( resultados )
    }
}

baskara(2,12,-14)
