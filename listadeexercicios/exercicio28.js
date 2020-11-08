function paresEImpares(numeros){
    let pares = impares = 0
    for( let n=0; n<numeros.length ; n++ ){
        if(numeros[n]%2==0){
            console.log(`${n} é par`)
            pares++
        }else{
            console.log(`${n} é ímpar`)
            impares++
        }
    }
    console.log(`Há ${pares} pares e ${impares} impares.`)
}

paresEImpares( [0,1,2,3,4,5,6,7,8,9] )