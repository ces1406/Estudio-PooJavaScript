console.log("\x1b[36m%s\x1b[0m", 'OBJETOS:\n' + '-----------------------------------------')
console.log("\x1b[34m%s\x1b[0m",'Forma 8: una funcion constructora que devuelve un objeto:');
console.log("\x1b[36m%s\x1b[0m", '   Leí que  si la función constructor devuelve  algo esto no será tenido en cuenta,')
console.log("\x1b[36m%s\x1b[0m", '   es como que se ignora cualquier "return" dentro del constructor (en este ejemplo')
console.log("\x1b[36m%s\x1b[0m", '   eso no pasó, de hecho si se devuelve el objeto indicado en el return).')
console.log("\x1b[36m%s\x1b[0m", '   Nota: el getNombre() es una arrow function con this -----> por eso tira undefined')

function Objeto1(prop1, prop2) {
    var obj = new Object();
    obj.propiedad1 = prop1;
    obj.propiedad2 = prop2;
    obj.getProp1 = function () { return 'Objeto1->propiedad1: ' + this.propiedad1; };
    obj.getProp2 = () => { return 'Objeto1->propiedad2 :' + this.propiedad2 }
    return obj;
}
var objeto1 = new Objeto1('JUAN', { calle: 'ALSINA', nro: 111 });
console.log('objeto1: ',objeto1)
console.log('objeto1.propiedad1: ' + objeto1.propiedad1)
console.log('objeto1.obj(viendo si conserva el return obj): ', objeto1.obj)
console.log(objeto1.getProp1())
console.log(objeto1.getProp2())