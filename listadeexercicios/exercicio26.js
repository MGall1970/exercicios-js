function pares(limite){
    for( let conta=0; conta<=limite; conta++ ){
        if(conta%2 == 0){
            console.log(`${conta} é par`)
        }
    }
}

pares(100)