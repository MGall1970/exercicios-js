function Pessoa(){
    this.idade = 0

    setInterval( function() {
        this.idade++
        console.log(`Pessoa: ${this.idade}`)
    }.bind(this)  ,1000)

}

new Pessoa

function Pessoa1(){
    this.idade = 0
    const self = this
    setInterval( function() {
        self.idade++
        console.log(`Pessoa1 = ${self.idade}`)
    }, 1000 ) 

}

new Pessoa1