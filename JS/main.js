

const nombreAlumno = document.getElementById("nombre");      // esta es la variable para el input del nombre
const botonAlumno = document.getElementById("botonPerfil");  // esta es la variable para el boton que activa la funcion ingreasarExperiancia
const buscador = document.getElementById("buscar");    // variable que conecta con el input del buscador
const botonBuscar = document.getElementById("botonBuscar");  // boton para ejecutar la busqueda 

// variables para las opciones de conocimientos 
let conocimientosBajos = "ninguno";  
let conocimientosMedios = "medios"; 
let conocimientosAltos = "avanzados";

const cursosDisponibles =[
   {nombre:"molderia",
    id: 1,
    duracion: "6 meses",
    precio: 12325,
    nivel: "pincipiante"  
   },
   {nombre:"lenceria",
   id: 2,
   duracion: "6 meses",
   precio: 15320,
   nivel: "avanzado" 
   },
   {nombre:"costura",
   id: 3,
   duracion: "4 meses",
   precio: 11520,
   nivel: "principiante" 
   },
   {nombre:"molderia infantil",
   id: 4,
   duracion: "4 meses",
   precio: 15210,
   nivel: "medio" 
   },
   {nombre:"bordado",
   id: 5,
   duracion: "5 meses",
   precio: 9320,
   nivel: "principiante" 
   },
   {nombre:"bañador",
   id: 6,
   duracion: "3 meses",
   precio: 8220,
   nivel: "principiante" 
   }
]

