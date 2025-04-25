//importaciones
import { validarCampo, validarFormulario, validarNumero, validarTexto } from "./validaciones.js";

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

// const campos = [nombre, apellido, telefono, documento, usuario, contrasena];

// // const { nombre, apellido, telefono, documento, usuario, contrasena } = campos;

//funciones


const habilitarBoton = () => {  
  if (!checkBox.checked) boton.setAttribute('disabled', '');
  
  else if (boton.disabled) boton.removeAttribute('disabled');
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

formulario.addEventListener('submit', validarFormulario);