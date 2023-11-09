'use strict'

let promedio=Number(prompt("Introduzca su promedio"));
let ingresoFamiliar=Number(prompt("Introduzca la cantidad en $ de sus ingresos mensuales familiares"));

if(promedio>=8.5&&ingresoFamiliar<=600){
    alert("Aprobado");
}
else{
    alert("Desaprobado");
}