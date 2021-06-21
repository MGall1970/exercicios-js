let quantasNotas = (valor, nota) => Math.trunc( ( valor / nota ) )

function desmembraValor(valor){

    let notas = [ 100, 50, 10, 5, 1 ]
    let mensagem = ''

    for( let contador=0; (contador<notas.length) ; contador++ ){

        if( valor >= notas[ contador ] ){ 

            qtNotas = quantasNotas(valor,notas[contador])
            mensagem += `${qtNotas} nota(s) de ${notas[ contador ]} `
            valor -= (qtNotas * notas[ contador ])
        }
    }
    return console.log( mensagem )
}

desmembraValor( 18 )
desmembraValor( 251 )