

const nombreAlumno = document.getElementById("nombre");      // esta es la variable para el input del nombre
const botonAlumno = document.getElementById("botonPerfil");  // esta es la variable para el boton que activa la funcion ingreasarExperiancia
const buscador = document.getElementById("buscar");    // variable que conecta con el input del buscador
const botonBuscar = document.getElementById("botonBuscar");  // boton para ejecutar la busqueda 


// variables para las opciones de conocimientos 
let conocimientosBajos = "ninguno";  
let conocimientosMedios = "medios"; 
let conocimientosAltos = "avanzados";

const cursosDisponibles =[//array de objetos de los cursos dispoonibles 
   {nombre:"molderia",
    id: 1,
    duracion: "6 meses",
    precio: 12325,
    nivel: "pincipiante", 
    thumbnail: "../assets/images/molderia1.png",
    descripcion: "En este curso aprenderás la molderia necesaria para llevar a cabo tus prendas y las progresiones de los talles"
   },
   {nombre:"lenceria",
   id: 2,
   duracion: "6 meses",
   precio: 15320,
   nivel: "avanzado", 
   thumbnail: "../assets/images/CursoLenceria.webp",
   descripcion: "En este curso aprenderás todos los secretos de la lenceria su confeccion y tipos de telas y como trabajarlas."
   },
   {nombre:"costura",
   id: 3,
   duracion: "4 meses",
   precio: 11520,
   nivel: "principiante",
   thumbnail: "../assets/images/CursoCosturasBasicas.webp",
   descripcion: "En este curso aprenderás el manejo correcto de la maquina de coser aplincandolo a costuras basicas que te serviran en futuros proyectos."
   },
   {nombre:"molderia infantil",
   id: 4,
   duracion: "4 meses",
   precio: 15210,
   nivel: "medio",
   thumbnail: "../assets/images/CursoRopaBebe.webp",
   descripcion: "En este curso aprenderás la molderia optimizada para talles infantiles y sus respectivas progresiones" 
   },
   {nombre:"bordado",
   id: 5,
   duracion: "5 meses",
   precio: 9320,
   nivel: "principiante",
   thumbnail: "../assets/images/CursoBordadoEnHilo.webp",
   descripcion: "En este curso aprenderas a bordar de una forma rapida y tu unico limite sera la imaginacion" 
   },
   {nombre:"bañador",
   id: 6,
   duracion: "3 meses",
   precio: 8220,
   nivel: "medio",
   thumbnail: "../assets/images/baniador.jpg",
   descripcion: "En este curso aprenderas la molderia y la confeccion de piezas de baño con todo adaptado a telas especiales y sus metodos de trabajo"
   },
   {nombre:"telas",
   id: 7,
   duracion: "2 meses",
   precio: 6000,
   nivel: "principiante",
   thumbnail: "../assets/images/fotoSobreNosotros.webp",
   descripcion: "En este curso aprenderás a diferenciar entre fibras y telas y reconocer en que caso es mas conveniente usar cada una y saber como tratarlas a la hora de la confección."
   }
]
function mostrar () {
   const experiancia = document.getElementById("experiencia").value.toLowerCase(); //valor del input de la experiencia del alumno
   const maquinaCoser = document.getElementById("maquinaCoser").value.toLowerCase(); // valor de input de conocimientos de maquina de coser
   const tituloRecomendaciones = document.getElementById("tituloRecomendaciones"); 
   tituloRecomendaciones.innerHTML = `<p class="recomendacion">A continuacion te mostramos los cursos que se ajustan más a tu experiencia</p>`; // titulo que se desplega al recomendar los cursos
   const contenedor = document.getElementById("contenedorRecomendaciones");
   const cursoRecomendado = document.createElement("div");
   cursoRecomendado.className = "cursoRecomendado" 
   const cursosAmostrar = []
   if (experiancia === conocimientosBajos && maquinaCoser === "ninguno"){
      for (let i = 0; i < cursosDisponibles.length; i++){
         if (cursosDisponibles[i].nivel === "principiante"){
            cursosAmostrar.push(cursosDisponibles[i])
         }
      }
   }
   if (experiancia === conocimientosMedios && maquinaCoser === "medio"){
      for (let i = 0; i < cursosDisponibles.length; i++){
         if (cursosDisponibles[i].nivel === "medio"){
            cursosAmostrar.push(cursosDisponibles[i])
         }
      }
   }
   if (experiancia === conocimientosAltos && maquinaCoser === "avanzado"){
      for (let i = 0; i < cursosDisponibles.length; i++){
         if (cursosDisponibles[i].nivel === "avanzado"){
            cursosAmostrar.push(cursosDisponibles[i])
            }
         }
   }
cursosAmostrar.forEach((curso)=>{
    cursoRecomendado.innerHTML += `
       <div class="cursoAgregdo">
       <h2 class="tituloCurso">${curso.nombre}</h2>
       <img src= ${curso.thumbnail} class="imgCursoTelas" alt="">
       <p class="descripcionCurso">${curso.descripcion}</p>
       <button class="botonInscripcion" id="botonInscripcion">Inscribirme</button>
       </div>`;
    contenedor.appendChild(cursoRecomendado);
    
})
}
function buscarCurso () {
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
                  const botonPagar = document.createElement("button");
                  botonPagar.classList = "botonPagar";
                  botonPagar.textContent = "Pagar";
                  document.getElementById("agregadoCarrito").appendChild(botonPagar);
                  botonPagar.addEventListener("click", () =>{
                     Toastify({
                        offset: {
                          x: 20, 
                          y: 20
                        },
                        text: localStorage.getItem("NombreAlumno") + " su compra se ha realizado con EXITO",
                        gravity: "top",
                        position: "center",
                        duration: 4000,
                        className: "info",
                        }).showToast();
                  })
                  const botonCancelar = document.createElement("button");
                  botonCancelar.classList = "botonCancelar";
                  botonCancelar.textContent = "Cancelar";
                  document.getElementById("agregadoCarrito").appendChild(botonCancelar);
                  botonCancelar.addEventListener("click", (e) => {
                     return location.reload()});
                  break;
               }
            }
            
      }else {buscarCurso()}
   })   
}
function ingresarExperiencia () {
   const contenedorInput = document.getElementById("contenedorInput");
   const contenedorExperiencia = document.createElement("div");
   const nombre = JSON.stringify(localStorage.setItem("NombreAlumno", nombreAlumno.value))
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
   botonCalcular.addEventListener("click", mostrar) //este boton activa el evento buscar para que muestre el resultado de la busqueda
}
botonAlumno.addEventListener("click", ingresarExperiencia); // este es el evento click asociado al boton que inicia la funcion ingresarExperiencia
botonBuscar.addEventListener("click", buscarCurso);
document.addEventListener("keyup", (e) =>{ // al presionar Escape hacermos que se recatgue la pagina limpando la lista y el campo de busqueda
   if(e.code === "Escape"){
      location.reload()
   }
});
buscador.addEventListener("keydown", (e) =>{ // al presionar Enter que se ejecute la funcion buscar para que sea otra alternativa al boton buscar
   if(e.code === "Enter"){
      buscarCurso();
   }
});



