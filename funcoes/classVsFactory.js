class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log( `Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

// o exemplo abaixo se aplicado num navegador 
// documents.getElements.ByTagName('body')[0].click  = p2.falar
// Resultará sem no nome definido, diferente da classe que por conta do this
// resultará em indefinição
const criarPessoa = nome =>{
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Joana')
p2.falar()