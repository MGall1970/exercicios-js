var numero = 1
{
    {
        var numero = 2 // escopo global, exceto para fun��o que assume local
        console.log('dentro=',numero)
    }
}
console.log('fora=',numero)