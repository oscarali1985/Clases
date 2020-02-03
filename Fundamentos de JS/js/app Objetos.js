//objeto
const persona={
    nombre:'Oscar',
    apellido:'Marino',
    profesion: 'tecnico',
    edad:34,
    deportes: ['buceo', 'ajedres', 'natacion'],
    hogar:{
        ciudad:'Caracas',
        pais:'Venezuela'
    },
    fechaNacimiento: function(){
        return new Date().getFullYear()- this.edad
    }
}

console.log(persona.deportes);
persona.deportes.push('karate');
console.log(persona.deportes[2]);
console.log(persona.deportes);
persona.deportes.shift('A');
console.log(persona.deportes);
console.log(persona.hogar.pais);
console.log(persona['hogar']['ciudad']);
console.log(persona.fechaNacimiento());


const autos=[
    {modelo:'Grand Cherokee', motor:4.7},
    {modelo:'Ford Triton', motor:5.4},
    {modelo:'Super Escarabajo', motor:1.6},
    {modelo:'Aveo', motor:1.6},
];
console.log(autos);
console.log(autos.length);
for (let i = 0; i < autos.length; i++) {
    console.log(autos[i].modelo);
}

for (let i = 0; i < autos.length; i++) {
        console.log(`${autos[i].modelo} ${autos[i].motor}`);
}

