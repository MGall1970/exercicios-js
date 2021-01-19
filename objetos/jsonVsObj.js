const obj = { a: 1, b: 2, c: 3, soma(){ a + b + c } }
console.log(JSON.stringify(obj))

console.log(JSON.parse('{ "a":1, "b":2, "c":3 }'))

console.log(JSON.parse('{ "a":1, "b":"texto", "c":true, "d":{}, "e":[] }'))

