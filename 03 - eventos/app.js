//importaciones

// variables
const formulario = document.querySelector('form');
const boton = document.querySelector('#btn_validar');

const nombre = document.querySelector('[name="Nombre"]');
const apellido = document.querySelector('[name="Apellido"]');
const telefono = document.querySelector('[name="Telefono"]');
const documento = document.querySelector('[name="Documento"]');
const usuario = document.querySelector('[name="Usuario"]');
const contrasena = document.querySelector('[name="Contrasena"]');
const checkBox = document.querySelector('[name="politica"]');

const campos = [nombre, apellido, telefono, documento, usuario, contrasena];

const teclasEspeciales = ["Backspace", "Tab", "Enter", "ArrowLeft", "ArrowRight", "Delete"];

//funciones

const validarTexto = (event) => {
  const key = event.key;
  const regex = /^[\D]*$/i;  
  if (!regex.test(key)) {
    event.preventDefault();
  }
}

const validarNumero = (event) => {
  const key = event.key;
  const regex = /^[\d]*$/;  
  if (!regex.test(key) && !teclasEspeciales.includes(key)) {
    event.preventDefault();
  }
}

const agregarError = (campo) => {
  campo.classList.add('borde-rojo');
  if (campo.nextElementSibling) campo.nextElementSibling.remove();
  
  let texto = document.createElement('span');
  texto.textContent = `El campo es obligatorio.`;
  texto.classList.add('texto-advertencia');
  campo.insertAdjacentElement('afterend', texto); 
}

const quitarError = (campo) => {
  campo.classList.remove('borde-rojo')
  campo.nextElementSibling.remove();
}

const validarCampos = (event) => {

  event.preventDefault();

  let mensaje = "";
  let regexContra = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/;

  for (let i = 0; i < campos.length; i++) {    

    if (campos[i].value.trim() == "") {               
      agregarError(campos[i]);
    }
    else if (campos[i].className == 'borde-rojo') {
      quitarError(campos[i]);              
    }
  }

  if (contrasena.value.trim() != "" && !regexContra.test(contrasena.value)) {
    alert("La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un caracter especial");
  }
}

const validarCampo = (event) => {
  let campo = event.target;

  if (campo.value.trim() == "") {
    agregarError(campo);
  }
  else if(campo.className == 'borde-rojo') {
    quitarError(campo)
  }
}

const habilitarBoton = () => {  
  if (!checkBox.checked) {
    boton.setAttribute('disabled', '');
  }
  else if (boton.disabled) {
    boton.removeAttribute('disabled');
  }
}

//eventos

addEventListener('DOMContentLoaded', habilitarBoton);
checkBox.addEventListener('change', habilitarBoton);

nombre.addEventListener('keydown', validarTexto);
apellido.addEventListener('keydown', validarTexto);
telefono.addEventListener('keydown', validarNumero);
documento.addEventListener('keydown', validarNumero);

nombre.addEventListener('blur', validarCampo);
apellido.addEventListener('blur', validarCampo);
telefono.addEventListener('blur', validarCampo);
documento.addEventListener('blur', validarCampo);
usuario.addEventListener('blur', validarCampo);
contrasena.addEventListener('blur', validarCampo);

formulario.addEventListener('submit', validarCampos);