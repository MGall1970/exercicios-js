let numero = 1
{
    {
        let numero = 2 // escopo local para qualquer bloco
        console.log('dentro=',numero)
    }
}
console.log('fora=',numero)