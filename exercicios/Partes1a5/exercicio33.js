let vetorInteiro = [ 1, 2, 3, 4, 5 ]
let vetorString = [ 'a', 'b', 'c', 'd' ]
let vetorDouble = [ 6.1, 7.2, 8.3, 9.4 ]

console.log( ( vetorDouble.concat(vetorInteiro) ).concat(vetorString) )
console.log( vetorInteiro.concat(vetorString,vetorDouble) )
