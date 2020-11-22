function comparaString( string1='',  string2=''){
    
   let contem1, contem2

   contem1 = verifica(string1,string2)
   contem2 = verifica(string2,string1)

   return(contem1==contem2)
}

function verifica( string1='', string2='' ){

    let contem = 0
    let avalia1 = string1.toLowerCase()
    let avalia2 = string2.toLowerCase()

    for( let index=0; index<avalia1.length; index++){
        if( avalia2.includes( avalia1.substring(index,1) ) ){
            contem++
        }
    }
    return contem
}

console.log( 'abc', 'Abc', comparaString( 'abc','Abc' ) )
console.log( 'abc', 'A1bc', comparaString( 'abc','A1bc' ) )