function inverso(conteudo){
    let tipo = typeof conteudo
    if( tipo == "number" ) {
        console.log( conteudo * -1 )
    } else if( tipo == "boolean" ){
        console.log( !( conteudo ) )
    } else { 
        console.log( `Booleano ou numérico esperados, mas o parẫmetros é do tipo ${tipo}`)
    }
}

inverso(true)
inverso("0")
inverso(-2000)
inverso("programação")