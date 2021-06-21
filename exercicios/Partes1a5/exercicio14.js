function temFruta(c){
    switch(c){
        case 'maçã':console.log( 'Não vendemos esta fruta aqui' ); break;
        case 'kiwi':console.log('Estamos com escassez de kiwis' ); break;
        case 'melancia':console.log( 'Aqui está, são 3 reais o quilo' );break;
        default: console.log('Não entendi');break;
    }
}

temFruta('maçã')
temFruta('kiwi')
temFruta('melancia')
temFruta('uva')