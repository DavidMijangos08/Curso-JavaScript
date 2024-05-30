const firebaseConfig = {
    apiKey: "AIzaSyBbFlAiU2fgNSIyRj_aXSrxDfw5Ovzik2E",
    authDomain: "datos-de-formulario-6804a.firebaseapp.com",
    projectId: "datos-de-formulario-6804a",
    storageBucket: "datos-de-formulario-6804a.appspot.com",
    messagingSenderId: "365816310036",
    appId: "1:365816310036:web:9d56c568491cd3595afa01",
    measurementId: "G-PDN2M6CQNX"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();


document.getElementById('formulario').addEventListener('submit', (event) => {
    event.preventDefault()

    let entradaNombre = document.getElementById('name')
    let errorNombre = document.getElementById('nameError')

    if(entradaNombre.value.trim() === ''){
        errorNombre.textContent = 'Por favor, introduce tu nombre'
        errorNombre.classList.add('error-message')
    }else{
        errorNombre.textContent = ''
        errorNombre.classList.remove('error-message')
    }

    let entradaEmail = document.getElementById('email')
    let errorEmail = document.getElementById('emailError')
    let emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if(!emailPattern.test(entradaEmail.value)){
        errorEmail.textContent = 'Por favor, introduce un email válido'
        errorEmail.classList.add('error-message')
    }else{
        errorEmail.textContent = ''
        errorEmail.classList.remove('error-message')
    }

    let entradaContrasena = document.getElementById('password')
    let errorContrasena = document.getElementById('passwordError')
    let contrasenaPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/;

    if(!contrasenaPattern.test(entradaContrasena.value)){
        errorContrasena.textContent = 'La contraseña debe tener al menos 8 caracteres, numeros, mayúsculas y minúsculas y caracteres especiales'
        errorContrasena.classList.add('error-message')
    }else{
        errorContrasena.textContent = ''
        errorContrasena.classList.remove('error-message')
    }

    if(!errorNombre.textContent && !errorEmail.textContent && !errorContrasena.textContent){
        db.collection("users").add({
            nombre: entradaNombre.value,
            email: entradaEmail.value,
            password: entradaContrasena.value
        })
        .then((docRef) => {
            alert("El formulario se ha enviado con éxito", docRef.id)
            document.getElementById('formulario').reset() 
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    }
})