//calculadora de estadia

alert("Desea calcular el costo de su estadía? (los valores son expresados en Dolares)");

let total;
let continua;
let personas;
let dias;
let valres;
let reservadpt;
const dpts = [
    {id:1, precio:100, reservado: false, fecha:new Date()},
    {id:2, precio:110, reservado: false, fecha:new Date()},
    {id:3, precio:140, reservado: false, fecha:new Date()}
    ];

function Reservas(reserva) {
    this.nombre = reserva.nombre;
    this.apellido = reserva.apellido;
    this.email = reserva.email;
    this.msg = function(){alert('Hola '+this.nombre+' '+this.apellido+
    ' en instantes le enviaremos un email para finalizar la reserva, Gracias!')}
}

function calcularEstadia(totalCompra){
let total=totalCompra * dias;
console.log("El costo total de su estadia sera de U$D"+ total);
alert("El costo total de su estadia sera de U$D"+total); 
}

do{
    personas= parseInt(prompt('Ingrese la cantidad de personas que se van a hospedar'));  
if(personas<=2){
    dias= parseInt(prompt('Ingrese la cantidad de dias'));
    alert("departamento para 1 o 2 personas"); 
    calcularEstadia(dpts[0].precio);
    valres= prompt('Desea realizar la reserva? s-si n-no');
        if (valres='s')
        {dpts[0].reservado=true}
}else if(personas<=4){
    dias= parseInt(prompt('Ingrese la cantidad de dias'));
    alert("departamento para 3 o 4 personas");
    calcularEstadia(dpts[1].precio);
    valres= prompt('Desea realizar la reserva? s-si n-no');
        if (valres='s')
        {dpts[1].reservado=true}
}else if(personas<=6){
    dias= parseInt(prompt('Ingrese la cantidad de dias'));
    alert("departamento para 5 o 6 personas");
    calcularEstadia(dpts[2].precio);
    valres= prompt('Desea realizar la reserva? s-si n-no');
        if (valres='s')
        {dpts[2].reservado=true}
}else{
    alert("No contamos el departamento adecuado");
}continua = prompt("Desea calcular nuevamente? s-si n-no")}while(continua == 's');


if (valres == 's'){
    alert('Por favor ingrese sus datos acontinuacion para realizar su reserva');
    reservadpt = new Reservas({ 
        nombre:prompt('Ingrese su nombre'),
        apellido:prompt('Ingrese su apellido'),
        email:prompt('Ingrese su email'),
    })

}

reservadpt.msg();

const cerrado = dpts.find(precio => precio.reservado === true)
console.log(cerrado)