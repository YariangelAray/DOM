//importaciones
import { validarCampo, validarCampos, validarNumero, validarTexto, validarCheckeo, datos } from "./validaciones.js";

// variables
const formulario = document.querySelector('form');
const boton = document.querySelector('#btn_validar');

const nombre = document.querySelector('[name="Nombre"]');
const apellido = document.querySelector('[name="Apellido"]');
const telefono = document.querySelector('[name="Telefono"]');
const ciudad = document.querySelector('[name="Ciudad"]');
const documento = document.querySelector('[name="Documento"]');
const usuario = document.querySelector('[name="Usuario"]');
const contrasena = document.querySelector('[name="Contrasena"]');

const generos = document.querySelectorAll('[name="Genero"]')
const habilidades = document.querySelectorAll('[name="Habilidades"]')

const checkBox = document.querySelector('[name="politica"]');

// const campos = [nombre, apellido, telefono, documento, usuario, contrasena];

// // const { nombre, apellido, telefono, documento, usuario, contrasena } = campos;

//funciones

const habilitarBoton = () => {  
  if (!checkBox.checked) boton.setAttribute('disabled', '');
  
  else if (boton.disabled) boton.removeAttribute('disabled');
}

const crearTabla = () => {
  const primeraSeccion = document.querySelector('section:first-child');

  const tabla = document.createElement('table');
  const tablaHeader = document.createElement('thead');
  tabla.append(tablaHeader);
  const tablaColumna = document.createElement('tr');
  tablaHeader.append(tablaColumna);
  const tablaTitulo = document.createElement('th');
  tablaTitulo.textContent = "Hola";
  tablaColumna.append(tablaTitulo);

  const segundaSeccion = document.createElement('section');
  const div = document.createElement('div');
  div.classList.add('container');
  segundaSeccion.append(div);
  div.append(tabla);
  
  primeraSeccion.insertAdjacentElement('afterend', segundaSeccion);
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
ciudad.addEventListener('blur', validarCampo);
documento.addEventListener('blur', validarCampo);
usuario.addEventListener('blur', validarCampo);
contrasena.addEventListener('blur', validarCampo);

[...generos].forEach((campo) => {
  campo.addEventListener('change', validarCheckeo);
});

[...habilidades].forEach((campo) => {
  campo.addEventListener('change', validarCheckeo);
});


formulario.addEventListener('submit', (event) => {
  event.preventDefault();

  if (validarCampos(event)) {

    console.log("Datos guardados:", datos);

    alert("Formulario enviado.");
    event.target.reset();

    boton.setAttribute('disabled', '');
  }
});