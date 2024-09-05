import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js'
import { getFirestore, collection, addDoc, query, onSnapshot, orderBy } from 'https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js'

// Capturar elementos desde el archivo HTML
const chat = document.getElementById('chat')
const btnIngresar = document.getElementById('btnIngresar')
const btnSalir = document.getElementById('btnSalir')
const btnEnviar = document.getElementById('btnEnviar')
const formulario = document.getElementById('formulario')
const templateMsg = document.getElementById('templateMsg')

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
const database = getFirestore(app);

// Eliminar elemento del HTML
const removeElement = (element) => {
    element.classList.add('d-none');
}

// Visualizar elemento en el HTML
const viewElement = (element) => {
    element.classList.remove('d-none');
}

let unsubscribe;

// Observar que el usuario ingresado exista o no.
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("Existe el usuario:", user)
        viewElement(btnSalir)
        viewElement(chat)
        viewElement(formulario)
        removeElement(btnIngresar)

        const q = query(collection(database, "chatlogs"), orderBy("fecha"));
        chat.innerHTML = "";
        unsubscribe = onSnapshot(q, (snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if (change.type === "added") {
                    console.log("New msg: ", change.doc.data());
                    // Manipulacion del Template
                    const clone = templateMsg.content.cloneNode(true);
                    clone.querySelector("span").textContent = change.doc.data().msg;
                    if (user.uid === change.doc.data().uid) {
                        clone.querySelector("span").classList.add('bg-success')
                        clone.querySelector("div").classList.add('text-end')
                    } else {
                        clone.querySelector("span").classList.add('bg-secondary')
                        clone.querySelector("div").classList.add('text-start')
                    }
                    chat.append(clone)
                }
                chat.scrollTop = chat.scrollHeight
            });
        });
    } else {
        console.log("no existe el usuario.")
        viewElement(btnIngresar)
        removeElement(btnSalir)
        removeElement(chat)
        removeElement(formulario)

        if (unsubscribe) {
            unsubscribe();
        }
    }
});

// Ingresar sesión
btnIngresar.addEventListener("click", async () => {
    try {
        const provider = new GoogleAuthProvider()
        const result = await signInWithPopup(auth, provider)
        console.log(result)
    } catch (error) {
        console.log(error);
    }
})

// cerrar sesión 
btnSalir.addEventListener("click", async () => {
    await signOut(auth);
});

formulario.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log(formulario.msg.value);
    if (!formulario.msg.value.trim()) {
        formulario.msg.value = "";
        formulario.msg.focus();
        return console.log("Tienes que escribir algo.");
    }

    try {
        btnEnviar.disabled = true;
        await addDoc(collection(database, "chatlogs"), {
            msg: formulario.msg.value.trim(),
            uid: auth.currentUser.uid,
            fecha: new Date()
        });
    } catch (error) {
        console.log(error)
    }
    finally {
        btnEnviar.disabled = false;
    }
});