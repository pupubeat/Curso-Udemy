// Obtener datos desde el HTML
const cards = document.getElementById('card-dinamicas');
const templateCards = document.getElementById('template-card').content;
const loading = document.getElementById('loading');
const fragment = document.createDocumentFragment()

// Esperar a que se cargue por completo el DOM antes de proceder a funciones asincronicas.
document.addEventListener('DOMContentLoaded', () => {
    fetchData() // Se carga la data del DOM, por sgte se procede a captar data de API
})

const fetchData = async () => {
    try {
        loadingData(true);
        // Doble await: captar data desde API y que sea entregada en formato json
        const res = await fetch("https://rickandmortyapi.com/api/character");
        const data = await res.json();
        mostrarData(data); // proceder a mostrar la data captada en las cards.

    } catch (error) {
        console.log(error);
    } finally {
        loadingData(false);
    }
};

const mostrarData = async (data) => {
    // console.log(data)
    data.results.forEach((item) => {
        // Crear un clon para insertar en el fragment, con el fin de evitar el reflow en el DOM
        const clone = templateCards.cloneNode(true)
        clone.querySelector('h5').textContent = item.name;
        clone.querySelector('p').textContent = item.species;
        clone.querySelector('img').setAttribute('src', item.image);

        fragment.appendChild(clone) // Insertar clon en fragment
    })
    cards.appendChild(fragment) // Insertar la data del fragment en el id de las cards.
}

// Segmento del loading
const loadingData = estado => {
    if (estado) {
        loading.classList.remove('d-none');
    } else {
        loading.classList.add('d-none');
    }
};