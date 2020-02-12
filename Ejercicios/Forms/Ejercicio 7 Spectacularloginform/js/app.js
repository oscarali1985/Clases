// registro =document.getElementsByName('formulario').innerText
// document.getElementById('app').

document.getElementById('registro').innerHTML="Registro";



$('.toggle').click(function(){
    let x=0;
    $('.formulario').animate(
        {height: "toggle",
         'padding-top':'toggle',
        'padding-bottom':'toggle',
        opacity:'toggle'
    },"slow");
    

    if(x==1){
        document.getElementById('registro').innerHTML="Registro";
        console.log("cambiando =1")
        x=0;
    }
    if(x==0){
        document.getElementById('registro').innerHTML="Inicio Sesion";
        x++;
        console.log("cambiando =0 "+x);
    }
});


