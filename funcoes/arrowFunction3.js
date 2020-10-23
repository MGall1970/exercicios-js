let comparaComThis = function (param) {
    console.log( this === param )
}

comparaComThis(this) // false
comparaComThis(global) // true - vinculado ao contexto global

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(obj) // true - vinculado ao contexto da função
comparaComThis(global) // false 

let comparaComThisArrow = param => console.log( this === param )
comparaComThisArrow(this) // true - vinculado ao contexto da função
comparaComThisArrow(global) // false
comparaComThisArrow(module.exports) // true

comparaComThisArrow = comparaComThisArrow.bind()
comparaComThisArrow(obj) // false - a função arrow força a vinculação ao this da função
comparaComThisArrow(module.exports) 