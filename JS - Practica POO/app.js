// Capturar elementos desde el HTML
const formulario = document.getElementById('formulario');
const cardEstudiantes = document.getElementById('cardEstudiantes');
const cardProfesor = document.getElementById('cardProfesor');
const templateEstudiante = document.getElementById('templateEstudiante').content;
const templateProfesor = document.getElementById('templateProfesor').content;

const estudiantes = []; // Array para agrupar todos los estudiantes a agregar en el formulario
const profesores = [];

// Creación de objetos: Persona, Estudiante y Profesor.

// Persona //
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
        this.uid = `${Date.now()}`
    }
    static mostrarPersonaUI(personas, tipo) {
        if (tipo === 'Estudiante') {
            cardEstudiantes.textContent = '';
            const fragment = document.createDocumentFragment();
            personas.forEach(item => {
                fragment.appendChild(item.agregarNuevoEstudiante());
            })
            cardEstudiantes.appendChild(fragment);
        }
        if (tipo === 'Profesor') {
            cardProfesor.textContent = '';
            const fragment = document.createDocumentFragment();
            personas.forEach(item => {
                fragment.appendChild(item.agregarNuevoProfesor());
            })
            cardProfesor.appendChild(fragment);
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

    get getEstudiante() {
        return this.#estudiante
    }

    agregarNuevoEstudiante() {
        const clone = templateEstudiante.cloneNode(true);

        clone.querySelector('h5 .text-primary').textContent = this.nombre;
        clone.querySelector('h6').textContent = this.getEstudiante;
        clone.querySelector('.lead').textContent = this.edad + ' años';

        if (this.#estado) {
            clone.querySelector('.badge').className = 'badge bg-success';
            clone.querySelector('.btn-success').disabled = true;
            clone.querySelector('.btn-danger').disabled = false;
        } else {
            clone.querySelector('.badge').className = 'badge bg-danger';
            clone.querySelector('.btn-danger').disabled = true;
            clone.querySelector('.btn-success').disabled = false;
        }
        clone.querySelector('.badge').textContent = this.#estado ? 'Aprobado' : 'Reprobado';
        clone.querySelector('.btn-success').dataset.uid = this.uid;
        clone.querySelector('.btn-danger').dataset.uid = this.uid;

        return clone;
    }
}

// Profesores //
class Profesor extends Persona {
    #profesor = "Profesor"

    agregarNuevoProfesor() {
        const clone = templateProfesor.cloneNode(true);
        clone.querySelector('h5').textContent = this.nombre;
        clone.querySelector('h6').textContent = this.#profesor;
        clone.querySelector('.lead').textContent = this.edad + ' años';
        return clone;
    }
}

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const datos = new FormData(formulario);
    // console.log([...datos.values()])
    const [nombre, edad, opcion] = [...datos.values()]; // desestructurar los values de la data del formulario.

    // Condición si elijes la opción de estudiante.
    if (opcion === 'Estudiante') {
        const estudiante = new Estudiante(nombre, edad);
        estudiantes.push(estudiante); // Agregar nuevo estudiante al array vacío.
        Persona.mostrarPersonaUI(estudiantes, opcion);
    }
    // Condición si elijes la opción de profesor.
    if (opcion === 'Profesor') {
        const profesor = new Profesor(nombre, edad);
        profesores.push(profesor);
        Persona.mostrarPersonaUI(profesores, opcion);
    }
})