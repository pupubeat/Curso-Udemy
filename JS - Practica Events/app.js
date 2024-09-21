// Obtener elementos desde el HTML
const colorInput = document.getElementById('exampleColorInput')
const btnVisualizar = document.getElementById('btnVisualizar')
const txtExample = document.getElementById('txtExample')
const cardColor = document.getElementById('cardColor')

btnVisualizar.addEventListener("click", () => {
    console.log(colorInput.value)
    txtExample.textContent = colorInput.value
    cardColor.style.backgroundColor = colorInput.value
})