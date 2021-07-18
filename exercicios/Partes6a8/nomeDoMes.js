function nomeDoMes(nMes){
    let aMeses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']
    if( nMes > 0 & nMes < 13 ) {
        return console.log( aMeses[ (nMes-1) ] )
    } else {
        return console.log( 'Mês inválido!')
    }
}
nomeDoMes(1)