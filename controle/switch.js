const imprimirResultado = function (nota){
    switch (Math.floor(nota)){
        case 10:
        case 9:
            console.log('Quadro de honra')
            break
        case 7: case 8:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recupera��o')
            break
        case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota inv�lida')
    }
}

imprimirResultado(9.5)
imprimirResultado(6.3)
imprimirResultado(11)
imprimirResultado(1.3)