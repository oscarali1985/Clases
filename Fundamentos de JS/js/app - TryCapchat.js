
function descuento(a,b){
    return (a+b)*.50;
}

let total;

total=descuento(3500,1500)
console.log(`descuento del 50% bs. ${total}`)


function saludar(nombre){
    console.log(`Hola ${nombre}`);
}

saludar('a');
saludar('b');
saludar('c');
saludar('d');
saludar('e');
saludar('f');
saludar('g');
saludar('h');
saludar('i');
//para que la funcion no se ejecute automaticamente se le quita los parentesis

function saluda(nombre){
    if(typeof nombre==='undefined'){nombre='Usuario'}
    return `Hola ${nombre} Bienvenido a clase`;
    
}
let saludo =saluda();
console.log(saludo);

function saludar(nombre='Alumno'){
    
    return `Hola ${nombre} Bienvenido a clase`;
    
}
saludo =saludar('Oscar');
console.log(saludo);

const suma = function(a=7,b=6){
    return a + b;
}
console.log(suma(4,9));
console.log(suma(8));
console.log(suma(30));
console.log(suma());

//metidi

try{
    obtenercliente();
}
catch(error){
    console.log(error);
}finally{
    console.log('Fnally siempre se ejecuta')
}



function obtenercliente(){
    console.log('Descagando...');

    setTimeout(function(){
        console.log('Completado')
    },3000)
}


