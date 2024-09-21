// Obtener elementos desde el HTML
const carrito = document.getElementById('carrito')
const template = document.getElementById('template')
const botones = document.querySelectorAll('.card .btn')
const fragment = document.createDocumentFragment()

const compraCarrito = {}
const agregarAlCarrito = (e) => {
    console.log(e.target.dataset.fruta)
    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1
    };

    if (compraCarrito.hasOwnProperty(producto.titulo)) {
        producto.cantidad = compraCarrito[producto.titulo].cantidad + 1
    }

    compraCarrito[producto.titulo] = producto;
    pintarCarrito(producto)
}

const pintarCarrito = (producto) => {
    carrito.textContent = ''
    Object.values(compraCarrito).forEach(item => {
        const clone = template.content.firstElementChild.cloneNode(true)
        clone.querySelector('.lead').textContent = item.titulo
        clone.querySelector('.badge').textContent = item.cantidad

        fragment.appendChild(clone)
    })
    carrito.appendChild(fragment)
}

botones.forEach((btn) => btn.addEventListener("click", agregarAlCarrito))
