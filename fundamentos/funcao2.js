// atribuindo uma fun��o sem nome a uma vari�vel
const imprimirSoma = function (a,b){
    console.log(a+b)
}
imprimirSoma(2,3)

// arrow function
const soma = (a,b) => {
    return a + b
}
console.log( soma(2,3) )

// retorno impl�cito
const subtracao = (a,b) => a-b
console.log( subtracao(2,3))
