// Fun��o em JS � Firs-Class Object (Citizens)
// High-order function

// forma literal
function fun1 (){}

// armazenar em vari�vel
const fun2 = function () {}

// armazenar em array
const array = [ function (a,b) { return a + b }, fun1, fun2 ]
console.log( array[0](2,3) )

// armazenar em um atributo
const obj = {}
obj.falar = function () { return 'Opa'}
console.log( obj.falar())

// passar como par�metro
function run(fun){
    fun()
}
 run( function(){console.log('Executando...')})

 // uma fun��o pode conter/retornar um valor
 function soma( a, b ) {
     return function(c){
         console.log(a+b+c)
     }
 }

 soma(2,3)(4)
 const cincoMais = soma(2,3)
 cincoMais(4)