function bissexto(ano){
    let mensagem = 'não é bissexto'

    if( ano%4 == 0 ){
        mensagem = 'é bissexto'
    }

    if( ano%100 == 0 ){
        mensagem = 'não é bissexto'
    } 
     
    if( ano%400 == 0 ){
        mensagem = 'é bissexto'
    } 

    console.log( `O número ${ano} ${mensagem}` )

    return ( mensagem == 'é bissexto' )
}

bissexto(100)
bissexto(400)
bissexto(500)
bissexto(800)
bissexto(2020)
