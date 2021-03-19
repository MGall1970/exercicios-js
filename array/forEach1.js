const aprovados = [ 'Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach( function(nome, indice){
    console.log(`${indice+1}) ${nome}`)
})

console.log('')
console.log('Arrow function')
aprovados.forEach( nome => console.log(nome) )

console.log('')
console.log('Com variável')
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)