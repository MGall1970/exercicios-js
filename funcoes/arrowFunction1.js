let dobro = function (a){
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // retorno impl�cito

console.log( dobro( Math.PI) )

let ola = function (){
    return 'Ol�'
}

ola = () => 'Ol�'
ola = _ => 'Ol�'
console.log(ola())