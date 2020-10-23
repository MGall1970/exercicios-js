function criarProduto(nome, preco, desc=10){
    return {
        nome,
        preco,
        desconto: desc
    }
}

console.log( criarProduto('Bala',5) ) 
console.log( criarProduto('Notebook',2199.10) ) 