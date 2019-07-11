
let repet = 1;
let id = setInterval(() => {
    if (repet >= 5)
    {
        clearInterval(id);
    }    
    console.log("Este mensaje se repite cada 2 segundos");
    repet++;
}, 0.5 * 1000); 
