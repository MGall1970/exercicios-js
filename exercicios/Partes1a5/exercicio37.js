function pa(n,a1,r){
    let progressao=[]
    let soma=0
    let resultado
    for(let index=0; index<n; index++){
        resultado = a1 + (index*r)
        progressao.push( resultado )
        soma += resultado
    }
    console.log(progressao,soma)
}

function pg(n,a1,r){
    let progressao=[a1]
    let soma=a1
    let resultado
    for(let index=1; index<n; index++){
        resultado = progressao[ (index-1) ] * r
        progressao.push( resultado )
        soma += resultado
    }
    console.log(progressao,soma)
}

pa(3,1,4)
pg(5,1,2)