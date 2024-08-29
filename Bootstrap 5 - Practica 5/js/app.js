const rango = document.getElementById('customRange3')
const visitas = document.getElementById('visitas')
const precio = document.getElementById('precio')
const arrayVisitas = ['10K', '50k', '100k', '500k', '1M']

rango.addEventListener('input', () => {
    console.log(rango.value)
    precio.textContent = rango.value
    visitas.textContent = arrayVisitas[((rango.value / 8) - 1)]
})