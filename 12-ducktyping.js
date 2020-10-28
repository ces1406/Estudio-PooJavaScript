console.log("\x1b[36m%s\x1b[0m", '\nOBJETOS:\n' + '-----------------------------------------');
console.log("\x1b[36m%s\x1b[0m", 'Duck Typing: técnica que establece cierto tipo de contrato entre una clase que implementa/usa otra\n');
console.log("\x1b[36m%s\x1b[0m", '1) Chequeo si el objeto es de cierto tipo (instanceof)');
class Empresa{
    constructor(){
        this.empleados = [];
    };
    contratar (e){
        if(e instanceof Empleado){
            this.empleados.push(e);
            console.log('Contratando a ......'+e.nombre)
        }else{
            //throw new Error('No se aceptan elementos que no sean del tipo "Personal"')   
            console.log('NO se contrata a.......'+e.nombre);         
        }
    }
}
class Persona {
    constructor(name,age){
        this.nombre = name;
        this.edad = age;
    }
}
class Empleado extends Persona{
    constructor(nombre,edad,cargo,sueldo){
        super(nombre,edad);
        this.cargo = cargo;
        this.sueldo = sueldo;
    }
    programar(){
        console.log('Sé programar')
    }
}
var persona1 = new Persona ('Jorgito',44);
var empleado1 = new Empleado('Mary',33,'Developer Sr.',55000)
var empresa1 = new Empresa();
empresa1.contratar(empleado1);
empresa1.contratar(persona1); //-----> Arroja ERROR

console.log("\x1b[36m%s\x1b[0m", '2) Chequeo si el objeto implementa ciertos métodos');
class Compania {
    constructor(name){
        this.nombre = name;
        this.empleados = [];
    };
    contratar(e){
        if(e['programar'] && e['programar'] instanceof Function){
            this.empleados.push(e);
            console.log('Contratando a ......'+e.nombre);
        }else{
            console.log('NO se contrata a.......'+e.nombre);         
        }
    }
}
var compania1 = new Compania('MercadoPreso');
compania1.contratar(empleado1);
compania1.contratar(persona1);