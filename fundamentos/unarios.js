let num1 = 1
let num2 = 2

console.log(num1,num2)

num1++
console.log(num1)
--num1
console.log(num1)

console.log(num1,num2)

console.log( ++num1 == num2-- ) // falso pois soma, compara, depois subtrai
console.log( num1 === num2 ) // falso pois j� ocorreu a subtra��o