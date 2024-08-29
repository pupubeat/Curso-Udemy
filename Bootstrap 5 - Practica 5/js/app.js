const rango = document.getElementById('customRange3')
const visitas = document.getElementById('visitas')
const precio = document.getElementById('precio')

rango.addEventListener('input', () => {
    console.log(rango.value)
    precio.textContent = rango.value
})