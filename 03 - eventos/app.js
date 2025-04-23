//importaciones

// variables
const formulario = document.querySelector('form');
const nombre = document.querySelector('[name="nombre"]');
const apellido = document.querySelector('[name="apellido"]');
const telefono = document.querySelector('[name="telefono"]');
const documento = document.querySelector('[name="documento"]');
const usuario = document.querySelector('[name="usuario"]');
const contrasena = document.querySelector('[name="contrasena"]');

//funciones
const validar = (event) => {
  event.preventDefault();
  if (nombre.value.trim() == "") {
    alert("Ingrese el nombre");
    nombre.focus();
  }
  if (apellido.value.trim() == "") {
    alert("Ingrese el apellido");
    apellido.focus();
  }
  if (telefono.value.trim() == "") {
    alert("Ingrese el teléfono");
    telefono.focus();
  }
  if (documento.value.trim() == "") {
    alert("Ingrese el documento");
    documento.focus();
  }
}

//eventos
formulario.addEventListener('submit', validar);