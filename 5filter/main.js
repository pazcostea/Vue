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

//console.log(personas);

let personasConI = personas.filter((p) => {
    return p.nombre.includes("i")
});
console.log(personasConI);