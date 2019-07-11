//Clase que tenga mensaje y si está hecha y un metodo de la clase que sea marcar como hecha
class estadoMensajes{
    constructor(mensaje, hecho){
        this.mensaje = mensaje;
        this.hecho = hecho;
    }
    marcarHecha(){
        this.hecho = true;
    }
}

let msj = new estadoMensajes("Este es el mensaje", false);
console.log(msj);
msj.marcarHecha();
console.log(msj);