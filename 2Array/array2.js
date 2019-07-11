var nombreArray = [1,2,3,4];
function esPar(n)
{
    return n % 2 == 0;    
}
nombreArray.forEach((n) => console.log(esPar(n)))

//Funcion anonima
var square = function(number){
    return number * number;
}
var x = square(4);
console.log(x);
//Llamar a funcion nombreFuncion(valordelafuncion)

