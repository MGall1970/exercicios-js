function crescimento(altura1,taxa1,altura2,taxa2){
    let tempo=0
    if(altura1<altura2){
        console.log('A primeira criança é menor que a segunda')
        tempo = ultrapassa(altura1,taxa1,altura2,taxa2)
    }else if(altura2<altura1){
        console.log('A segunda criança é menor que primeira')
        tempo = ultrapassa(altura2,taxa2,altura1,taxa1)
    }
    if(tempo>0){
        console.log(`Ela ultrapassará a outra em ${tempo} anos.`)
    }
}

function ultrapassa(menor,taxa1,maior,taxa2){
    for( let n=0; n<=21; n++ ){
        menor += taxa1
        maior += taxa2
        //console.log(menor,maior)
        if(menor>maior){
            return n+1
        }
    }
    return 0
}

crescimento(80,2,85,1)