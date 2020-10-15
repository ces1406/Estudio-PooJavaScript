console.log("\x1b[36m%s\x1b[0m", '\nOBJETOS:\n' + '-----------------------------------------')
console.log("\x1b[36m%s\x1b[0m", 'Forma 12: Propiedades privadas con IIEF + weakmmap()de ES6')
console.log('----------------------------------------')

console.log("\x1b[36m%s\x1b[0m", '1°->Uso de WeakMap()de ES6:')
//      El objeto WeakMap es una colección de pares clave/valor en la que las claves son objetos y los valores son valores arbitrarios.
//      Las claves de los WeakMaps solamente pueden ser del tipo Object
var mapaDebil = new WeakMap();
var ojeto1 = { frase: 'un string caulquiera' }
mapaDebil.set({ name: 'coso', edad: 144 }, 'valor uno del weakmap');
mapaDebil.set(ojeto1, 14); //--->supuestamente solo sirve así (declarando antes un objeto como variable)
mapaDebil.set({ name: 'cosa' }, { cadena: 'bla bla bla', cantidad: 411 });
console.log('mapadebil.get("clave loca"): ' + mapaDebil.get(ojeto1));
console.log('mapadebil.get({name:"cosa"}): ' + mapaDebil.get({ name: 'cosa' }))
console.log('----------------------------------------');

console.log("\x1b[36m%s\x1b[0m", 'Construccion de objetos con variables privadas usando IIEF + weakmap()-> de ES6)')
var Objeto1 = (function () { 
    var propsPrivadas = new WeakMap();

    function constructorObjeto1(prop1, prop2) {
        privadas = {
            propiedad1: prop1,
            propiedad2: prop2
        };
        propsPrivadas.set(this, privadas);
        this.metodo1 = function () { return 'Objeto1->propiedadPrivada1: '+ propsPrivadas.get(this).propiedad1; };
        this.metodo2 = () => { return 'Objeto2->propiedadPrivada2: ' + propsPrivadas.get(this).propiedad2; };
    }
    return constructorObjeto1
}())

var obj1 = new Objeto1('Potamo', 'alcortacot');
console.log('obj1.propiedad1: '+ obj1.propiedad1+"\x1b[31m%s\x1b[0m", '(se puede ver como no existe "obj1.propiedad1", el atributo se adhirió al objeto)')
console.log('obj1.metodo1: '+obj1.metodo1())
console.log('obj1.metodo2: '+obj1.metodo2() + '\n-----------------------------------------')

var obj2 = new Objeto1('RePotamo', 'av croacia');
console.log("\x1b[31m%s\x1b[0m", 'Se creó otro objeto que NO pisará al anterior');
console.log('obj2.metodo1: '+obj2.metodo1())
console.log('obj2.metodo2: '+obj2.metodo2())