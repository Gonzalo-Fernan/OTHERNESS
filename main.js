



const nombreAlumno = document.getElementById("nombre");
const botonAlumno = document.getElementById("botonPerfil");
const bajos = "bajos";
const medios = "medios";
const altos = "altos";

function ingresarExperiencia (experiencia){
   
   while (experiencia != " "){
      experiencia = prompt("Ingrese sus conocimientos de costura y confeccion, pueden ser bajos, medios o altos");
         if (experiencia === "bajos" || experiencia === "medios" || experiencia === "altos"){
            const maquina = prompt ("¿Tenes maquina de coser?");
            break;
         }
   }
}

botonAlumno.addEventListener("click", ingresarExperiencia);
