console.log( typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia','Carlos','Ana']
console.log(aprovados[0])
console.log(aprovados[3])

aprovados[3]='Paulo'
console.log(aprovados[3])
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9]='Rafael'
console.log(aprovados.length)
console.log(aprovados[8]==undefined)
console.log(aprovados)

aprovados.sort()
console.log(aprovados)

delete aprovados[1] // atribui undefined nesta posição
console.log(aprovados[1])

aprovados = ['Bia','Carlos','Ana']
aprovados.splice(1,1) // a partir do índice 1 exlcluir 1 elemento
aprovados.splice(1,0,'João') // a partir do índice não excluir nada, mas incluir João
console.log(aprovados)