//calculadora de estadia

alert("Desea calcular el costo de su estadía? (los valores on expresados en Dolares)");

const dpto1=100;
const dpto2=110;
const dpto3=140;
let total;
let continua;
let personas;
let dias;

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
    calcularEstadia(dpto1);     
}else if(personas<=4){
    dias= parseInt(prompt('Ingrese la cantidad de dias'));
    alert("departamento para 3 o 4 personas");
    calcularEstadia(dpto2);
}else if(personas<=6){
    dias= parseInt(prompt('Ingrese la cantidad de dias'));
    alert("departamento para 5 o 6 personas");
    calcularEstadia(dpto3);
}else{
    alert("No contamos el departamento adecuado");
}continua = prompt("Desea calcular nuevamente? s-si n-no")}while(continua == 's');
