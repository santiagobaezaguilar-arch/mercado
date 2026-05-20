// app.js
"use strict";

const formulario = document.getElementById("formulario");
const contenedor = document.getElementById("contenedorProductos");

const nombre = document.getElementById("nombre");
const descripcion = document.getElementById("descripcion");
const precio = document.getElementById("precio");
const imagen = document.getElementById("imagen");

/*
    LOCAL STORAGE
    guarda los productos aunque recargues la pagina
*/

let productos = JSON.parse(localStorage.getItem("productos")) || [];

/*
    GUARDAR EN LOCAL STORAGE
*/
function guardarProductos(){
    localStorage.setItem("productos", JSON.stringify(productos));
}

/*
    CREAR CARD
*/
function crearCard(producto, index){

    const article = document.createElement("article");
    article.classList.add("card");

    article.innerHTML = `
        <img src="${producto.imagen}" alt="producto">

        <div class="content">
            <h2>${producto.nombre}</h2>

            <p>${producto.descripcion}</p>

            <h3>$${producto.precio}</h3>

            <div class="botones">
                <button class="comprar">Comprar</button>

                <button class="eliminar" data-index="${index}">
                    Eliminar
                </button>
            </div>
        </div>
    `;

    return article;
}

/*
    RENDERIZAR PRODUCTOS
*/
function renderProductos(){

    contenedor.innerHTML = "";

    productos.forEach((producto, index) => {

        const card = crearCard(producto, index);

        contenedor.appendChild(card);
    });
}

/*
    AGREGAR PRODUCTO
*/
formulario.addEventListener("submit", (e)=>{

    e.preventDefault();

    const nuevoProducto = {
        nombre: nombre.value,
        descripcion: descripcion.value,
        precio: precio.value,
        imagen: imagen.value
    };

    productos.push(nuevoProducto);

    guardarProductos();

    renderProductos();

    formulario.reset();
});

/*
    ELIMINAR PRODUCTO
*/
contenedor.addEventListener("click", (e)=>{

    if(e.target.classList.contains("eliminar")){

        const index = e.target.dataset.index;

        productos.splice(index, 1);

        guardarProductos();

        renderProductos();
    }

    if(e.target.classList.contains("comprar")){

        alert("Producto comprado");
    }
});

/*
    MOSTRAR AL RECARGAR
*/
renderProductos();