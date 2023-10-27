//calculadora de estadia

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

function saveForm(){
    localStorage.setItem("nombre", Reservas.nombre.value)
    localStorage.setItem("apellido", Reservas.apellido.value)
    localStorage.setItem("email", Reservas.email.value)
    localStorage.setItem("huespedes", Reservas.host.value)
    localStorage.setItem("dias", Reservas.cant.value)
    localStorage.setItem("departamento", dpts.reservado.value)
}
    

function Reservas(reserva) {
    this.nombre = reserva.nombre;
    this.apellido = reserva.apellido;
    this.email = reserva.email;
    this.host = reserva.host;
    this.cant = reserva.cant;
}

function calcularEstadia(totalCompra){
    let total=totalCompra * Reservas.cant;
    console.log("El costo total de su estadia sera de U$D"+ total);
    alert("El costo total de su estadia sera de U$D"+total); 
    }

let boton = document.getElementById("boton");

boton.onclick = function(){
    Reservas.nombre = document.getElementById("nombre").value;
    Reservas.apellido = document.getElementById("apellido").value;
    Reservas.email = document.getElementById("email").value;
    Reservas.host = document.getElementById("host").value;
    Reservas.cant = document.getElementById("cant").value;
    alert("Hola "+ Reservas.nombre + ' ' + Reservas.apellido)
    
    //isNaN(reserva.cant) && console.log("Ingrese el numero de huespedes y días");

    if(Reservas.host<=2){
        alert("Departamento para 1 o 2 personas"); 
        calcularEstadia(dpts[0].precio);
            dpts[0].reservado = confirm('Desea realizar la reserva?');
            console.log(dpts[0].reservado)
            alert(dpts[0].reservado)
    }else if(Reservas.host<=4){
        alert("Departamento para 3 o 4 personas");
        calcularEstadia(dpts[1].precio);
            dpts[1].reservado = confirm('Desea realizar la reserva?');
            console.log(dpts[1].reservado)
            alert(dpts[1].reservado)
    }else if(Reservas.host<=6){
        alert("Departamento para 5 o 6 personas");
        calcularEstadia(dpts[2].precio);
            dpts[2].reservado = confirm('Desea realizar la reserva?');
            console.log(dpts[2].reservado)
            alert(dpts[2].reservado)
    }else{
        alert("No contamos el departamento adecuado");
    }}
