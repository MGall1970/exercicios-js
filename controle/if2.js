function teste1(num){
    // o if pode ser usado se bloco de controle para somente uma instrução
    if(num>7)
        console.log(num)
    console.log('Final')
}

console.log(6)
console.log(8)

function teste2(num){
    if(num>7); { // não usar ; em estruturas de controle
            console.log(num)
    }
}

teste2(6)
teste2(8)
