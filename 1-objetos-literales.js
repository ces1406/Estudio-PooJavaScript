console.log("\x1b[31m%s\x1b[0m", '\nOBJETOS:\n' + '-----------------------------------------')
//  Literal definiendo todo inicialmente dentro de la declaracion del objeto
console.log("\x1b[34m%s\x1b[0m",'Forma 1: creacion literal:');


var objeto1 ={
    propiedad1: 'un string1',
    propiedad2: {
        propiedad21:'un string21',
        propiedad22:'un string22'
    },
    propiedad3:function(){
        console.log('->objeto1-propiedades: '+this.propiedad1+','+JSON.stringify(this.propiedad2))
    },
    propiedad4: 44
}
// agregando propiedades "on the fly":
objeto1.propiedad5 = ()=>{
    console.log('->objeto1-propiedad4: '+this.propiedad4);
    console.log('   (entonces this que es?, seria "Object"?)->this: ',this)
    //NOTA: como es una arrow function => this.propiedad4 es undefined
    //      si fuera "function (){.........}" daría OK
}

objeto1.propiedad3();
objeto1.propiedad5();