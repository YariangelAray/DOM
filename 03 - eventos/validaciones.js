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

  if ((campo.tagName == 'INPUT' && campo.value.trim() == "") || (campo.tagName == 'SELECT' && campo.selectedIndex == 0)) {
    agregarError(campo);
  }
  else if(campo.className.includes('borde-rojo')) {
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

export const datos = {};

export const validarCampos = (event) => {

  let valido = true;
  let regexContra = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/;

  const campos = [...event.target].filter((elemento) => (elemento.tagName == 'INPUT' && elemento.name != 'politica') || elemento.tagName == 'SELECT');  

  campos.forEach((campo) => {   
    
    if ((campo.tagName == 'INPUT' && campo.value.trim() == "") || (campo.tagName == 'SELECT' && campo.selectedIndex == 0)) {
      agregarError(campo);
      valido = false;
    }
    else if (campo.className.includes('borde-rojo')) {
      quitarError(campo);
    }
    else datos[campo.getAttribute('name')] = campo.value;
  });

  const contrasena = campos.find((campo) => campo.name == 'Contrasena');
  
  if (contrasena.value.trim() != "" && !regexContra.test(contrasena.value)) {
    alert("La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un caracter especial");
    valido = false;
  }

  return valido;
}

