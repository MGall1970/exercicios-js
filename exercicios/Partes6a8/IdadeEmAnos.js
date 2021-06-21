function IdadeEmAnos(n){
    let calculo=0
    const diasAno = 365
    if( typeof n == 'number'){
        calculo = n * diasAno
        console.log( `Sua idade em dias é ${calculo}`)
    }else{
        console.log('Informe a sua idade!')
    }
}

IdadeEmAnos()
IdadeEmAnos(25)
IdadeEmAnos(70)