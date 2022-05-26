var input_form = document.getElementById("myForm");



var informacion={
    "nombre":"", //string
    "color":"", //string 
}

input_form.addEventListener("submit", function(event) {

event.preventDefault();
    var nombre = document.getElementById("id_input").value;
    var color = document.getElementById("id_color").value;

    informacion.nombre=nombre; 
    informacion.color=color;
   
    console.log(informacion);

})