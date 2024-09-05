import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js'
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js'

// Capturar elementos desde el archivo HTML
const chat = document.getElementById('chat')
const btnIngresar = document.getElementById('btnIngresar')
const btnSalir = document.getElementById('btnSalir')
const btnEnviar = document.getElementById('btnEnviar')
const formulario = document.getElementById('formulario')

const firebaseConfig = {
    apiKey: "AIzaSyDZZwwApv293bp8UlOZzq2qXcUHWhS1xPE",
    authDomain: "fir-chatlog.firebaseapp.com",
    projectId: "fir-chatlog",
    storageBucket: "fir-chatlog.appspot.com",
    messagingSenderId: "766401090117",
    appId: "1:766401090117:web:b6392d108787f40299c92c",
    measurementId: "G-G723597FTN"
};

// Inicializar App
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("Existe el usuario:", user)
    } else {
        console.log("no existe el usuario.")
    }
});

btnIngresar.addEventListener("click", async () => {
    try {
        const provider = new GoogleAuthProvider()
        const result = await signInWithPopup(auth, provider)
        console.log(result)
    } catch (error) {
        console.log(error)
    }
})

btnSalir.addEventListener("click", async () => {
    await signOut(auth);
})
