var nombreArray = [1,2,3,4];
console.log(nombreArray[100]);
var fecha1 = new Date();
console.log(fecha1);
var fecha2 = new Date("2019", "13");
console.log(fecha2);

//Inicializacion de variables
//Asignación directa
var variable1 = 39;
//Asignacion indirecta a través de un calculo
var variable2 = variable1 + 20;

console.log(variable1);
console.log(variable2);

//Creamos un objeto persona
var persona = {
    nombre : "Juan",
    apellidos : "Lopez",
    castaño : true,
} 
//Mostramos la información del objeto persona
for (let propiedad in persona){
    console.log(propiedad + " : " + persona[propiedad]);
}