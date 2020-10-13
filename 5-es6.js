console.log("\x1b[36m%s\x1b[0m", 'OBJETOS:\n' + '-----------------------------------------')
// Usando ES6 class()
console.log("\x1b[34m%s\x1b[0m",'Forma 8: uso de class (ES6):');

class Clase1 {
    propiedad1 = 'variable de clase?';
    propiedad2 = 99;
    
    metodo1(param){
        console.log('Clase1->metodo1-> parametro->'+param)
    }
    // getters y setters:
    get propiedad1 () {
        return 'PROP1->'+this.propiedad1;
    }
    get propiedad2 () {
        return 'PROP2->'+this.propiedad2;
    }
    set propiedad1 (p1) {
        this.propiedad1 = p1;
    }
    set propiedad2 (p2) {
        this.propiedad2 = p2;
    }
}

var objeto1 = new Clase1();
console.log('objeto1.propiedad1 = '+objeto1.propiedad1);
objeto1.metodo1('cualquier cosa');
objeto1.propiedad1 = 'otra cadena';
console.log('objeto1.propiedad1 = '+objeto1.propiedad1)