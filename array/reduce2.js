const alunos = [
    { nome: 'Joao', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

// todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista

const bolsas = alunos.map( a => a.bolsista )
console.log( bolsas )

// resultado é acumulador, bolsista é o valor corrente
// ao final avaliará se resultado e cada um dos bolsistas são iguais
console.log( 'todos bolsistas?', alunos.map( a => a.bolsista ).reduce( todosBolsistas ) )

// algum aluno é bolsista?
const algumBolsista = ( resultado, bolsista ) => resultado || bolsista
console.log( 'algum bolsista?', alunos.map( a => a.bolsista ).reduce( algumBolsista ) )
