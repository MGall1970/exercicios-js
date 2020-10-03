// Em JS h� atribui��o por valor para os tipos primitivos: n�mero, boolean, string,
// null, undefined, symbol
// Para os demais a atribui��o � por refer�ncia
let valor 
console.log(valor) // undefined

valor = null
console.log(valor) // nulo

const produto = {}
console.log( produto.preco ) 

produto.preco = 3.50
console.log( produto.preco )

produto.preco = null // n�o usar undefined, deixando este tipo somente para o compilador
console.log( produto.preco)
console.log( !!produto.preco)