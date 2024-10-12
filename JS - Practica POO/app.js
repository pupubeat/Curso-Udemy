// Capturar elementos desde el HTML
const formulario = document.getElementById('formulario');
const inputNombre = document.getElementById('nombre');
const inputEdad = document.getElementById('edad');
const alertNombre = document.getElementById('alertNombre')
const alertEdad = document.getElementById('alertEdad')
const cardEstudiantes = document.getElementById('cardEstudiantes');
const cardProfesor = document.getElementById('cardProfesor');
const templateEstudiante = document.getElementById('templateEstudiante').content;
const templateProfesor = document.getElementById('templateProfesor').content;

const regexNombre = /^[A-Za-z]+$/
const regexEdad = /^[0-9]+$/

const estudiantes = []; // Array para agrupar todos los estudiantes a agregar en el formulario.
const profesores = []; // Array para agrupar todos los profesores a agregar en el formulario.

// Función para invocar los posibles mensajes de errores
const mensajeError = (errores) => {
    errores.forEach((item) => {
        item.tipo.classList.remove('d-none')
        item.tipo.textContent = item.mensaje
    });
}

document.addEventListener('click', (e) => {
    if (e.target.dataset.uid) {
        if (e.target.matches('.btn-success')) {
            estudiantes.map((item) => {
                if (item.uid === e.target.dataset.uid) {
                    item.setEstado = true;
                }
                console.log(item)
                return item;
            });
        }
        if (e.target.matches('.btn-danger')) {
            estudiantes.map((item) => {
                if (item.uid === e.target.dataset.uid) {
                    item.setEstado = false;
                }
                console.log(item)
                return item;
            });
        }
        Persona.mostrarPersonaUI(estudiantes, 'Estudiante')
    }
})

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
    // Captar los datos del formulario.
    const datos = new FormData(formulario);

    // Array de los posibles errores que se presenten
    const errores = []

    // console.log([...datos.values()])
    const [nombre, edad, opcion] = [...datos.values()]; // desestructurar los values de la data del formulario.

    // Validaciones para el label de Nombre.
    const valueNombre = inputNombre.value
    if (!regexNombre.test(valueNombre) || !valueNombre.trim()) {
        inputNombre.classList.add('is-invalid')
        errores.push({
            tipo: alertNombre,
            mensaje: 'Formato no válido, usar sólo letras.'
        })

    } else {
        inputNombre.classList.remove('is-invalid')
        inputNombre.classList.add('is-valid')
        alertNombre.classList.add('d-none')
    }

    // Validaciones para el label de Edad.
    const valueEdad = inputEdad.value
    if (!regexEdad.test(valueEdad) || !valueEdad.trim()) {
        inputEdad.classList.add('is-invalid')
        errores.push({
            tipo: alertEdad,
            mensaje: 'Formato no válido, usar sólo números.'
        })

    } else {
        inputEdad.classList.remove('is-invalid')
        inputEdad.classList.add('is-valid')
        alertEdad.classList.add('d-none')
    }

    // Invocar mensaje de error.
    if (errores.length !== 0) {
        mensajeError(errores)
        return
    }

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