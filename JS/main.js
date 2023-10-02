

const nombreAlumno = document.getElementById("nombre");      // esta es la variable para el input del nombre
const botonAlumno = document.getElementById("botonPerfil");  // esta es la variable para el boton que activa la funcion ingreasarExperiancia


//const botonInscripcion = document.getElementById("botonInscripcion");

// variables para las opciones de conocimientos 
let conocimientosBajos = "ninguno";  
let conocimientosMedios = "medios"; 
let conocimientosAltos = "avanzados";

//objetos (cursos)   
class Curso { 
   constructor (id, duracion, precio, nivel){  //constructor de objetos Curso para crear un objeto nuevo de cada curso con sus atributos
      this.id = id;
      this.duracion = duracion;
      this.precio = precio;
      this.nivel = nivel;
      }
}

const cursoMolderia = new Curso(1,"6 meses",12000, "pricipiante");
const cursoLenceria = new Curso(2,"6 meses",15000,"avanzado");
const cursoCosturasBasicas = new Curso(3,"4 meses",11000,"principiante");
const cursoRopaInfantil = new Curso(4,"4 meses", 15000,"medio");
const cursoTelas = new Curso(5, "5 meses", 9000, "principiante")

const precios =[] //array que acumula los precios de los cursos seleccionados 
console.log(cursoMolderia.precio);

