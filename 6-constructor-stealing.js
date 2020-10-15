console.log("\x1b[36m%s\x1b[0m", '\nOBJETOS:\n' + '-----------------------------------------')
// Constructor Stealing
console.log("\x1b[36m%s\x1b[0m", 'Forma 9: Constructor Stealing (el constructor llama a otro constructor con la funcion call() )')
function Objeto1(prop1, prop2) {
    this.propiedad1 = prop1;
    this.propiedad2 = prop2;
    this.getProp1 = function () { return 'Objeto1->propiedad1: ' + this.propiedad1; };
}
function Objeto2() { 
    Objeto1.call(this,'JUAN',{calle:'ALSINA', nro:111}) 
} 
function Objeto3(){
    Objeto1.apply(this,['CARLOS',{calle:'PERON',nro:333}])
}
var objeto1 = new Objeto1('PAPA',55);
var objeto2 = new Objeto2();
var objeto3 = new Objeto3();

console.log('objeto1: ',objeto1);
console.log('objeto2: ',objeto2)
console.log('objeto3: ',objeto3)

objeto1.propiedad1='MARIA'
console.log('objeto1.getProp1()->'+objeto1.getProp1())
console.log('objeto2.propiedad1->'+objeto2.propiedad1);