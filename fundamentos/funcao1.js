function imprimirSoma( a, b ){
    console.log(a+b)
}

imprimirSoma(2,3)
imprimirSoma(2)

function Soma(a, b=0){
    return a+b
}

console.log( Soma(2,3) )
console.log( Soma(2) )
console.log( Soma() )