//Declaracion de funciones
function total (){ // esta es la funcion que suma todos los valores que contiene el array precios, devuelte el total de los precios
   const sumaPrecios = precios.reduce((acumulador, valor) => acumulador + valor, 0); 
   console.log(sumaPrecios);
}
function insertarCursoRecomendadoTelas (){  // esta es la funcion que inserta el workshop de telas en el html
   const contenedorInterno = document.getElementById("contenedorInput")
   const recomendacion = document.createElement("p");
   contenedorInterno.appendChild(recomendacion);
   recomendacion.className = "recomendacion"
   recomendacion.textContent = "Estos son los cursos que se ajustan más a tus conocimientos:" 
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
   botonCurso.id = "botonInscripcion";
   botonCurso.textContent = "Inscribirme";
   cursoRecomendado.className = "cursoAgregdo";
   imagenCurso.src = "../assets/images/CursoCosturasBasicas.webp";
   imagenCurso.className = "imgCursoTelas";
   tituloCurso.textContent = "Workshop. Mundo de Telas";
   tituloCurso.className = "tituloCurso";
   botonCurso.addEventListener("click", () => {precios.push(cursoTelas.precio); console.log(precios);})
}
function insertarCursoRecomendadoCosturasBasicas (){ // esta es la funcion que inserta el curso de costuras basicas y manejo de maquina en el html
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
   imagenCursoCosturasBasicas.className = "imgCursoTelas";
   tituloCursoCosturasBasicas.textContent = "Costuras Basicas y Manejo de Maquina";
   tituloCursoCosturasBasicas.className = "tituloCurso";
   botonCursoCosturasBasicas.addEventListener("click", () => {precios.push(cursoCosturasBasicas.precio); console.log(precios);})
}
function insertarCursoRecomendadoLenceria (){   // esta es la funcion que inserta el curso de Lenceria en el html
   const contenedorLenceria = document.getElementById("contenedorRecomendaciones");
   const cursoRecomendadoLenceria = document.createElement("div");
   const imagenCursoLenceria = document.createElement("img");
   const tituloCursoLenceria = document.createElement("h2");
   const botonCursoLenceria = document.createElement ("button");
   const cursoDescripcionLenceria = document.createElement("p");
   contenedorLenceria.appendChild(cursoRecomendadoLenceria);
   cursoRecomendadoLenceria.appendChild(tituloCursoLenceria);
   cursoRecomendadoLenceria.appendChild(imagenCursoLenceria);
   cursoRecomendadoLenceria.appendChild(cursoDescripcionLenceria);
   cursoRecomendadoLenceria.appendChild(botonCursoLenceria);
   cursoDescripcionLenceria.textContent ="En este curso aprenderás todos los secretos de la lenceria su confeccion y tipos de telas y como trabajarlas"
   cursoDescripcionLenceria.className = "descripcionCurso"
   botonCursoLenceria.className = "botonInscripcion";
   botonCursoLenceria.textContent = "Inscribirme";
   cursoRecomendadoLenceria.className = "cursoAgregdo";
   imagenCursoLenceria.src = "../assets/images/CursoLenceria.webp";
   imagenCursoLenceria.className = "imgCursoTelas";
   tituloCursoLenceria.textContent = "Lenceria";
   tituloCursoLenceria.className = "tituloCurso";
}
function insertarCursoRecomendadoMolderia (){ // esta es la funcion que inserta el curso de Molderia en el html
   const contenedorMolderia = document.getElementById("contenedorRecomendaciones");
   const cursoRecomendadoMolderia = document.createElement("div");
   const imagenCursoMolderia = document.createElement("img");
   const tituloCursoMolderia = document.createElement("h2");
   const botonCursoMolderia = document.createElement ("button");
   const cursoDescripcionMolderia = document.createElement("p");
   contenedorMolderia.appendChild(cursoRecomendadoMolderia);
   cursoRecomendadoMolderia.appendChild(tituloCursoMolderia);
   cursoRecomendadoMolderia.appendChild(imagenCursoMolderia);
   cursoRecomendadoMolderia.appendChild(cursoDescripcionMolderia);
   cursoRecomendadoMolderia.appendChild(botonCursoMolderia);
   cursoDescripcionMolderia.textContent ="En este curso aprenderás la molderia necesaria para llevar a cabo tus prendas y las progresiones de los talles"
   cursoDescripcionMolderia.className = "descripcionCurso"
   botonCursoMolderia.className = "botonInscripcion";
   botonCursoMolderia.textContent = "Inscribirme";
   cursoRecomendadoMolderia.className = "cursoAgregdo";
   imagenCursoMolderia.src = "../assets/images/molderia1.png";
   imagenCursoMolderia.className = "imgCursoTelas";
   tituloCursoMolderia.textContent = "Molderia";
   tituloCursoMolderia.className = "tituloCurso";
}
function ingresarExperiencia (experiencia){ //Esta es la funcion que activa los prompt para que el usuario nos diga su experiencia
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
               if (experiencia === conocimientosBajos && maquinaCoser === "ninguno"){
                  insertarCursoRecomendadoTelas();
                  insertarCursoRecomendadoCosturasBasicas();
                  break;
               }
               if (experiencia === conocimientosBajos && maquinaCoser === "medio"){
                  insertarCursoRecomendadoMolderia();
                  insertarCursoRecomendadoCosturasBasicas();
                  break;
               }
               if (experiencia === conocimientosBajos && maquinaCoser === "avanzado"){
                  insertarCursoRecomendadoMolderia();
                  insertarCursoRecomendadoLenceria();
                  break;
               }
               if (experiencia === conocimientosMedios && maquinaCoser === "ninguno"){
                  insertarCursoRecomendadoCosturasBasicas();
                  break;
               }
               if (experiencia === conocimientosMedios && maquinaCoser === "medio"){
                  insertarCursoRecomendadoTelas();
                  insertarCursoRecomendadoMolderia();
                  break;
               }
               if (experiencia === conocimientosMedios && maquinaCoser === "avanzado"){
                  insertarCursoRecomendadoLenceria();
                  break;
               }
               if (experiencia === conocimientosAltos && maquinaCoser === "ninguno"){
                  insertarCursoRecomendadoLenceria();
                  insertarCursoRecomendadoCosturasBasicas();
                  break;
               }
               if (experiencia === conocimientosAltos && maquinaCoser === "medio"){
                  insertarCursoRecomendadoLenceria();
                  insertarCursoRecomendadoMolderia();
                  break;
               }
               if (experiencia === conocimientosAltos && maquinaCoser === "avanzado"){
                  insertarCursoRecomendadoLenceria();
                  break;
               }
               }else {
                  alert ("Debes ingresar uno de los 3 valores permitidos: ninguno, medio, avanzado")
               }   
         }else{
            alert ("Debes ingresar uno de los 3 valores permitidos: ninguno, medios o avanzados");}
   }
}

botonAlumno.addEventListener("click", ingresarExperiencia); // este es el evento click asociado al boton que inicia la funcion ingresarExperiencia
