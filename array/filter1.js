const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'IPad pro', preco: 4199, fragil: true },
    { nome: 'Copo de vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de plástico', preco: 5.00, fragil: false }
]

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log( produtos.filter( caro ).filter( fragil ) )
