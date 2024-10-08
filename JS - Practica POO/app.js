// Capturar elementos desde el HTML
const formulario = document.getElementById('formulario')
const cardEstudiantes = document.getElementById('cardEstudiantes')
const cardProfesor = document.getElementById('cardProfesor')
const templateEstudiante = document.getElementById('templateEstudiante').content
const templateProfesor = document.getElementById('templateProfesor').content

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const datos = new FormData(formulario);
    // console.log([...datos.values()])
    const [nombre, edad, opcion] = [...datos.values()];
})

// Creación de objetos: Persona, Estudiante y Profesor.

// Persona //
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad
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
        clone.querySelector('h5 .text-primary').textContent = this.nombre
        clone.querySelector('p').textContent = this.edad
    }
}