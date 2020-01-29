
// Primera Prueba
let nombre = prompt("Ingrese su nombre");
let edad = prompt("Ingrese su edad");
/* alt 96 para `` */

document.getElementById('app').innerHTML = ` Bienvenidos a 4Geeks ${nombre} tu tienes ${edad} haz iniciado el curso de programacion full-stack con nosotros`


console.log('El nombre ingresado es '+nombre+' y su edad '+ edad);
//  Prueba
confirm ('Desea borrar el articulo');



alert('Hola');

//  Prueba

/* con document traemos todo DOM*/
document
/*Nos trae el primero que encuentre*/
document.querySelector('h1');
/* Nos trae todos los elementos */
document.querySelectorAll('h2');

//  Prueba

/*Arreglo */
console.log([1,2,3]);
console.error("Hola Mundo");
console.warn("Hola Mundo");

/**   Otro mas */
console.error("Hola Mundo");
console.warn("Hola Mundo");
console.time('Hola');console.warn('Hay un error');console.warn('Hay un error');console.warn('Hay un error');console.warn('Hay un error');console.warn('Hay un error');console.warn('Hay un error');console.warn('Hay un error');console.warn('Hay un error');console.warn('Hay un error');console.warn('Hay un error');console.warn('Hay un error');console.warn('Hay un error');console.warn('Hay un error');console.warn('Hay un error');console.warn('Hay un error');console.warn('Hay un error');console.warn('Hay un error');console.timeEnd('Hola');
/**   Otro mas */

let carrito;
carrito="libro";
carrito="zapato";

console.log(carrito);

//  Prueba

/*Crear Variables */

let primerNombre = 'Juan' //camilcase Usar preferiblmente
let primer_nombre = 'Juan' //undercore
let PrimerNombre = 'Juan' //pascalcase

console.log(primerNombre,primer_nombre);


//  Prueba

let aprendiendo = "aprendiendo";

console.log(aprendiendo.length);

//  Prueba

let tecnologia = 'JavaScript';

console.log(tecnologia.concat('es genial'));

//  Prueba
let tecnologia = 'JavaScript';

console.log(tecnologia.toUpperCase());
console.log(tecnologia.toLowerCase());

//  Prueba
/** Buscar en una cadena */

let mensaje= 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.';

console.log(mensaje.indexOf('adipisicing'));

/** Tomar y buscar desde una posicion hasta */

let mensaje= 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.';

console.log(mensaje.substring(0,11));
/**porcion  */
console.log(mensaje.slice(11));
console.log(mensaje.slice(-8));
/**Convierte el string en arreglo dentro del  */
console.log(mensaje.split(''));

/* Reemplaza el valor 1 x 2*/
console.log(mensaje.replace('dolor','gustar'));


/*Esta dentro */
console.log(mensaje.includes('dolor'));

/*Repite mensaje */
console.log(mensaje.repeat(22));

/**Numero */
/* */


/* */

//nos identifica el tipo de valor
console.log(typeof valor);