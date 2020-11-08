function calcula(numero1,operacao,numero2){
    switch(operacao){
        case '+':return numero1 + numero2
        case '-':return numero1 - numero2
        case '*':return numero1 * numero2
        case '/':return numero1 / numero2
        default: return 'Operação inválida'
    }
}

console.log( calcula(1,'+',1) )
console.log( calcula(2,'-',1) )
console.log( calcula(3,'*',2) )
console.log( calcula(4,'/',3) )
console.log( calcula(0,'',0) )