class Lancamento {
    constructor(nome='Generico',valor=0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro{
    // método construtor
    constructor(mes,ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    // método para inserir lançamentos
    addLancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    // método para consolidar o saldo
    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l=>{valorConsolidado += l.valor})
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario',45000)
const contaDeLuz = new Lancamento('Luz',-200)
const contas = new CicloFinanceiro(6,2018)

contas.addLancamentos(salario,contaDeLuz)

console.log(contas.sumario())