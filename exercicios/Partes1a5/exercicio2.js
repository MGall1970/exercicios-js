function qualTriangulo(a,b,c){
    if(a==b && b==c){
        return 'Equilátero'
    }else if(a!=b & a!=c & b!=c){
        return 'Escaleno'
    }else{
        return 'Isósceles'
    }
}

console.log( qualTriangulo(1,2,3) )
console.log( qualTriangulo(5,5,5) )
console.log( qualTriangulo(10,10,20))