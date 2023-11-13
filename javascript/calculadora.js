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

const dpts2 = { ...dpts};
console.log (dpts2);


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
    Swal.fire({
    title: "Hola "+ Reservas.nombre +" "+ Reservas.apellido,
    text:"El costo total de su estadía de "+Reservas.cant+" días para "+Reservas.host+" personas será de U$D"+total+", Desea confirmar la reserva?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Si',
    denyButtonText: 'No',
    customClass: {
        actions: 'my-actions',
        cancelButton: 'order-1 right-gap',
        confirmButton: 'order-2',
        denyButton: 'order-3',
      }
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire("Muchas gracias por su confirmación!, a continuacion le enviaremos un mail para finalizar la reserva");
        } else if (result.isDenied) {
            Swal.fire("Desea relizar el calculo nuevamente?");
        }
      })
   }
    
    let boton = document.getElementById("boton");
    boton.addEventListener("click", guardarRes);

    function guardarRes(){
        Reservas.nombre = document.getElementById("nombre").value;
        Reservas.apellido = document.getElementById("apellido").value;
        Reservas.email = document.getElementById("email").value;
        Reservas.host = document.getElementById("host").value;
        Reservas.cant = document.getElementById("cant").value;

        if(Reservas.host<=2){
            calcularEstadia(dpts[0].precio);
            resConf=dpts[0].reservado;
            saveForm();
            console.log(resConf)
        }else if(Reservas.host<=4){
            calcularEstadia(dpts[1].precio);
            resConf=dpts[1].reservado;
            saveForm();
            console.log(resConf)
        }else if(Reservas.host<=6){
            calcularEstadia(dpts[2].precio);
            resConf=dpts[2].reservado;
            saveForm();
            console.log(resConf)
        }else{
            Swal.fire("No contamos el departamento adecuado, solo contamos con departamentos hasta 6 personas");
        }
            
 }


