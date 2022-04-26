console.log('JavaScript Initialized');

var edad;

function edad18(){
    edad = prompt('Digite su edad');
    if(edad >= 18){
        console.log('es menor de edad');

    } else{
        console.log( 'es menor de edad');
    }
}


function edad21(){
    edad= prompt('Digite su edad');
   if ( edad >= 21){
       console.log('es mayor de edad en todo el mundo');
         
 } else{
     if( edad >= 18){
         console.log('es mayor de edad en Costa Rica');
         
        } else{
            console.log(' es menor de edad');
        }
 }
}


edad21();

function ropa(){
    prenda = prompt('ingrese la cantidad de ropa');
    if (prenda >= 30){
        console.log('descuento de 25%');  
    } else if (prenda >= 15) {
     console.log('descuento de 5%');

 } else {
     console.log('descuento de 5%');

 }

}

ropa();
// edad18();
// edad21();








function ropa() {

prenda= prompt('ingrese la cantidad de ropa');
console.log(' cantidad de ropa: ' + prenda);

if ( prenda >= 30) {
    console.log(' el descuento es de 25%');
    desc = prenda * 0.25;
} else if (prenda >= 15) {
    console.log('el descuento es de 15%');
    desc = prenda * 0.15;

} else {
    console.log('el descuento es de 5%');
    desc = prenda * 0.05

}

console.log('la cantidad de ropa es de: ' + desc);
total = prenda - desc;
console.log('el monto a pagar es de: ' + total);


}


ropa();
// edad18();
// edad18();















