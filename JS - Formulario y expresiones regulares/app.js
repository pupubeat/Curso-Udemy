// Capturar elementos del HTML //
const formulario = document.getElementById('formulario')
const userName = document.getElementById('userName')
const userEmail = document.getElementById('userEmail')
// Alerts
const alertUsername = document.getElementById('alertUsername')
const alertEmail = document.getElementById('alertEmail')
const alertSuccess = document.getElementById('alertSuccess')

// Expresiones ReGex
const regUsername = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

// Función para invocar mensaje de éxito
const mensajeExito = () => {
    alertSuccess.classList.remove('d-none')
    alertSuccess.textContent = 'Mensaje envíado con éxito.'
}

// Función para invocar los posibles mensajes de errores
const mensajeError = (errores) => {
    errores.forEach((item) => {
        item.tipo.classList.remove('d-none')
        item.tipo.textContent = item.mensaje
    });
}

// Lógica formulario.
formulario.addEventListener("submit", e => {
    e.preventDefault()
    alertSuccess.classList.add('d-none')

    // Array de los posibles errores que se presenten
    const errores = []

    // Validaciones para el username.
    if (!regUsername.test(userName.value) || !userName.value.trim()) {
        userName.classList.add('is-invalid')
        errores.push({
            tipo: alertUsername,
            mensaje: 'Formato no válido, usar sólo letras.'
        })
    } else {
        userName.classList.remove('is-invalid')
        userName.classList.add('is-valid')
        alertUsername.classList.add('d-none')
    }

    // Validaciones para el email
    if (!regEmail.test(userEmail.value) || !userEmail.value.trim()) {
        userEmail.classList.add('is-invalid')
        errores.push({
            tipo: alertEmail,
            mensaje: 'Escriba un correo electrónico válido.'
        })
    } else {
        userEmail.classList.remove('is-invalid')
        userEmail.classList.add('is-valid')
        alertEmail.classList.add('d-none')
    }

    // Invocar mensaje de error.
    if (errores.length !== 0) {
        mensajeError(errores)
        return
    }

    // Invocar el mensaje de éxito.
    mensajeExito()
})