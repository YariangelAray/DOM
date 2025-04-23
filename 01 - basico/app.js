let win = window;

let header = document.querySelectorAll('header div h1');
let parrafos = document.querySelectorAll('main p')
let container = document.querySelectorAll('.container');
let api = document.querySelector('#api');

let cantForms = document.forms;
let cantImages = document.images;
let cantSyles = document.styleSheets;
let cantScripts = document.scripts;

let lista = document.querySelectorAll('ul.list > li.item');
let card = document.querySelectorAll('div.cards > .card');
let cards = document.querySelector('div.cards');

console.log("Padre", cards.parentElement);

let body = document.body;
console.log("Hermano", body.previousElementSibling);

console.clear();


let elemento = document.querySelector('#elementos2');
elemento.textContent = "Nuevo texto";
elemento.innerHTML = '<p> texto </p> <p> texto 2 </p>'

setTimeout(() => {
  body.classList.add('bg-red');
}, 5000);
