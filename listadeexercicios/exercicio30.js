function menorEMaior(vetor){
    let menor=999999, maior=0
    //console.log(vetor)
    for( let i=0; i<vetor.length; i++ ){
        if(menor>vetor[i]){
            menor=vetor[i]
        }
        if(maior<vetor[i]){
            maior=vetor[i]
        }
        //console.log(i,vetor[i],menor,maior)
    }
    console.log(`O menor valor foi ${menor} e o maior foi ${maior}.`)
}

menorEMaior( [50,100,10,0,250,100] )