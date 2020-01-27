/*
Instrucciones:
Programáticamente, cambie el cuarto número de la suerte de John Doe a 33 (use un comando, no cambie manualmente el código)
Programáticamente, cree una nueva persona y agréguela al objeto familiar . Jimmy Doe, 13, masculino, números de la suerte: 1, 2, 3, 4; otro significativo: nulo. (use un comando, no cambie el código manualmente)
Ahora imprima ( console.log () ) la SUMA de todos los números de la suerte de la familia Doe .

Consejos:
Puede obtener cada conjunto de números de la suerte de cada objeto de persona dentro del objeto familiar .
Una vez que obtenga cada matriz, simplemente repítala agregando cada elemento (como lo hemos estado haciendo hasta ahora). Y luego agregue cada suma de los 3 miembros de la familia.
Nulo es también un objeto.
*/

var person = {
    name: "John",                    //String
    lastname: "Doe",
    age: 35,                         //Number
    gender: "male",
    lucky_numbers: [ 7, 11, 13, 17], //Array
    significant_other: person2       //Object, yes the same variable/object defined after
};

var person2 = {
    name: "Jane",
    lastname: "Doe",
    age: 38,
    gender: "female",
    lucky_numbers: [ 2, 4, 6, 8],
    significant_other: person
};

//Little Jimmy's object

var family = {
    lastname: "Doe",
    members: [person, person2]       //Array of objects, don't forget to add Jimmy
};


function addAllFamilyNumbers(doeFamily){
  var sumOfAllLuckyNumbers = 0; //sumOfAllLuckyNumbers is a number, the sum of all lucky numbers.
  
  //To-Do: loop and add
  //Hint: use the doeFamily variable to get all of the lucky numbers
  
  return sumOfAllLuckyNumbers;
}

//console.log(addAllLuckyNumbers(); 