function quantos1020(vetor){
    let nquantos=0
    for(let i=0; i<=vetor.length; i++){
        if(vetor[i]>=10 && vetor[i]<=20){
            nquantos++
        }
    }
    console.log(`Temos ${nquantos} no intervalo 10 e 20 e ${(vetor.length-nquantos)} fora do intervalo.`)
}

quantos1020([0,5,10,15,20,25,30])