console.log("\x1b[31m%s\x1b[0m", '\nOBJETOS:\n' + '-----------------------------------------')

//  Literal definiendo todo inicialmente dentro de la declaracion del objeto
console.log("\x1b[34m%s\x1b[0m",'Forma 2: uso de-> new Object():');
var objeto1 = new Object();
objeto1.propiedad1 = 'un string cualquiera';
objeto1.propiedad2 = function(){
    console.log('objeto1-propiedad1: '+this.propiedad1)
}
objeto1.propiedad2();


//  Literal definiendo todo inicialmente dentro de la declaracion del objeto
console.log("\x1b[34m%s\x1b[0m",'Forma 3: uso de-> new UnaFuncionConstructora():');
function Objeto1(propiedad1,propiedad2){
    this.propiedad1 = propiedad1;
    this.propiedad2 = propiedad2;
    this.propiedad3 = function(){
        console.log('-->props: '+this.propiedad1+' ** '+this.propiedad2)
    }
};
var objeto2 = new Objeto1('una propiedad 1','una propiedad 2');
objeto2.propiedad3()