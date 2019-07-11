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
    },
    {
        nombre : "Irene",
        edad : 19
    }

];

let personasConI = personas.find((p) => {
    console.log(p.nombre);
    return p.nombre.startsWith("D")
});
console.log(personasConI);