const formulario = document.getElementById('formulario')
const alertInput = document.getElementById('alertInput')
const mostrarToDo = document.getElementById('mostrarToDo')
const templateToDO = document.getElementById('templateToDO').content

let todos = []

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

agregarToDo = (todo) => {
    const objetoToDO = {
        nombre: todo,
        id: `${Date.now}`
    };
    todos.push(objetoToDO)
}