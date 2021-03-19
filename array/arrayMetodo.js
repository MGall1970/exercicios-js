const pilotos = ['Vettel','Alonso','Raikonen','Massa']
console.log(pilotos)

pilotos.pop() // remove o último elemento
console.log(pilotos)

pilotos.push('Verstappen') // adiciona um elemento ao final
console.log(pilotos)

pilotos.shift() // tira o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton') // inclui um elemento na primeira posição
console.log(pilotos)

pilotos.splice(2,0,'Botas','Massa') // adicionando a partir da posição 2
console.log(pilotos)

pilotos.splice(3,1) // remove a posição 3
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) // novo array a partir da posição 3
console.log(algunsPilotos)

const algunsPilotos1 = pilotos.slice(1,4) // não considera a 4a. posição
console.log(algunsPilotos1)