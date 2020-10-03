function tratarErroELancar(erro) {
    // throw new Error('...')
    // throw 10
    // throw 'message'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj){
    try{
        console.log( obj.name.toUpperCase() ) + '!!!'        
    }
    catch(e) {
        tratarErroELancar(e)

    }
    finally {
        console.log('Fim...')
    }
}

//const objeto = { name: 'Roberto' }
//imprimirNomeGritado( objeto )

const obj = { nome: 'Roberto' } // o certo deveria ser name, portanto gera erro
imprimirNomeGritado( obj )