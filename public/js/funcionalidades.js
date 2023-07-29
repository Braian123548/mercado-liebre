//Con esto controlo el nav en celulares

let navAbierto = true;

function ocultarNav() {
  let nav = document.getElementById("home-header-nav")
  if (navAbierto) {
    nav.style.display = "none";
    navAbierto = false;
  } else {
    nav.style.display = "block";
    navAbierto = true;
  }
}

//Este codigo es para que los h3 del main siempre esten encima del primer hijo del contenedor tarjeta 


const contenedoresTarjeta = document.querySelectorAll('.contenedor-tarjeta');
const h3Elements = document.querySelectorAll('.home-main h3');

function actualizarPosicionH3() {
  contenedoresTarjeta.forEach((contenedor, index) => {
    const primerHijo = contenedor.firstElementChild;
    const h3Element = h3Elements[index];

    const posicionPrimerHijo = primerHijo.getBoundingClientRect();
    const margenIzquierdo = posicionPrimerHijo.left - contenedor.getBoundingClientRect().left;

    h3Element.style.marginLeft = `${margenIzquierdo}px`;
  });
}

// Ejecutar la función inicialmente y cada vez que se redimensione la ventana
window.addEventListener('DOMContentLoaded', actualizarPosicionH3);
window.addEventListener('resize', actualizarPosicionH3);


//CARRUCEL

const carouselSlide = document.querySelector('.carousel-slide');
const carouselItems = document.querySelectorAll('.carousel-item');
const carouselNavButtons = document.querySelectorAll('.carousel-navigation button');

let currentIndex = 0;

function updateCarousel() {
  carouselSlide.style.transform = `translateX(-${currentIndex * 100}%)`;

  carouselNavButtons.forEach((button, index) => {
    if (index === currentIndex) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}

carouselNavButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel();
  });
});



$(document).ready(function() {
  $('.tarjeta').on('mouseover', function() {
    $(this).find('h4').hide();
  });

  $('.tarjeta').on('mouseout', function() {
    $(this).find('h4').show();
  });
});