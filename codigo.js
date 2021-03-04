class celulares{
    constructor(color,peso,tamaño,rdc,ram){
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
    }
    presionarBotonEncendido(){
        if(this.encendido == false){
            alert("celular prendido");
            this.encendido = true;
        } else {
            alert("Celular apagado");
            this.encendido = false;
        }
    }
    reiniciar(){
        if(this.encendido == true){
            alert("Reiniciando celular");
        } else {
            alert("El celualr esta apagado");
        }
    }
    tomarFoto(){
        alert(`Fotografia tomada con una resolucion de: ${this.resolucionDeCamara}`);
    }
    grabarvideo(){
        alert(`Video tomado con una resolucion de: ${this.resolucionDeCamara}`);
    }
    mobileinfo(){
        return `
        Color: <b>${this.color }</b> <br>
        Peso: <b>${this.peso }</b> <br>
        Tamaño: <b>${this.tamaño }</b> <br>
        Resolucion de Camara: <b>${this.resolucionDeCamara }</b> <br>
        Memoria Ram: <b>${this.memoriaRam }</b> <br>
        `;
    }
}

const celular1 = new celulares("rojo","150g","5 pulgadas", "HD","2 GB");
const celular2 = new celulares("negro","155g","5.4 pulgadas", "full HD","2 GB");
const celular3 = new celulares("blanco","146g","5.9 pulgadas", "full HD","2 GB");
// celular1.presionarBotonEncendido();
// celular1.tomarFoto();
// celular1.grabarvideo();
// celular1.reiniciar();
// celular1.presionarBotonEncendido();
document.write(`
    ${celular1.mobileinfo()} <br>
    ${celular2.mobileinfo()} <br>
    ${celular3.mobileinfo()} <br>
`);