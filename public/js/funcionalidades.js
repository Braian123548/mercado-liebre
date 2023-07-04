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
