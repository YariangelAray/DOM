let padre = document.querySelector('.container');
let node = document.createElement('h2');

node.textContent = "Texto de segundo nivel"

let texto = document.createTextNode("Palabras para el nodo de texto");

padre.appendChild(node);
padre.appendChild(texto);

let lista = document.querySelector('#list');

let textos = ["HTML", "CSS", "JS"];

textos.forEach(texto => {
  let item = document.createElement('li');
  item.classList.add('item');
  item.textContent = texto;
  lista.appendChild(item);
});

let card = document.querySelector('.card');
let list_card = card.querySelector('#list');

let titulo = document.createElement('h2');
titulo.textContent = "Titulo de la card";

card.insertBefore(titulo, list_card);

let beforeBegin = document.createElement('li');
beforeBegin.classList.add('item', 'before');
beforeBegin.textContent = "Antes de la lista";

let afterBegin = document.createElement('li');
afterBegin.classList.add('item');
afterBegin.textContent = "Despues del Inicio de la lista";

let beforeEnd = document.createElement('li');
beforeEnd.classList.add('item', 'before');
beforeEnd.textContent = "Antes del Final de la lista";

let afterEnd = document.createElement('li');
afterEnd.classList.add('item');
afterEnd.textContent = "Despues de la lista";

list_card.insertAdjacentElement('beforebegin', beforeBegin);
list_card.insertAdjacentElement('beforeend', beforeEnd);

list_card.insertAdjacentElement('afterbegin',afterBegin);
list_card.insertAdjacentElement('afterend', afterEnd);

// LOS DIAS DE LA SEMANA

let cards_dias = document.querySelector('#dias');

const dias = [
  {
    id: 1,
    name: 'Lunes',
    img: 'https://picsum.photos/640/360',
    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum aliquam recusandae, error voluptatibus doloribus nam officiis animi quae optio ad ipsa! Ipsum quod voluptas doloribus doloremque est odit iusto iure.'
  },
  {
    id: 2,
    name: 'Martes',
    img: 'https://picsum.photos/640/360',
    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum aliquam recusandae, error voluptatibus doloribus nam officiis animi quae optio ad ipsa! Ipsum quod voluptas doloribus doloremque est odit iusto iure.'
  },
  {
    id: 3,
    name: 'Miercoles',
    img: 'https://picsum.photos/640/360',
    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum aliquam recusandae, error voluptatibus doloribus nam officiis animi quae optio ad ipsa! Ipsum quod voluptas doloribus doloremque est odit iusto iure.'
  },
  {
    id: 4,
    name: 'Jueves',
    img: 'https://picsum.photos/640/360',
    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum aliquam recusandae, error voluptatibus doloribus nam officiis animi quae optio ad ipsa! Ipsum quod voluptas doloribus doloremque est odit iusto iure.'
  },
  {
    id: 5,
    name: 'Viernes',
    img: 'https://picsum.photos/640/360',
    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum aliquam recusandae, error voluptatibus doloribus nam officiis animi quae optio ad ipsa! Ipsum quod voluptas doloribus doloremque est odit iusto iure.'
  },
  {
    id: 6,
    name: 'Sabado',
    img: 'https://picsum.photos/640/360',
    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum aliquam recusandae, error voluptatibus doloribus nam officiis animi quae optio ad ipsa! Ipsum quod voluptas doloribus doloremque est odit iusto iure.'
  },
  {
    id: 7,
    name: 'Domingo',
    img: 'https://picsum.photos/640/360',
    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum aliquam recusandae, error voluptatibus doloribus nam officiis animi quae optio ad ipsa! Ipsum quod voluptas doloribus doloremque est odit iusto iure.'
  }
];

dias.forEach(({name, img, paragraph}) => {

  let card = document.createElement('div');
  card.classList.add('card')

  let card_header = document.createElement('div')
  card_header.classList.add('card__header')
  card.append(card_header);

  let card_title = document.createElement('h1');
  card_title.classList.add('card__title')
  card_title.textContent = name;
  card_header.append(card_title);

  let card_body = document.createElement('div');
  card_body.classList.add('card__body');
  card.append(card_body);

  let card_img = document.createElement('img');
  card_img.setAttribute('src', img);
  card_img.setAttribute('alt', name);
  card_img.classList.add('card__img');
  card_body.append(card_img);

  let card_paragraph = document.createElement('p');
  card_paragraph.classList.add('card__paragraph');
  card_paragraph.textContent = paragraph;
  card_body.append(card_paragraph);

  cards_dias.append(card);
});