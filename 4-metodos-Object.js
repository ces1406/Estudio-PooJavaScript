console.log("\x1b[36m%s\x1b[0m", '\nOBJETOS:\n' + '-----------------------------------------');

//  Usando Object.defineProperty() para definir propiedades:
console.log("\x1b[34m%s\x1b[0m",'Forma 5: uso de Object.defineProperty() para definir propiedades:');
var objeto1 = new Object(); // opcion: var persona = {}
Object.defineProperty(objeto1,'propiedad1',{value:'una cadena',writable:true,enumerable:true,configurable:true});
Object.defineProperty(objeto1,'propiedad2',{value:34,writable:true,enumerable:true,configurable:true});
console.log('objeto1: ',objeto1)

// Object.create():
console.log("\x1b[34m%s\x1b[0m",'Forma 6: uso de Object.create(prototipo,atributos):');
var objeto2 = Object.create(objeto1,{propiedad3:{value:'valor para propiedad3',writable:true,enumerable:true,configurable:true}});
// nota: NO hereda las propiedades del objeto indicado como prototipo (=>para que sirve?)
console.log('objeto2: ',objeto2)

// Copiando/clonando otro objeto con Object.assign(destino,fuente):
console.log("\x1b[34m%s\x1b[0m",'Forma 7: uso de Object.assign(objetoDestino,objetoFuente):');
var objeto3 = Object.assign({},objeto1)
console.log('objeto3: ',objeto3)