function comprar(c){
    switch(c){
        case 'carro hatch':return 'Compra efetuada com sucesso'
        case 'carro sedan':
        case 'motocicleta':
        case 'caminhonete':return 'Tem certeza que não prefere este modelo?'
        default: return 'Não trabalhamos com este tipo de automóvel aqui'
    }
}

comprar(console.log(comprar('carro hatch')))
comprar(console.log(comprar('carro sedan')))
comprar(console.log(comprar('4x4')))