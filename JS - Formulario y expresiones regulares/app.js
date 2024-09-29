const formulario = document.getElementById('formulario')
const userName = document.getElementById('userName')
const userEmail = document.getElementById('userEmail')

// Expresiones ReGex
const regUsername = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

// Lógica formulario.
formulario.addEventListener("submit", e => {
    e.preventDefault()

    // Validaciones
    if (!regUsername.test(userName.value)) {
        console.log('Formato no válido.')
        return
    }

    if (!regEmail.test(userEmail.value)) {
        console.log('Formato no válido.')
        return
    }
})