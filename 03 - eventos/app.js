//importaciones

// variables
const formulario = document.querySelector('form');
const nombre = document.querySelector('[name="nombre"]');
const apellido = document.querySelector('[name="apellido"]');
const telefono = document.querySelector('[name="telefono"]');
const documento = document.querySelector('[name="documento"]');
const usuario = document.querySelector('[name="usuario"]');
const contrasena = document.querySelector('[name="contrasena"]');

const teclasEspeciales = ["Backspace", "Tab", "Enter", "ArrowLeft", "ArrowRight", "Delete"];

//funciones

const validarTexto = (event) => {
  const key = event.key;
  const regex = /^[a-z\s]*$/i;
  const letra = key;
  if (!regex.test(letra)) {
    event.preventDefault();
  }
}

const validarNumero = (event) => {
  const key = event.key;
  const regex = /^[0-9]*$/;
  const letra = key;
  if (!regex.test(letra) && !teclasEspeciales.includes(letra)) {
    event.preventDefault();
  }
}

const validarCampos = (event) => {
  event.preventDefault();
  let errores = [];
  let regexContra = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  if (nombre.value.trim() == "") {
    errores.push("Nombre");
    nombre.focus();
  }
  if (apellido.value.trim() == "") {
    errores.push("Apellido");
    apellido.focus();
  }
  if (telefono.value.trim() == "") {
    errores.push("Telefono");
    telefono.focus();
  }
  if (documento.value.trim() == "") {
    errores.push("Documento");
    documento.focus();
  }
  if (usuario.value.trim() == "") {
    errores.push("Usuario");
    usuario.focus();
  }
  if (contrasena.value.trim() == "") {
    errores.push("Contraseña");
    contrasena.focus();
  }
  
  if (errores.length > 1) {
    alert(`Los siguientes campos son obligatorios: \n⊗ ${errores.join('\n ⊗ ')}` );
  } 
  else if (errores.length == 1) {
    alert(`El siguiente campo es obligatorio: \n⊗ ${errores[0]}`);    
  }

  if (regexContra.test(contrasena.value) == false) {
    alert("La contraseña debe tener al menos 8 caracteres, una mayúscula y un número");
    contrasena.focus();
  }
}

//eventos
nombre.addEventListener('keydown', validarTexto);
apellido.addEventListener('keydown', validarTexto);
telefono.addEventListener('keydown', validarNumero);
documento.addEventListener('keydown', validarNumero);

formulario.addEventListener('submit', validarCampos);