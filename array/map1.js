const nums = [1,2,3,4,5]

// map = for com um propósito
let resultado = nums.map(function(e){
    return e * 2
})

console.log(`O vetor ${nums} dobrado é ${resultado}`)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

// é possível usar map em sequência, 'cascateado'
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)