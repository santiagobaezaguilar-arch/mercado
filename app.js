"use strict";

const formulario = document.getElementById("formulario");

const nombre = document.getElementById("nombre");
const imagen = document.getElementById("imagen");
const descripcion = document.getElementById("descripcion");
const precio = document.getElementById("precio");

const gridProductos = document.getElementById("gridProductos");

/**
 * ARRAY DE PRODUCTOS
 */

let productos = [];

/**
 * CREAR TARJETA
 */

function crearCard(producto, index){

    const article = document.createElement("article");

    article.classList.add("card");

    article.innerHTML = `
        <img src="${producto.imagen}" alt="">

        <div class="content">

            <h2>${producto.nombre}</h2>

            <p>${producto.descripcion}</p>

            <div class="precio">
                $${producto.precio}
            </div>

            <div class="botones">

                <button class="btnComprar">
                    Comprar
                </button>

                <button class="btnEliminar">
                    Eliminar
                </button>

            </div>

        </div>
    `;

    /**
     * BOTON COMPRAR
     */

    const botonComprar = article.querySelector(".btnComprar");

    botonComprar.addEventListener("click", () => {

        alert(`Compraste ${producto.nombre}`);

    });

    /**
     * BOTON ELIMINAR
     */

    const botonEliminar = article.querySelector(".btnEliminar");

    botonEliminar.addEventListener("click", () => {

        productos.splice(index, 1);

        renderProductos();

    });

    return article;
}

/**
 * RENDERIZAR PRODUCTOS
 */

function renderProductos(){

    gridProductos.innerHTML = "";

    productos.forEach((producto, index) => {

        const card = crearCard(producto, index);

        gridProductos.appendChild(card);

    });

}

/**
 * FORMULARIO
 */

formulario.addEventListener("submit", (e) => {

    e.preventDefault();

    const nuevoProducto = {

        nombre: nombre.value,

        imagen: imagen.value,

        descripcion: descripcion.value,

        precio: precio.value

    };

    productos.push(nuevoProducto);

    renderProductos();

    formulario.reset();

});