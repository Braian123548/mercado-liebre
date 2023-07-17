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


