export const validarTexto = (event) => {
  const key = event.key;
  const regex = /^[\D]*$/i;  
  if (!regex.test(key) || event.target.value.length > 40) {
    
    event.preventDefault();
  }
}

export const validarNumero = (event) => {
  const key = event.key;
  const regex = /^[\d]*$/;
  const teclasEspeciales = ["Backspace", "Tab", "Enter", "ArrowLeft", "ArrowRight", "Delete"];

  if (!regex.test(key) && !teclasEspeciales.includes(key)) {
    event.preventDefault();
  }
}

export const validarCampo = (event) => {
  let campo = event.target;

  if (campo.value.trim() == "") {
    agregarError(campo);
  }
  else if(campo.className == 'borde-rojo') {
    quitarError(campo)
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

const obtenerCampos = (hijos) => {

}

export const validarCampos = (event) => {

  let valido = true;
  let regexContra = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/;

  const campos = [...event.target].filter((elemento) => elemento.hasAttribute('required'));  
  
  console.log(campos);
  
  // obtenerCampos(hijos);
  
  // const campos

  for (let i = 0; i < campos.length; i++) {    

    if (campos[i].value.trim() == "" || (campos[i].tagName == 'SELECT' && campos[i].selectedIndex == 0)) {               
      agregarError(campos[i]);
      valido = false;
    }
    else if (campos[i].className == 'borde-rojo') {
      quitarError(campos[i]);              
    }
  }

  const contrasena = campos.filter((campo) => { campo.getAttribute('name') === 'Contrasena' });

  console.log(contrasena[0]);
  
  if ( contrasena && contrasena.value.trim() != "" && !regexContra.test(contrasena.value)) {
    alert("La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un caracter especial");
    valido = false;
  }

  return valido;
}

export const validarFormulario = (event) => {
  event.preventDefault();
  
  if (validarCampos(event)) console.log("Enviado...");
}
