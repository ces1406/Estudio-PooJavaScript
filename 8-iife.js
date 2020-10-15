console.log("\x1b[36m%s\x1b[0m", '\nOBJETOS:\n' + '-----------------------------------------')
console.log("\x1b[36m%s\x1b[0m", 'Forma 11: Propiedades privadas con IIFE (Inmediatly Invoked Function Expressions)')

var unValor = function () { return 3 + 2 }();
console.log("var unValor = function(){return 3+2}()\nunValor= " + unValor + "\n")

var Objeto1 = (function () { //Objeto1 termina siendo un constructor (?:un constructor no podria pisarse)
    // variables locales a la funcion (y privadas para el objeto/clase/constructor):
    var propiedad1 = 'vacio';
    var propiedad2 = {};
    // metodos locales (tiene sentido que sean privados?):
    function metodo1() { return '->Objeto1->prop1: *** '+ propiedad1 +'***'; };
    metodo2 = () => { return '->Objeto1->prop2: ' +JSON.stringify(propiedad2) }

    function constructorObjeto1(prop1,prop2) {
        propiedad1 = prop1;
        propiedad2 = prop2;
        this.metodo1 = metodo1;
        this.metodo2 = metodo2;
    }
    return constructorObjeto1
}())

var obj1 = new Objeto1('contenido de prop1',{suprop1:'contenido subprop1',subprop2:'contenido subprop2'});
console.log('obj1.propiedad1: '+obj1.propiedad1+"\x1b[31m%s\x1b[0m",'(se puede ver como no existe "obj1.propiedad1", el atributo no adherió al objeto)')
console.log('obj1.metodo1(): '+obj1.metodo1());
console.log('obj1.metodo2(): '+obj1.metodo2())
console.log('-----------------------------------------')

var obj2 = new Objeto1('contenido2->de prop1',{suprop1:'contenido2->subprop1',subprop2:'contenido2->subprop2'});
console.log("\x1b[31m%s\x1b[0m", 'Se creó otro objeto obj2 que pisará a obj1 (en realidad como lo que devuelve Objeto');
console.log("\x1b[31m%s\x1b[0m", 'es un constructor que termina haciendo referencia a las mismas variables privadas, los distintas objetos');
console.log("\x1b[31m%s\x1b[0m", 'que se vayan creando van a apuntar siempre a las mismas variables privadas)');
console.log('obj2.metodo1(): '+ obj2.metodo1())
console.log('obj2.metodo2(): '+ obj2.metodo2())
console.log("\x1b[36m%s\x1b[0m", '-----------------------------------------')