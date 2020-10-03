function area( largura, altura ){
    const area = largura * altura
    if ( area > 20 ) {
       // exemplo ilustrativo não se deve ter retornos diferentes para uma mesma função 
        console.log( `Valor acima do permitido: ${area} m2.`)
    } else {
        return area
    }
}

console.log( area( 2 , 2) )
console.log( area(2) )
console.log( area( 5, 5 ) )