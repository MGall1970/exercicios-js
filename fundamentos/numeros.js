const peso1 = 1.0
const peso2 = 2.0

console.log(peso1,peso2)
console.log(Number.isInteger(peso1))

const avaliacao1 = 9.8
const avaliacao2 = 6.8

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media)
console.log(media.toFixed(2))
console.log(media.toString(2)) // converte para binário

console.log(typeof media)
console.log(typeof Number)
