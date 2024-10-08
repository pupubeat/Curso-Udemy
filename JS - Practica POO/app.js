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