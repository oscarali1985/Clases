const metodoPago="tarjeta";

switch(metodoPago){

    case 'efectivo':
        console.log(`El usuario pago con ${metodoPago}`);
        break;
    case 'cheque':
        console.log(`El usuario pago con ${metodoPago}`);
        break;
    case 'tarjeta':
            console.log(`El usuario pago con ${metodoPago}`);
            break;
    default:
        console.log('Metodo de pago no soportado');
        break;
}


let dia=new Date().getDay()

if(dia==0){
    dia='Domingo';
}else if(dia==1){
    dia='Lunes';
}else if(dia==2){
    dia='Martes';
}else if(dia==3){
    dia='Miercoles';
}else if(dia==4){
    dia='Jueves';
}else if(dia==5){
    dia='Viernes';
}else if(dia==6){
    dia='Sabado';
}

console.log(`Hoy es ${dia}`);

let sdia=new Date().getDay()

switch(sdia){

    case 0:
        console.log(`Domingo`);
        break;
    case 1:
        console.log(`Lunes`);
        break;
    case 2:
        console.log(`Martes`);
        break;
    case 3:
            console.log(`Miercoles`);
            break;
    case 4:
            console.log(`Jueves`);
            break;
    case 5:
            console.log(`Viernes`);
            break;
    case 6:
            console.log(`Sabado`);
            break;


    default:
        console.log('dia no existe');
        break;
}



var bulletPosition = 3;



