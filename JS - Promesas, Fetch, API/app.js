// Obtener datos desde el HTML
const cards = document.getElementById('card-dinamicas');
const templateCards = document.getElementById('template-card').content;
const loading = document.getElementById('loading');

// Esperar a que se cargue por completo el DOM antes de proceder a funciones asincronicas.
document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})

const fetchData = async () => {
    try {
        loadingData(true);
        const res = await fetch("https://rickandmortyapi.com/api/character");
        const data = await res.json();
        mostrarData(data);

    } catch (error) {
        console.log(error);
    } finally {
        loadingData(false);
    }
};

const mostrarData = async (data) => {
    console.log(data)
}

const loadingData = estado => {
    if (estado) {
        loading.classList.remove('d-none');
    } else {
        loading.classList.add('d-none');
    }
};