function diaDaSemana(n){
    let dia
    switch (n){
        case 1: 
            dia = 'domingo'
            break
        case 2:
            dia = 'segunda-feira'
            break
        case 3:
            dia = 'terça-feira'
            break
        case 4:
            dia = 'quarta-feira'
            break
        case 5:
            dia = 'quinta-feira'
            break
        case 6:
            dia = 'sexta-feira'
            break
        case 7:
            dia = 'sábado'
            break
        default:
            dia = 'dia inválido'
    }

    console.log(dia,classeDia(n))
}

function classeDia(n){
    switch(n){
        case 1: return ' fim de semana'
        case 2: 
        case 3:
        case 4:
        case 5:
        case 6: return ' dia útil'
        case 7: return ' fim de semana'
        default: return '?'
    }
}

diaDaSemana(1)
diaDaSemana(3)
diaDaSemana(7)
diaDaSemana(10)
diaDaSemana('a')
