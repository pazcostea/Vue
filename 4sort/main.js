let personas = [
    {
        nombre : "David",
        edad : 22
    },
    {
        nombre : "Steven",
        edad : 24
    },
    {
        nombre : "Miriam",
        edad : 19
    }

];
personas.sort((p1, p2) =>{
    //return p1.edad - p2.edad;
    return p1.nombre > p2.nombre ? 1 : -1;
})

let sonMayores = personas.every((p) => {
    return p.edad > 18;
})
console.log(personas);
console.log(sonMayores ? 'son mayores' : 'no son mayores');

let nombres = [ "bb", "zz", "aa"]
nombres.sort();
console.log(nombres); //Te ordena lo que has metido en el array alfabeticamente

let presentaciones = personas.map(p => {
    return `Hola soy ${p.nombre} y tengo ${p.edad}`
})
console.log(presentaciones); 
