import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js'
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js'

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
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
