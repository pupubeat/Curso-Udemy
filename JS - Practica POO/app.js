// Capturar elementos desde el HTML
const formulario = document.getElementById('formulario')
const cardEstudiantes = document.getElementById('cardEstudiantes')
const cardProfesor = document.getElementById('cardProfesor')
const templateEstudiante = document.getElementById('templateEstudiante').content
const templateProfesor = document.getElementById('templateProfesor').content

// Creación de objetos: Persona, Estudiante y Profesor.
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad
    }
}

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