function aumento(plano,salario){
    switch(plano){
        case 'A':console.log( Math.round( salario * 1.10 )); break;
        case 'B':console.log( Math.round( salario * 1.15 )); break;
        case 'C':console.log( Math.round( salario * 1.20 )); break;
        default: console.log('Plano inválido')
    }
}


aumento('A',100)
aumento('B',100)
aumento('C',100)
aumento('D',100)