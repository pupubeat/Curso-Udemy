// Obtener elementos desde el HTML
const carrito = document.getElementById('carrito')
const template = document.getElementById('template')
const footer = document.getElementById('footer')
const templateFooter = document.getElementById('templateFooter')
const fragment = document.createDocumentFragment()

document.addEventListener('click', e => {
    //Condición para que el método se active solo en los botones de las frutas
    if (e.target.matches('.card .btn-outline-primary')) {
        agregarAlCarrito(e)
    }
    if (e.target.matches('#carrito .list-group-item .btn-success')) {
        btnAgregar(e)
    }
    if (e.target.matches('#carrito .list-group-item .btn-danger')) {
        btnQuitar(e)
    }
})

// Array de objetos (los productos).
let compraCarrito = []

const agregarAlCarrito = (e) => {
    console.log(e.target.dataset.fruta)
    // Creación objeto para identificar a los productos del catálogo.
    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
        precio: parseInt(e.target.dataset.precio)
    };

    // Buscar a cada producto por su ID, devuelve el index del array.
    const indice = compraCarrito.findIndex((item) => item.id === producto.id)

    // Validación si el producto está dentro del carrito o no.
    if (indice === -1) {
        compraCarrito.push(producto) // Agregar producto nuevo al array del carrito.
    } else {
        compraCarrito[indice].cantidad++ // Sumar +1 a la cantidad de un producto ya existente en el carrito.
        // compraCarrito[indice].precio = compraCarrito[indice].cantidad * producto.precio // Multiplicar precio producto x cantidad de producto ya existente en el carrito.
    }

    console.log(compraCarrito)
    pintarCarrito(compraCarrito)
}

// Mostrar el conteo de cuantos productos tiene en el carrito.
const pintarCarrito = () => {
    carrito.textContent = "";
    compraCarrito.forEach(item => {
        const clone = template.content.cloneNode(true) // clonar para evitar el reflow en navegador.
        clone.querySelector('.text-white .lead').textContent = item.titulo
        clone.querySelector('.badge').textContent = item.cantidad
        clone.querySelector('div .lead span').textContent = item.precio * item.cantidad
        clone.querySelector('.btn-danger').dataset.id = item.id
        clone.querySelector('.btn-success').dataset.id = item.id

        fragment.appendChild(clone)
    })
    carrito.appendChild(fragment)
    pintarFooter();
}

const pintarFooter = () => {
    footer.textContent = "";
    const total = compraCarrito.reduce((acc, current) =>
        acc + (current.cantidad * current.precio), 0
    )
    if (total === 0) {
        footer.classList.add('d-none')
    }

    const clone = templateFooter.content.cloneNode(true);
    clone.querySelector('span').textContent = total
    footer.appendChild(clone)
}


const btnAgregar = (e) => {
    compraCarrito = compraCarrito.map(item => {
        if (item.id === e.target.dataset.id) {
            item.cantidad++
            return item
        }
    })
    pintarCarrito();
}

const btnQuitar = (e) => {
    compraCarrito = compraCarrito.filter(item => {
        if (item.id === e.target.dataset.id) {
            if (item.cantidad > 0) {
                item.cantidad--;
                if (item.cantidad === 0) {
                    return
                }
                return item
            }
        } else {
            return item
        }
    })
    pintarCarrito();
}
