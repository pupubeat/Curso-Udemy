// Capturar elementos desde el HTML
const formulario = document.getElementById('formulario')
const cardEstudiantes = document.getElementById('cardEstudiantes')
const cardProfesor = document.getElementById('cardProfesor')
const templateEstudiante = document.getElementById('templateEstudiante').content
const templateProfesor = document.getElementById('templateProfesor').content

const estudiantes = []; // Array para agrupar todos los estudiantes a agregar en el formulario

// Creación de objetos: Persona, Estudiante y Profesor.

// Persona //
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    static mostrarPersonaUI(personas, tipo) {
        if (tipo === 'Estudiante') {
            cardEstudiantes.textContent = ''
            const fragment = document.createDocumentFragment()
            personas.forEach(item => {
                fragment.appendChild(item.agregarNuevoEstudiante())
            })
            cardEstudiantes.appendChild(fragment)
        }
    }
}

// Estudiante //
class Estudiante extends Persona {
    #estado = false
    #estudiante = "Estudiante"

    set setEstado(estado) {
        this.#estado = estado
    }

    get getEstado() {
        return this.#estudiante
    }

    agregarNuevoEstudiante() {
        const clone = templateEstudiante.cloneNode(true)
        clone.querySelector('h5').textContent = this.nombre
        clone.querySelector('h6').textContent = this.#estudiante
        clone.querySelector('.lead').textContent = this.edad
        return clone
    }
}

// Profesores //
class Profesor extends Persona {
    #profesor = "Profesor"

    agregarNuevoProfesor() {
        const clone = templateProfesor.cloneNode(true)
        clone.querySelector('h5').textContent = this.nombre
        clone.querySelector('h6').textContent = this.#profesor
        clone.querySelector('.lead').textContent = this.edad
        return clone
    }
}

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const datos = new FormData(formulario);
    // console.log([...datos.values()])
    const [nombre, edad, opcion] = [...datos.values()]; // desestructurar los values de la data del formulario.

    // Condición si elijes la opción de estudiante
    if (opcion === 'Estudiante') {
        const estudiante = new Estudiante(nombre, edad);
        estudiantes.push(estudiante) // Agregar nuevo estudiante al array vacío.
    }

    if (opcion === 'Profesor') {

    }
})