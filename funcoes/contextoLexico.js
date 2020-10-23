const valor = 'Global'

// a função respeita o contexto onde ela foi criada
function minhaFuncao() {
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    minhaFuncao()
}

exec()