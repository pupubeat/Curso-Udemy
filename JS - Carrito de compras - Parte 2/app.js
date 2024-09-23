// Obtener elementos desde el HTML
const carrito = document.getElementById('carrito')
const template = document.getElementById('template')
const botones = document.querySelectorAll('.card .btn')
const fragment = document.createDocumentFragment()

// Array de objetos (los productos).
const compraCarrito = []


const agregarAlCarrito = (e) => {
    console.log(e.target.dataset.fruta)
    // Creación objeto para identificar a los productos del catálogo.
    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1
    };

    // Buscar a cada producto por su ID, devuelve el index del array.
    const indice = compraCarrito.findIndex((item) => item.id === producto.id)

    // Validación si el producto está dentro del carrito o no.
    if (indice === -1) {
        compraCarrito.push(producto) // Agregar producto nuevo al array del carrito.
    } else {
        compraCarrito[indice].cantidad++ // Sumar +1 a la cantidad de un producto ya existente en el carrito.
    }

    console.log(compraCarrito)
    pintarCarrito(compraCarrito)
}

// Mostrar el conteo de cuantos productos tiene en el carrito.
const pintarCarrito = (array) => {
    carrito.textContent = ''
    array.forEach(item => {
        const clone = template.content.firstElementChild.cloneNode(true) // clonar para evitar el reflow en navegador.
        clone.querySelector('.lead').textContent = item.titulo
        clone.querySelector('.badge').textContent = item.cantidad

        fragment.appendChild(clone)
    })
    carrito.appendChild(fragment)
}

// Hacer que todos los botones puedan agregar sus respectivos productos al carrito.
botones.forEach((btn) => btn.addEventListener("click", agregarAlCarrito))
