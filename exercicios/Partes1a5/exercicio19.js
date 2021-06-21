function pedido(codigo,quantidade){
    switch (codigo){
        case 100:return 3 * quantidade
        case 200:return 4 * quantidade
        case 300:return 5.5 * quantidade
        case 400:return 7.5 * quantidade
        case 500:return 3.5 * quantidade
        case 600:return 2.8 * quantidade
        default: return 'Produto não existe'
    }
}

console.log(pedido(100,1))
console.log(pedido(200,2))
console.log(pedido(300,3))
console.log(pedido(400,1))
console.log(pedido(500,1,))
console.log(pedido(600,1))
console.log(pedido(0,1))