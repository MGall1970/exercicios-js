function mediaPonderada(codigo,nota1,nota2,nota3){
    let resultado = 0
    let mensagem = 'REPROVADO'
    let pesos = 4 + 3 + 3

    if(nota1>nota2 && nota1>nota3){
        resultado = nota1*4 + nota2*3 + nota3*3 
    }
    else if(nota2>nota1 && nota2>nota3){
        resultado = nota2*4 + nota1*3 + nota3*3
    }
    else if(nota3>nota1 && nota3>nota2){
        resultado = nota3*4 + nota1*3 + nota2*3
    }
    else{
        resultado = nota1*3 + nota2*3 + nota3*3
        pesos = 3 + 3 + 3
    }
    resultado /= pesos
    if(resultado>=5){ 
        mensagem = 'APROVADO'
    }
    console.log(`Aluno ${codigo}: ${nota1}, ${nota2}, ${nota3} => ${resultado} ${mensagem}`)
}

mediaPonderada(1,5,5,5)
mediaPonderada(2,5,7,4)
mediaPonderada(3,3,7,4)