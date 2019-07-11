
let repet = 1;
let id = setInterval(() => {
    console.log("Este mensaje se repite cada 2 segundos");
    if (repet >= 5)
    {
        clearInterval(id);
    }    
    repet++;
}, 0.5 * 1000); 
