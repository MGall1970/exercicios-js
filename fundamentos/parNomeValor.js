//  par nome/valor
const saudacao = 'Opa' // contexto l�xico 1

function exec(){
    const saudacao = 'Falaaa' // contexto l�xico 2
    return saudacao
}

// Objetos s�o grupos aninhados de pares nome/valor
const Cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua X',
        numero: 100
    }
}

console.log(saudacao)
console.log(exec())
console.log(Cliente)