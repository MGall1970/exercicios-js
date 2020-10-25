function jSimples(capital,juros,tempo){
    let rendimento, montante
    rendimento = ( capital * (juros/100) * tempo )
    montante = capital + rendimento
    console.log( `${capital} aplicado a ${juros} a.m. resulta em ${montante}`)
}

function jComposto(capital,juros,tempo){
    return capital*( ( 1 + (juros/100) ) ** tempo )
}

// importante a taxa e o mês devem estar expresssos na mesma unidade de tempo
// 1200,00 2% a.m. 15 meses
jSimples(1200,2,15)

// 1400,00 7% a.a. 2 anos
console.log( jComposto(1400,7,2).toFixed(2) )