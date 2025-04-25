//importaciones

// variables
const formulario = document.querySelector('form');
const nombre = document.querySelector('[name="Nombre"]');
const apellido = document.querySelector('[name="Apellido"]');
const telefono = document.querySelector('[name="Telefono"]');
const documento = document.querySelector('[name="Documento"]');
const usuario = document.querySelector('[name="Usuario"]');
const contrasena = document.querySelector('[name="Contrasena"]');

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

const validarCampos = (event) => {

  event.preventDefault();

  let camposVacios = [];
  let regexContra = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/;


  campos.forEach(campo => {
    if (campo.value.trim() == "") {
      camposVacios.push(campo.name);  
    }
  });

  let mensaje = "";

  if (camposVacios.length > 1) {
    mensaje = `Los siguientes campos son obligatorios: \n⊗ ${camposVacios.join('\n ⊗ ')}\n`;    
  } 
  else if (camposVacios.length == 1) {
    mensaje = `El siguiente campo es obligatorio: \n⊗ ${camposVacios[0]}\n`;    
  }  

  if (!regexContra.test(contrasena.value)) {
    mensaje += "\nLa contraseña debe tener al menos 8 caracteres, una mayúscula y un número";    
  }

  if (mensaje != "") {
    alert(mensaje);    
  } 
  else {
    alert("Formulario enviado correctamente");    
  }
}

//eventos
nombre.addEventListener('keydown', validarTexto);
apellido.addEventListener('keydown', validarTexto);
telefono.addEventListener('keydown', validarNumero);
documento.addEventListener('keydown', validarNumero);

formulario.addEventListener('submit', validarCampos);