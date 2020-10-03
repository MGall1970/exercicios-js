// estrategia 1 para valor padrao
function soma1(a,b,c){
    a = a || 1
    b = b ||1
    c = c || 1
    return a + b + c
}

// para valor zerado gera um efeito colateral
console.log(soma1(),soma1(3),soma1(1,2,3),soma1(0,0,0))

// estrat�gia 2, 3, 4 para valor padr�o
function soma2( a, b, c ){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c // <= mais correto para inicializar vari�veis dentro de um fun��o
    return a + b + c
}

console.log(soma2(),soma2(3),soma2(1,2,3),soma2(0,0,0))

// valor padr�o conforme ES2015
function soma3( a=1, b=1, c=1 ){
    return a + b + c
}

console.log(soma3(),soma3(3),soma3(1,2,3),soma3(0,0,0))