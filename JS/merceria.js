
const contenedorMerceria =  document.getElementById("contenedorMerceriaCards"); //
const contenedorProductos = document.createElement("section");
contenedorProductos.className = "contenedorProductos";
contenedorMerceria.append(contenedorProductos);
const listaProductos = document.getElementById("listaProductos");
const calculoTotal = document.getElementById("total");
const botonPagar = document.getElementById("botonPagar");
const botonLimpiar = document.getElementById("limpiar")

let total = 0;
const carrito = [] 

fetch("../merceria.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((e) => { // Recorremos los datos del array del archivo json
      const contenedorElemento = document.createElement("article");
      contenedorElemento.className = "elemento";
      contenedorProductos.append(contenedorElemento);
      // Card que se inyecta en el DOM con los datos de los objetos del array del json
      contenedorElemento.innerHTML += ` 
      <div class="elementoCard">
        <img class="imagenProducto" src=${e.thumbnail}>
        <h3>${e.nombre}</h3>
        <p>${e.descripcion}</p>
        <p>Precio: ${e.precio}</p>
        <button id="${e.id}" class="botonProducto">Agregar</button>
      </div>      
        `;
    }); 
    const botonAgregar = document.querySelectorAll(".botonProducto"); // boton para agregar al carrito un producto
    botonAgregar.forEach((boton, index) => {
      boton.addEventListener("click", () => {
        calculoTotal.classList.remove("visible")
        botonPagar.classList.remove("visible") // se le quita la clase visible al boton de pagar para que se vea una vez que agregamos el primer producto al carrito
        botonLimpiar.classList.remove("visible")
        const productoAgregado = data[index]; // data[index] hace referencia al objeto del archivo json que se va a agregar al carrio 
        carrito.push(productoAgregado);
        const ultimoElemento = carrito[carrito.length - 1] //en esta variable hacemos referencia al ultimo elemento agregado al carrito para luego acceder a sus propiedades
        listaProductos.innerHTML += `
        <div id="${ultimoElemento.id}" class="productoAgregado">
        <h3 class="nombreProducto">${ultimoElemento.nombre}</h3>
        <p>$${ultimoElemento.precio}</p>
        <button id=${ultimoElemento.id} class="cancelarProducto">X</button>
        </div>
        `;
        total += ultimoElemento.precio // aqui sumamos al total el precio del ultimo elemento que se va agregando al carrito
        calculoTotal.textContent = `Total: $${total}`; // inyectamos en el DOM el total del carrito

        const botonCancelar = document.querySelectorAll(".cancelarProducto"); //Seleccionamos todos los botones de cancelar que comparten la misma clase para despues eliminar productos del carrito
        botonCancelar.forEach((boton, index) =>{
            boton.addEventListener("click", () => {
              const elementoSeleccionado = boton.parentElement // Accedemos al elento padre del boton que estamos recorriendo con el forEach
              const elementoSeleccionadoId = elementoSeleccionado.getAttribute("id") // Accedemos al id del div padre del boton, o sea del elemnto entero que se agrega al carrito
              elementoSeleccionado.remove() // Removemos del DOM el elemento deseado del carrito
              data.forEach((e,i) =>{ 
                if (elementoSeleccionadoId == e.id){ // Si el id del elemento padre es igual al id del objeto que viene del archivo json, con esto nos aseguramos de eliminar el elemento que estamos seleccionando
                  total -= e.precio // restamos el precio del total
                  console.log(carrito);
                }
                if(total === 0){   // este if lo uso para que al eliminar elementos del carrito de a uno y eliminando todos desaparezca el total y los botones
                  calculoTotal.classList.add("visible")
                  botonPagar.classList.add("visible")
                  botonLimpiar.classList.add("visible")
                }
              })
              calculoTotal.textContent = `Total: $${total}`; // Representamos el total en el DOM
            }) 
      })

      botonLimpiar.addEventListener("click", () => {
          const elementoCarrito = document.querySelectorAll(".productoAgregado")
          total -= total
          calculoTotal.textContent = `Total: $${total}`;
          calculoTotal.classList.add("visible")
          botonPagar.classList.add("visible")
          botonLimpiar.classList.add("visible")
          while (carrito.length > 0) {
            carrito.pop()
            
          }
          for (const elemento of elementoCarrito) {
            elemento.remove()
          }
      })

    
    }); 
  });
})     
.catch(error => {
    console.error("Error al cargar el archivo JSON:", error);
});
botonPagar.addEventListener("click", ()=>{  // evento del boton pagar que activa la notificacion de Tostify
  Toastify({
    offset: {
      x: 20, 
      y: 20
    },
    text: "Su compra de " + total + " pesos se ha realizado con EXITO, tiempo de entrega de 7 a 10 dias",
    gravity: "top",
    position: "center",
    duration: 4000,
    className: "info",
    }).showToast();
})

    
       



