//calculadora de estadia

let total=0;
let resConf;
const dpts = [
    {id:1, precio:100, reservado: false},
    {id:2, precio:110, reservado: false},
    {id:3, precio:140, reservado: false}
    ];
let reserva =[
    localStorage.getItem("nombre", Reservas.nombre),
    localStorage.getItem("apellido", Reservas.apellido),
    localStorage.getItem("email", Reservas.email),
    localStorage.getItem("huespedes", Reservas.host),
    localStorage.getItem("dias", Reservas.cant),
    localStorage.getItem("costo", total),
    localStorage.getItem("departamento", resConf)
    ];

const reservaJSON = JSON.stringify(reserva);
console.log(reserva)
console.log(reservaJSON)

function saveForm(){
    localStorage.setItem("nombre", Reservas.nombre)
    localStorage.setItem("apellido", Reservas.apellido)
    localStorage.setItem("email", Reservas.email)
    localStorage.setItem("huespedes", Reservas.host)
    localStorage.setItem("dias", Reservas.cant)
    localStorage.setItem("costo", total)
    localStorage.setItem("departamento", resConf)
}    

function Reservas(reserva) {
    this.nombre = reserva.nombre;
    this.apellido = reserva.apellido;
    this.email = reserva.email;
    this.host = reserva.host;
    this.cant = reserva.cant;
}

function calcularEstadia(totalCosto){
    total=totalCosto * Reservas.cant;
    console.log("El costo total de su estadia sera de U$D"+ total);
    alert("El costo total de su estadia sera de U$D"+total); 
    }


let boton = document.getElementById("boton");

boton.addEventListener("click", guardarRes);

function guardarRes(){
    Reservas.nombre = document.getElementById("nombre").value;
    Reservas.apellido = document.getElementById("apellido").value;
    Reservas.email = document.getElementById("email").value;
    Reservas.host = document.getElementById("host").value;
    Reservas.cant = document.getElementById("cant").value;
    alert("Hola "+ Reservas.nombre + ' ' + Reservas.apellido)
    
    if(Reservas.host<=2){
        alert("Departamento para 1 o 2 personas"); 
        calcularEstadia(dpts[0].precio);
            dpts[0].reservado = confirm('Desea realizar la reserva?');
            resConf=dpts[0].reservado;
                saveForm();
    }else if(Reservas.host<=4){
        alert("Departamento para 3 o 4 personas");
        calcularEstadia(dpts[1].precio);
            dpts[1].reservado = confirm('Desea realizar la reserva?');
            resConf=dpts[1].reservado;
                saveForm();
    }else if(Reservas.host<=6){
        alert("Departamento para 5 o 6 personas");
        calcularEstadia(dpts[2].precio);
            dpts[2].reservado = confirm('Desea realizar la reserva?');
            resConf=dpts[2].reservado;
                saveForm();
    }else{
        alert("No contamos el departamento adecuado");
    }
}

