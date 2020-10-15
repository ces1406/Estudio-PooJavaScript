console.log("\x1b[36m%s\x1b[0m", '\nOBJETOS:\n' + '-----------------------------------------');

//  Usando Object.defineProperty() para definir propiedades:
console.log("\x1b[34m%s\x1b[0m",'Forma 5: uso de Object.defineProperty() para definir propiedades:');
var objeto1 = new Object(); // opcion: var persona = {}
Object.defineProperty(objeto1,'propiedad1',{value:'una cadena',writable:true,enumerable:true,configurable:true});
Object.defineProperty(objeto1,'propiedad2',{value:34,writable:true,enumerable:true,configurable:true});
console.log('objeto1: ',objeto1)

// Object.create():
console.log("\x1b[34m%s\x1b[0m",'Forma 6: uso de Object.create(prototipo,atributos):');
var objeto2 = {
    propiedad21:'una propiedad string',
    metodo21: function(){ console.log('->metodo41->con propiedad41: '+this.propiedad21)} //NOTAR->uso de "this"
}
objeto2.metodo21();
var objeto3 = Object.create(objeto2,{propiedad22:{configurable:true,writable:true,value:'otro string',enumerable:true}})
console.log('objeto5->propiedad22: ',objeto3.propiedad22);
console.log('objeto5->propiedad21(en su prototype): ',objeto3.propiedad21)
objeto3.metodo21()

// Copiando/clonando otro objeto con Object.assign(destino,fuente):
console.log("\x1b[34m%s\x1b[0m",'Forma 7: uso de Object.assign(objetoDestino,objetoFuente):');
var objeto4 = Object.assign({},objeto1)
console.log('objeto3: ',objeto4)