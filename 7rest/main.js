let numPares =  [ 4, 2, 8, 6, 10 ];
let numImpares = [ 1, 3, 5, 7, 9 ];
let todos = [...numPares, ...numImpares,]
todos.sort((a,b) => a - b);
console.log(todos);

//Desestructurar un array para almacenarlo en variables independientes.
let arr = [1, 2, 3];
let [a, b, c] = arr;
console.log(a,b,c);

