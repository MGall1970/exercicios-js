function calcula(a=0,b=0){
    return `A soma de ${a} e ${b} é igual a ${a+b},
    a diferença é ${a-b},
    o produto é ${a*b},
    a divisão é ${a/b}`
}

console.log( calcula() )
console.log( calcula(1,3) )
console.log( calcula( 10.5, 48.34))