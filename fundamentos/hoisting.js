// ocorre o hoisting, i�amento da declara��o de a antes do primeiro console
console.log('a=',a)
var a = 2
console.log(a)

// console.log('b=',b) // ocorre erro pois let n�o faz hoisting
let b = 1
console.log(b)