console.log("\x1b[36m%s\x1b[0m", 'OBJETOS:\n' + '-----------------------------------------')
// Usando ES6 class()
console.log("\x1b[34m%s\x1b[0m",'Forma 10: uso de class (ES6):');

class Clase1 {
    constructor(prop1,prop2){
        this.propiedad1 = prop1 || 'vacio';
        this.propiedad2 = prop2 || 99;   
    }     
    metodo1(param){ console.log('Clase1->metodo1-> parametro: '+param) }
    // getters y setters:
    // NOTA: en los settters/getters si no se utiliza el _ provoca que se la función se
    // llame a sí misma recursivamente e infinitamente
    get propiedad1 () { return 'PROP1->'+this._propiedad1; }
    get propiedad2 () { return 'PROP2->'+this._propiedad2; }
    set propiedad1 (p1) { this._propiedad1 = '1**'+p1+'**1'; }
    set propiedad2 (p2) { this._propiedad2 = '2**'+p2+'**2'; }
}

var objeto1 = new Clase1();
objeto1.metodo1('cualquier cosa');
console.log('objeto1.propiedad1 = '+objeto1.propiedad1);
objeto1.propiedad1 = 'otra cadena';
console.log('objeto1.propiedad1 = '+objeto1.propiedad1);