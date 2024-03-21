import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBzmkeDwXDoemmqE5YiHG_kBuQg62c7QZk",
  authDomain: "taller2login-1c42f.firebaseapp.com",
  projectId: "taller2login-1c42f",
  storageBucket: "taller2login-1c42f.appspot.com",
  messagingSenderId: "827801810593",
  appId: "1:827801810593:web:75fe18d9b9665c4c1f22e0",
  measurementId: "G-EKTFE1WKSF"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export class ManageAccount {
  register(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((_) => {
        window.location.href = "Index.html";
        // Mostrar alerta de registro exitoso
        alert("Registro exitoso. Serás redirigido a la página de inicio de sesión.");
      })
      .catch((error) => {
        console.error(error.message);
        // Mostrar alerta de error de registro
        alert("Error al registrar: " + error.message);
      });
  }

  authenticate(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((_) => {
        window.location.href = "Templates/Home.html";
        // Mostrar alerta de inicio de sesión exitoso
        alert("Has iniciado sesión correctamente. Serás redirigido a la página principal.");
      })
      .catch((error) => {
        console.error(error.message);
        // Mostrar alerta de error de inicio de sesión
        alert("Error al iniciar sesión: " + error.message);
      });
  }

  userstate(){
    onAuthStateChanged(auth, (user) => {
      if (user) {
  
        const uid = user.uid;
        console.log(uid)
  
      } else {
        window.location.href='Index.html'
      }
    });
  }

  logiout = () =>
    signOut(auth)

}