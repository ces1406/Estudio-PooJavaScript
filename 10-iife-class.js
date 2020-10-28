console.log("\x1b[36m%s\x1b[0m", '\nOBJETOS:\n' + '-----------------------------------------')
console.log("\x1b[36m%s\x1b[0m", 'Forma 13: IIEF con class y WeakMap() de ES6')

var Objeto1 = (function (){
    var atributoDeClase = 'atributo de clase publico'
    var atributoDeClasePrivado ='';
    var atributosPrivados = new WeakMap ();

    class ObjetoClass { 
        constructor(prop1,prop2){
            this.atributoDeClase = atributoDeClase; // de acceso público --->(inicialmente de clase")NOTA: si un objeto lo modifica=>se modifica sólo para él
            atributoDeClasePrivado = 'atributo de clase privado';
            atributosPrivados.set( this, {propiedad1: prop1, propiedad2: prop2} )
        }
        getProp1 = function (){
            return atributosPrivados.get(this).propiedad1;
        }
        getProp2 = function (){
            return atributosPrivados.get(this).propiedad2;
        }
        getAtribDeClase = function (){
            return atributoDeClasePrivado
        }
        setProp1 = function (p){
            atributosPrivados.set(this,{propiedad1:p})
        }
        setAtribDeClase = function (param='valor por default') {
            atributoDeClasePrivado = param;
        }
    }
    return ObjetoClass; //Persona;
}())

var obj1 = new Objeto1('Carlitos Suarez', {calle:'av croacia', altura:364});
var obj2 = new Objeto1('Federicoz', {calle:'av alsinax', altura:122});
console.log('obj1.getProp1(): '+obj1.getProp1());
console.log('obj2.getProp1()): '+obj2.getProp1());
console.log('obj1.atributoDeClase: '+obj1.atributoDeClase);
console.log('obj2.atributoDeClase: '+obj2.atributoDeClase);
console.log('obj1.atributoDeClasePrivado: '+obj1.atributoDeClasePrivado);
console.log('obj2.atributoDeClasePrivado: '+obj1.atributoDeClasePrivado);
console.log('obj1.getAtribDeClase(): '+obj1.getAtribDeClase());
console.log('obj2.getAtribDeClase(): '+obj2.getAtribDeClase())

// prueba de seteo de atributos de la clase
console.log('-----------------seteo de atributos-----------------------')
obj1.atributoDeClase = 'nuevo valor de atributo de clase publico';
//unaPersonaP.unAtributoDeClasePrivado = 'nuevo valor de atributo de clase privado';
console.log("obj1.setAtribDeClase('nuevo valor de atributo de clase privado')");
obj1.setAtribDeClase('nuevo valor de atributo de clase privado')
console.log('obj1.getAtribDeClase(): '+obj1.getAtribDeClase());

obj1.setProp1("MARIA")
console.log('obj1.getProp1(): '+obj1.getProp1());
console.log('obj2.getProp1()): '+obj2.getProp1());