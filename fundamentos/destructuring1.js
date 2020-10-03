// novo recurso do ES2015
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 100
    }
}

const { nome, idade } = pessoa
console.log( nome, idade )

const { nome: n, idade: i } = pessoa
console.log( n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log( sobrenome, bemHumorada )

const { endereco: { logradouro, numero, cep } } = pessoa
console.log( logradouro, numero, cep )

// ocorre erro pois h� uma tentativa de desestruturar um conte�do de outro inexistente
// const { conta: { ag, num } } = pessoa
//console.log( ag, num ) 