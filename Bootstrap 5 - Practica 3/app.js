const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    // Obtener datos de los label del formulario.
    const datos = new FormData(formulario)
    // Mostrar en consola el dato recibido en label Email
    console.log('Correo Electrónico:', datos.get('emailLabel'))
    // Mostrar en consola el dato recibido en label Password
    console.log('Password:', datos.get('passwordLabel'))
})