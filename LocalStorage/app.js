const formulario = document.getElementById('formulario')
const alertInput = document.getElementById('alertInput')
const mostrarToDo = document.getElementById('mostrarToDo')
const templateToDO = document.getElementById('templateToDO').content

let todos = []

agregarToDo = (todo) => {
    const objetoToDO = {
        nombre: todo,
        id: `${Date.now}`
    };
    todos.push(objetoToDO)
};

pintarToDos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))

    pintarToDos.textContent = '';
    const fragment = document.createDocumentFragment();
    todos.forEach((item) => {
        const clone = templateToDO.cloneNode(true);
        clone.querySelector('.lead').textContent = item.nombre;
        clone.querySelector('.btn').dataset.id = item.id;
        fragment.appendChild(clone);
    })
    pintarToDos.appendChild(fragment)
}

formulario.addEventListener('submit', e => {
    e.preventDefault();
    alertInput.classList.add('d-none')

    const data = new FormData(formulario);
    const [todo] = [...data.values()];

    if (!todo.trim()) {
        alertInput.classList.remove('d-none')
        return
    }

    agregarToDo(todo);
    pintarToDos();
})