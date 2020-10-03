// ocorre o hoisting, içamento da declaração de a antes do primeiro console
console.log('a=',a)
var a = 2
console.log(a)

// console.log('b=',b) // ocorre erro pois let não faz hoisting
let b = 1
console.log(b)