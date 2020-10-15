console.log("\x1b[31m%s\x1b[0m", '\nOBJETOS:\n' + '-----------------------------------------')

//  Usando una funcion que devuelve un objeto creado:
console.log("\x1b[34m%s\x1b[0m",'Forma 4: uso de un funcion que devuelve un objeto (funcion constructora):');
function FactoryObjeto(prop1, prop2) {
    var objeto = new Object();
    objeto.propiedad1 = prop1;
    objeto.propiedad2 = prop2;
    objeto.propiedad3 = function () { return 'Propiedades-> '+this.propiedad1+' ** '+ this.propiedad2; };
    return objeto;
}
var objeto1 = new FactoryObjeto('blababla','fififi');
console.log(objeto1.propiedad3())

// Refactorizando: antes por cada objeto se creaba una copia de la funcion en propiedad3
console.log("\x1b[34m%s\x1b[0m",'Refacorizando la creación de propiedad como funcion:');
function f1 (){
    return 'Propiedades-> '+this.propiedad1+' **** '+ this.propiedad2;
}
function FactoryObjeto2(prop1, prop2) {
    var objeto = new Object();
    objeto.propiedad1 = prop1;
    objeto.propiedad2 = prop2;
    objeto.propiedad3 = f1;
    return objeto;
}
var objeto2 = new FactoryObjeto2('tatata','fififi');
console.log(objeto2.propiedad3())