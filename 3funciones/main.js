function test(){
    console.log("hola");
}
test ("hola", "adios");

//Funcion que calcule la media de los argumentos que reciba

function media ()
{
    var resultado = 0;
    var m = 0;
    var i;
    for (i = 0; i < arguments.length; i++)
    {
        m = m + arguments[i];
    }
    resultado = m / (arguments.length);
    console.log(resultado);
}
var result = media (1,2,3);
//Funcion flecha
//(a,b) => a + b;
//a => a * 2;
//function(a)
//{
//    return a * 2;
//}
let nombre = "Juan";
let persona = {
    nombre : nombre
}
//para llamar a la variable persona.nombre;
let persona2 ={
    nombre
}
//El resultado es Juan

function mayordeEdad(edad = 0)
{
    console.log("edad", edad);
    if (edad >= 18)
    return edad >= 18 ? true : false;
    /* {
        return true
    }
    else 
    {
        return false;
    } */
}
console.log(mayordeEdad(20));

//Funciones predefinidas
let id = setInterval(() => {
    console.log("esto se repite cada 4 segundos");
    
}, 4 * 1000); //tiempo de ejecucion en milisegundo (2 * 60 * 1000) --> 2 minuto por 60 seg. por 1000 milisegundos
let idTimeout = setTimeout(() => {
    console.log("esto se repite cada 4 segundos una sola vez");
    
}, 4 * 1000);
console.log("id intervalo", idTimeout);
console.log("id intervalo", id);
