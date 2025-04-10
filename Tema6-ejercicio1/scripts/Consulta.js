//variables
const nombre = document.getElementById("name");
const apellido = document.getElementById("lastname");
const parrafo = document.getElementById("msg");
const form = document.getElementById("form");
const tlfn = document.getElementById("tlfn");
const codpostal = document.getElementById("cod");
const email = document.getElementById("email");
const documento = document.getElementById("document");
const prefix = document.getElementById("prefix");
//expresiones regulares
const regexDocument = /^(?:(?:\d{8}[A-Z])|(?:[XYZ]\d{7}[A-Z]))$/;
const regextlfn = /^\+3[46]\d{8,11}$/;
const regexemail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regexcodpostal = /^\d{5}$/;

form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    let msg = "";
    let entrar = false; 
    const fullphone = prefix.value + tlfn.value.trim(); 

   
    if (nombre.value.trim() === "") {
        msg += "El nombre no es válido.<br>";
        entrar = true;
    }
    if (apellido.value.trim() === "") {
        msg += "Introduzca el primer apellido.<br>";
        entrar = true;
    }
    if (!regexDocument.test(documento.value.trim())) {
        msg += "El documento no es válido.<br>";
        entrar = true;
    }
    if (!regextlfn.test(fullphone)) {
        msg += "Teléfono no válido.<br>";
        entrar = true;
    }
    if (!regexcodpostal.test(codpostal.value.trim())) {  
        msg += "Código postal no válido.<br>";
        entrar = true;
    }
    if (!regexemail.test(email.value.trim())) {
        msg += "Email no válido.<br>";
        entrar = true;
    }

   
    if (entrar) {
        parrafo.innerHTML = msg;
        parrafo.classList.remove("success");
        parrafo.classList.add("error");
    } else {
        parrafo.innerHTML = "Formulario enviado correctamente";
        parrafo.classList.remove("error");
        parrafo.classList.add("success");
    }
    
});

