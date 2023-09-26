

const nombreAlumno = document.getElementById("nombre");      // esta es la variable para el input del nombre
const botonAlumno = document.getElementById("botonPerfil");  // esta es la variable para el boton que activa la funcion ingreasarExperiancia

// variables para las opciones de conocimientos 
let conocimientosBajos = "ninguno";  
let conocimientosMedios = "medios"; 
let conocimientosAltos = "avanzados";

function insertarCursoRecomendadoTelas (){  // esta es la funcion que inserta un curso de en el html
   const contenedorInterno = document.getElementById("contenedorInput")
   const recomendacion = document.createElement("p");
   contenedorInterno.appendChild(recomendacion);
   recomendacion.className = "recomendacion"
   recomendacion.textContent = "Estos son los cursos que se ajustan mas a tus conocimientos:" 
   const contenedor = document.getElementById("contenedorRecomendaciones");
   const cursoRecomendado = document.createElement("div");
   const imagenCurso = document.createElement("img");
   const tituloCurso = document.createElement("h2");
   const botonCurso = document.createElement ("button");
   const cursoDescripcion = document.createElement("p");
   contenedor.appendChild(cursoRecomendado);
   cursoRecomendado.appendChild(tituloCurso);
   cursoRecomendado.appendChild(imagenCurso);
   cursoRecomendado.appendChild(cursoDescripcion);
   cursoRecomendado.appendChild(botonCurso);
   cursoDescripcion.textContent ="En este curso aprenderás a diferenciar entre fibras y telas y reconocer en que caso es mas conveniente usar cada una y saber como tratarlas a la hora de la confección."
   cursoDescripcion.className = "descripcionCurso"
   botonCurso.className = "botonInscripcion";
   botonCurso.textContent = "Inscribirme";
   cursoRecomendado.className = "cursoAgregdo";
   imagenCurso.src = "../assets/images/CursoCosturasBasicas.webp";
   imagenCurso.className = ("imgCursoTelas");
   tituloCurso.textContent = "Workshop. Mundo de Telas";
   tituloCurso.className = "tituloCurso";
}
function insertarCursoRecomendadoCosturasBasicas (){
   const contenedorCosturasBasicas = document.getElementById("contenedorRecomendaciones");
   const cursoRecomendadoCosturasBasicas = document.createElement("div");
   const imagenCursoCosturasBasicas = document.createElement("img");
   const tituloCursoCosturasBasicas = document.createElement("h2");
   const botonCursoCosturasBasicas = document.createElement ("button");
   const cursoDescripcionCosturasBasicas = document.createElement("p");
   contenedorCosturasBasicas.appendChild(cursoRecomendadoCosturasBasicas);
   cursoRecomendadoCosturasBasicas.appendChild(tituloCursoCosturasBasicas);
   cursoRecomendadoCosturasBasicas.appendChild(imagenCursoCosturasBasicas);
   cursoRecomendadoCosturasBasicas.appendChild(cursoDescripcionCosturasBasicas);
   cursoRecomendadoCosturasBasicas.appendChild(botonCursoCosturasBasicas);
   cursoDescripcionCosturasBasicas.textContent ="En este curso aprenderás el manejo correcto de la maquina de coser aplincandolo a costuras basicas que te serviran en futuros proyectos."
   cursoDescripcionCosturasBasicas.className = "descripcionCurso"
   botonCursoCosturasBasicas.className = "botonInscripcion";
   botonCursoCosturasBasicas.textContent = "Inscribirme";
   cursoRecomendadoCosturasBasicas.className = "cursoAgregdo";
   imagenCursoCosturasBasicas.src = "../assets/images/CursoManejoMaquina.webp";
   imagenCursoCosturasBasicas.className = ("imgCursoTelas");
   tituloCursoCosturasBasicas.textContent = "Costuras Basicas y Manejo de Maquina";
   tituloCursoCosturasBasicas.className = "tituloCurso";
}
//function

//Esta es la funcion que activa los prompt para que el usuario nos diga su experiencia
function ingresarExperiencia (experiencia){
   if (nombreAlumno.value === ""){ //condicional para la validacion del nombre, se debe ingresar un nombre para continuar
      alert("Para continuar debes ingresar un nombre");
   }
   while (nombreAlumno.value != ""){ // bucle que se activa al ingresar el nombre en el campo del input

      experiencia =  prompt("¿" + nombreAlumno.value + ", que conocimientos tienes de Molderia y Confeccion?, Debes ingresar: ninguno, medios, avanzados").toLowerCase(); 

      if (experiencia === conocimientosBajos || experiencia === conocimientosMedios || experiencia === conocimientosAltos){ 
            let maquinaCoser = prompt("Cual es tu nivel de manejo de maquina de coser: Ninguno, Medio, Avanzado? ").toLowerCase();
            if(maquinaCoser === "ninguno" || maquinaCoser === "medio" || maquinaCoser === "avanzado"){
               alert ("A continuacion, te sugerimos los siguientes cursos en base a tus conocimientos");
               // aca van los cursos agregados al html gusrdados en una funcion
               insertarCursoRecomendadoTelas();
               insertarCursoRecomendadoCosturasBasicas();
               break;
               }else {
                  alert ("Debes ingresar uno de los 3 valores permitidos: ninguno, medio, avanzado")
               }   
         }else{
            alert ("Debes ingresar uno de los 3 valores permitidos: ninguno, medios o avanzados");}
   }
}


botonAlumno.addEventListener("click", ingresarExperiencia); // este es el evento click asociado al boton que inicia la funcion ingresarExperiencia