function insertarCursoRecomendadoTelas (){  // esta es la funcion que inserta el workshop de telas en el html
   const contenedor = document.getElementById("contenedorRecomendaciones");
   const cursoRecomendado = document.createElement("div");
   contenedor.appendChild(cursoRecomendado);
   cursoRecomendado.innerHTML = `
         <div class="cursoAgregdo">
            <h2 class="tituloCurso">Workshop. Mundo de Telas</h2>
            <img src="../assets/images/CursoCosturasBasicas.webp" class="imgCursoTelas" alt="">
            <p class="descripcionCurso">En este curso aprenderás a diferenciar entre fibras y telas y reconocer en que caso es mas conveniente usar cada una y saber como tratarlas a la hora de la confección.</p>
            <button class="botonInscripcion" id="botonInscripcion">Inscribirme</button>
         </div>`;
}
function insertarCursoRecomendadoCosturasBasicas (){ // esta es la funcion que inserta el curso de costuras basicas y manejo de maquina en el html
   const contenedorCosturasBasicas = document.getElementById("contenedorRecomendaciones");
   const cursoRecomendadoCosturasBasicas = document.createElement("div");
   contenedorCosturasBasicas.appendChild(cursoRecomendadoCosturasBasicas);
   cursoRecomendadoCosturasBasicas.innerHTML = `
         <div class="cursoAgregdo">
            <h2 class="tituloCurso">Costuras Basicas y Manejo de Maquina</h2>
            <img src="../assets/images/CursoManejoMaquina.webp" class="imgCursoTelas" alt="">
            <p class="descripcionCurso">En este curso aprenderás el manejo correcto de la maquina de coser aplincandolo a costuras basicas que te serviran en futuros proyectos.</p>
            <button class="botonInscripcion" id="botonInscripcion">Inscribirme</button>
         </div>`;
}
function insertarCursoRecomendadoLenceria (){   // esta es la funcion que inserta el curso de Lenceria en el html
   const contenedorLenceria = document.getElementById("contenedorRecomendaciones");
   const cursoRecomendadoLenceria = document.createElement("div");
   contenedorLenceria.appendChild(cursoRecomendadoLenceria);
   cursoRecomendadoLenceria.innerHTML = `
         <div class="cursoAgregdo">
            <h2 class="tituloCurso">Lenceria</h2>
            <img src="../assets/images/CursoLenceria.webp" class="imgCursoTelas" alt="">
            <p class="descripcionCurso">En este curso aprenderás todos los secretos de la lenceria su confeccion y tipos de telas y como trabajarlas.</p>
            <button class="botonInscripcion" id="botonInscripcion">Inscribirme</button>
         </div>`;
}
function insertarCursoRecomendadoMolderia (){ // esta es la funcion que inserta el curso de Molderia en el html
   const contenedorMolderia = document.getElementById("contenedorRecomendaciones");
   const cursoRecomendadoMolderia = document.createElement("div");
   contenedorMolderia.appendChild(cursoRecomendadoMolderia);
   cursoRecomendadoMolderia.innerHTML = `
      <div class="cursoAgregdo">
         <h2 class="tituloCurso">Molderia</h2>
         <img src="../assets/images/molderia1.png" class="imgCursoTelas" alt="">
         <p class="descripcionCurso">En este curso aprenderás la molderia necesaria para llevar a cabo tus prendas y las progresiones de los talles.</p>
         <button class="botonInscripcion" id="botonInscripcion">Inscribirme</button>
      </div>`;
   
}
function buscar () {
   const buscado = cursosDisponibles.some(e => e.nombre === document.getElementById("buscar").value.toLowerCase());
   if (buscado){
      for (let index = 0; index < cursosDisponibles.length; index++) {
         if(cursosDisponibles[index].nombre === document.getElementById("buscar").value.toLowerCase()){
            document.getElementById("listaCursos").classList.remove("lista");
            document.getElementById("listaCursos").innerHTML = `
            <div class="itemCurso">
                  <input id="check" class="check" type="checkbox">
                  <li id="molderia" class="lenceria">Curso ${cursosDisponibles[index].nombre} y su precio es: ${cursosDisponibles[index].precio}</li>
                  <button class="masInfo">mas info...</button>
                  <div id="agregadoCarrito"></div>
               </div>`;
            }
         }
      }else {alert("Debes ingresar el nombre de un curso")}

   const check = document.getElementById("check");
  
   check.addEventListener("click", (e) => {
         if (check.checked) {
            for (let index = 0; index < cursosDisponibles.length; index++) {
               if(cursosDisponibles[index].nombre === document.getElementById("buscar").value.toLowerCase()){
                  let descuento = Math.ceil(cursosDisponibles[index].precio - (cursosDisponibles[index].precio * 10 / 100));
                  document.querySelector("#agregadoCarrito").innerHTML = `
                  <div class="seleccinado">
                     <p class ="agregar">Agregado este curso al carrito precio: $${cursosDisponibles[index].precio}</p>
                     <p id=>Si pagas con transferencia tiene descuento del 10% = $${descuento} </p>
                  </div>`;
                  let botonPagar = document.createElement("button");
                  botonPagar.classList = "botonPagar";
                  botonPagar.textContent = "Pagar";
                  document.getElementById("agregadoCarrito").appendChild(botonPagar);
                  let botonCancelar = document.createElement("button");
                  botonCancelar.classList = "botonCancelar";
                  botonCancelar.textContent = "Cancelar";
                  document.getElementById("agregadoCarrito").appendChild(botonCancelar);
                  botonCancelar.addEventListener("click", (e) => {
                     return location.reload()});
                  break;
               }
            }
            
      }else {buscar()}
   })   
}
function ingresarExperiencia () {
   JSON.stringify(sessionStorage.setItem("NombreAlumno", nombreAlumno.value))
   const contenedorInput = document.getElementById("contenedorInput");
   const contenedorExperiencia = document.createElement("div");
   contenedorExperiencia.className = "contenedorExperiencia" 
   contenedorInput.appendChild(contenedorExperiencia);
   if(nombreAlumno.value){
      contenedorExperiencia.innerHTML = `
      <div id="oculto">
      <label class="label" for="experiencia">${nombreAlumno.value} ingresa tu experiancia en molderia y confeccion:</label>
      <input id="experiencia" type="text" placeholder="puede ser ninguno, medios, avanzados">
      <label class="label" for="maquinaCoser">Cual es tu nivel de manejo de maquina de coser?</label>
      <input id="maquinaCoser" type="text" placeholder="puede ser ninguno, medio, avanzado">
      <button id="botonCalcular" class="botonCalcular" >Cacular Perfil</button>
      </div>`
   }
   const botonCalcular = document.getElementById("botonCalcular"); // boton calcular el perfil del alumno
   botonCalcular.addEventListener("click", mostarCursosRecomendados)
}
function mostarCursosRecomendados () {
   const experiencia = document.getElementById("experiencia");
   const maquinaCoser = document.getElementById("maquinaCoser");
   const tituloRecomendaciones = document.getElementById("tituloRecomendaciones")

   if (experiencia.value === conocimientosBajos && maquinaCoser.value === "ninguno"){
      insertarCursoRecomendadoTelas();
      insertarCursoRecomendadoCosturasBasicas();
      tituloRecomendaciones.innerHTML = `<p>A continuacion te mostramos los cursos que se ajustan más a tu experiencia</p>`;
   }
   if (experiencia.value === conocimientosBajos && maquinaCoser.value === "medio"){
      insertarCursoRecomendadoMolderia();
      insertarCursoRecomendadoCosturasBasicas();
      tituloRecomendaciones.innerHTML = `<p>A continuacion te mostramos los cursos que se ajustan más a tu experiencia</p>`;
   }
   if (experiencia.value === conocimientosBajos && maquinaCoser.value === "avanzado"){
      insertarCursoRecomendadoMolderia();
      insertarCursoRecomendadoLenceria();
      tituloRecomendaciones.innerHTML = `<p>A continuacion te mostramos los cursos que se ajustan más a tu experiencia</p>`;
   }
   if (experiencia.value === conocimientosMedios && maquinaCoser.value === "ninguno"){
      insertarCursoRecomendadoCosturasBasicas();
      tituloRecomendaciones.innerHTML = `<p>A continuacion te mostramos los cursos que se ajustan más a tu experiencia</p>`;
   }
   if (experiencia.value === conocimientosMedios && maquinaCoser.value === "medio"){
      insertarCursoRecomendadoTelas();
      insertarCursoRecomendadoMolderia();
      tituloRecomendaciones.innerHTML = `<p>A continuacion te mostramos los cursos que se ajustan más a tu experiencia</p>`;
   }
   if (experiencia.value === conocimientosMedios && maquinaCoser.value === "avanzado"){
      insertarCursoRecomendadoLenceria();
      tituloRecomendaciones.innerHTML = `<p>A continuacion te mostramos los cursos que se ajustan más a tu experiencia</p>`;
   }
   if (experiencia.value === conocimientosAltos && maquinaCoser.value === "ninguno"){
      insertarCursoRecomendadoLenceria();
      insertarCursoRecomendadoCosturasBasicas();
      tituloRecomendaciones.innerHTML = `<p>A continuacion te mostramos los cursos que se ajustan más a tu experiencia</p>`;
   }
   if (experiencia.value === conocimientosAltos && maquinaCoser.value === "medio"){
      insertarCursoRecomendadoLenceria();
      insertarCursoRecomendadoMolderia();
      tituloRecomendaciones.innerHTML = `<p>A continuacion te mostramos los cursos que se ajustan más a tu experiencia</p>`;
   }
   if (experiencia.value === conocimientosAltos && maquinaCoser.value === "avanzado"){
      insertarCursoRecomendadoLenceria();
      tituloRecomendaciones.innerHTML = `<p>A continuacion te mostramos los cursos que se ajustan más a tu experiencia</p>`;
   }
}

// este es el evento click asociado al boton que inicia la funcion ingresarExperiencia
botonAlumno.addEventListener("click", ingresarExperiencia); 
//este boton activa el evento buscar para que muestre el resultado de la busqueda
botonBuscar.addEventListener("click", buscar);
// al presionar Escape hacermos que se recatgue la pagina limpando la lista y el campo de busqueda
document.addEventListener("keyup", (e) =>{ 
   if(e.code === "Escape"){
      location.reload()
   }
});
// al presionar Enter que se ejecute la funcion buscar para que sea otra alternativa al boton buscar
buscador.addEventListener("keydown", (e) =>{
   if(e.code === "Enter"){
      buscar();
}
});

