// Extraer elementos desde el HTML.
const formulario = document.getElementById('formulario')
const alertInput = document.getElementById('alertInput')
const mostrarToDo = document.getElementById('mostrarToDo')
const templateToDO = document.getElementById('templateToDO').content

// Array vacío para colocar los todo's
let todos = []

// Funcuón para crear un objeto tipo ToDO
const agregarToDo = (todo) => {
    const objetoToDO = {
        nombre: todo,
        id: `${Date.now()}` // Convertido en string, cosa que cada toDO tenga su propio identificador.
    };
    todos.push(objetoToDO) // Cada toDO creado, se coloca en el array todos vacío.
};

// Función que muestra en el HTML el toDO creado.
const mostrarToDos = () => {
    localStorage.setItem('todos', JSON.stringify(todos)) // Convertir los toDO's a JSON

    mostrarToDo.textContent = '';
    const fragment = document.createDocumentFragment(); // crear fragment y clone para evitar reflow del DOM.

    // ForEach() en el array de los ToDO's creados.
    todos.forEach((item) => {
        const clone = templateToDO.cloneNode(true); // Crear clone
        clone.querySelector('.lead').textContent = item.nombre;
        clone.querySelector('.btn').dataset.id = item.id;
        fragment.appendChild(clone); // Colocar el clone en fragment
    })
    mostrarToDo.appendChild(fragment); // Colocar fragment con data en el section para mostrar el toDO creado.
}

// Evento que permite eliminar uno por uno los toDo's creados. que poseen ID diferentes.
document.addEventListener('click', e => {
    if (e.target.matches('.btn-danger')) {
        todos = todos.filter((item) => item.id !== e.target.dataset.id);
        mostrarToDos()
    }
})

// Evento submit en formulario
formulario.addEventListener('submit', e => {
    e.preventDefault();
    alertInput.classList.add('d-none');

    const data = new FormData(formulario); // Captar todos los inputs disponibles del formulario
    const [todo] = [...data.values()]; // Captar todos los values disponibles del formulario

    // Validación si usuario coloca espacios en blanco.
    if (!todo.trim()) {
        alertInput.classList.remove('d-none');
        return
    }

    agregarToDo(todo);
    mostrarToDos(); // Pintar los toDO's en HTML
})

// Evento DOMContentLoaded: una vez que se cague 100% el DOM, se obtienen los ToDO's del localStorage
document.addEventListener('DOMContentLoaded', e => {
    if (localStorage.getItem('todos')) {
        todos = JSON.parse(localStorage.getItem('todos'));
        mostrarToDos();
    }
})