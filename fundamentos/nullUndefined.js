// Em JS há atribuição por valor para os tipos primitivos: número, boolean, string,
// null, undefined, symbol
// Para os demais a atribuição é por referência
let valor 
console.log(valor) // undefined

valor = null
console.log(valor) // nulo

const produto = {}
console.log( produto.preco ) 

produto.preco = 3.50
console.log( produto.preco )

produto.preco = null // não usar undefined, deixando este tipo somente para o compilador
console.log( produto.preco)
console.log( !!produto.preco)