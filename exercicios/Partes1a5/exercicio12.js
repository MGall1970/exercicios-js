function fatorial(n){
    let resultado = 1
    for( let i=n; i--; i>0){
        resultado*=(i+1)
    }
    return resultado
}

console.log( fatorial(3) )
console.log( fatorial(10) )