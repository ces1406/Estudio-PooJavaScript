// Con funciones constructoras:
function Clase0 (p1,p2){
    this.propiedad1 = p1;
    this.propiedad2 = p2;
    this.metodo1 = function (p){
        return this.propiedad1+' * '+ p;
    }
}
var mixin0 = {
    mayusculizar: function(p){ return p.toUpperCase()},
    minusculizar: function(p){ return p.toLowerCase()}
}
function agregar(destino,origen){
    for(metodo in origen){
        console.log('metodo->',metodo)
        if(origen.hasOwnProperty(metodo)){
            console.log('si tiene el metodo')
            destino[metodo]=origen[metodo]
        }
    }
    return destino;
}
agregar(Clase0.prototype,mixin0);
var obj0 = new Clase0();
console.log('obj0.mayusculizar("abc"): '+obj0.mayusculizar('abc'))

// Con clases ES6:
class Clase1 {
    constructor (p1='vacio1',p2='vacio2'){
        this.propiedad1 = p1;
        this.propiedad2 = p2;
    }
    set propiedad1(p1){
        this._propiedad1 = p1;
    }
    set propiedad2(p2){
        this._propiedad2 = p2.toUpperCase();
    }
    get propiedad1(){
        return '-> '+this._propiedad1+' <-';
    }
    get propiedad2(){
        return '-> '+this._propiedad2+' <-';
    }
}
var obj1 = new Clase1('JUAN');
console.log('obj1.propiedad1(): '+obj1.propiedad1);
console.log('obj1.propiedad2(): '+obj1.propiedad2);
obj1.propiedad2='perez';
console.log('obj1.propiedad2(): '+obj1.propiedad2);
function mixin1 (superclase) {
    // Devuelve la clase agregándole los metodos de la superclase (el mixin)
    return class extends superclase{};
}
class SubClase extends mixin1(Clase1){
    constructor(p){
        super(p)
        this.propiedad3 = p
    }
    metodo1(p){
        return this.propiedad3+p;
    }
}

var obj2 = new SubClase('Pepe');
console.log('obj2.metodo1(" lala"): '+obj2.metodo1(' lala'))