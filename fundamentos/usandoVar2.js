var numero = 1
{
    {
        var numero = 2 // escopo global, exceto para função que assume local
        console.log('dentro=',numero)
    }
}
console.log('fora=',numero)