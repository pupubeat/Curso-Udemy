// Capturar datos del HTML
const formulario = document.querySelector('#formulario')
const btnEnviar = document.querySelector('#botonEnviar')
const btnCargando = document.querySelector('#botonCargando')
const toast = document.querySelector('.toast')

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    // Obtener datos de los label del formulario.
    const datos = new FormData(formulario)
    // Mostrar en consola el dato recibido en label Email
    console.log('Correo Electrónico:', datos.get('emailLabel'))
    // Mostrar en consola el dato recibido en label Password
    console.log('Password:', datos.get('passwordLabel'))

    // Agregar-remover el class d-none en ambos botones del formulario.
    btnEnviar.classList.add('d-none')
    btnCargando.classList.remove('d-none')

    // Después de 3 segundos, revertir los cambios en los botones.
    window.setTimeout(() => {
        btnCargando.classList.add('d-none')
        btnEnviar.classList.remove('d-none')

        // Evento Toast y mostrarlo cuando se envían los datos sin problemas.
        const eventToast = new bootstrap.Toast(toast)
        eventToast.show()
    }, 3000)

    // Limpiar los datos del formulario.
    formulario.reset()
})