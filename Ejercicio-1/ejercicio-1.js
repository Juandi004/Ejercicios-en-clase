'use strict'

let edad=Number(prompt("Introduzca su edad"));
let licenciaProfesional=prompt("¿Tiene una licencia de conducir profesional?");

if(licenciaProfesional==="si"||licenciaProfesional==="Si"){
    licenciaProfesional=true;
}
else{
    licenciaProfesional=false;
}

if((edad>=25)&&(licenciaProfesional===true)){
    alert("Apto");
}
else{
    alert("No apto");
}

    


