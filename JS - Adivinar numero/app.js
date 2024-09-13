// Función para obtener un número entero al azar, entre un mínimo (incluído) y un máximo (excluído)
function nEnteroRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

// Generar un número al azar del 1 al 10.
let nMaquina = nEnteroRandom(1, 10)
console.log(nMaquina)

// Vidas del usuario
let vidasUsuario = 3

let nUsuario = parseInt(prompt('Inserte un número del 1 al 10.'))
if (nUsuario > 1 || nUsuario < 10) {
    parseInt(prompt('Número inválido, intente nuevamente.'))
}

while (nMaquina !== nUsuario && vidasUsuario > 1) {
    let mensaje =
        nMaquina > nUsuario
            ? "El número de la máquina es mayor."
            : "El número de la máquina es menor.";
    console.log(`Te equivocaste! ${mensaje}`)
    nUsuario = parseInt(prompt('Inserte un número del 1 al 10.'))
    vidasUsuario--;
}

if (nUsuario === nMaquina) {
    console.log('Felicidades, has ganado contra la máquina.')
} else {
    console.log('Lo sentimos, has perdido contra la máquina.')
}