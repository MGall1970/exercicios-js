function aula( nome, videoId){
    this.nome = nome
    this.videoId = videoId
}

const aula1 = new aula('Bem vindo',123)
console.log(aula1)

// simulando o new
function novo( f, ...params ){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj,params)
    return obj
}

const aula2 = novo( aula, 'Até breve', 456 )
console.log(aula2)
