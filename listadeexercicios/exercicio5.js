// minha solução
function dindin(a){
    let inteiro = Math.trunc( a )
    let decimal = a - inteiro
    let novadecimal = Math.trunc( ( decimal * 100 ) ) 
    return `R$${inteiro},${novadecimal}`
}

console.log( dindin( (0.1 + 0.2) ) )

// solução do professor
function formatarValorDecimal(valorDecimal) {
    valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmReais)
}

formatarValorDecimal( (0.1+0.2) )
