Array.prototype.filter2 = function(callback){
    const newArray = []
    for ( i=0; i<this.length; i++ ){
        if ( callback( this[i], i, this ) ){
            newArray.push( this[i] )
        }
    }
    return newArray
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'IPad pro', preco: 4199, fragil: true },
    { nome: 'Carro', preco: 19000, fragil: false },
    { nome: 'Copo de vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de plástico', preco: 5.00, fragil: false }
]

const caro = produto => produto.preco >= 2500
const fragil = produto => produto.fragil

console.log( produtos.filter2( caro ).filter2( fragil ) )
