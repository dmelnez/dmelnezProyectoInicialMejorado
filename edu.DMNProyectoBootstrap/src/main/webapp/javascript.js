// Apartado del boton de cambio de color del fondo

const toggleButton = document.getElementById('botonColores');
const body = document.body;

botonColores.addEventListener('click', () => {
  body.classList.toggle('modo-oscuro');
});

function validar() {
  console.log("el valor es:")
  console.log(document.getElementById("segunda").value);
  if (document.getElementById("segunda").value != document.getElementById("primera").value ) {
      alert("no coinciden las contraseñas")
      document.getElementById("segunda").focus() /*en esto conseguimos que el cursor esté sobre el campo */
      return false
  }
  else
      return true

}


// Funcion de cambio de color del div, el cual contiene, todos los productos.
var fondoOriginal = true;


function cambiarFondo() {
  var div = document.getElementById("miDiv");
  var lateralMenu = document.getElementById("lateralMenu");
  if (fondoOriginal) {
    // Div de los productos
    div.style.backgroundColor = "black";
    div.style.color = "white"; // Cambiar color del texto a blanco

 

    fondoOriginal = false;
  } else {
    div.style.backgroundColor = "white";
    div.style.color = "#000"; // Restaurar color del texto por defecto

    fondoOriginal = true;
  }
}


// Funcion de cambio de color de la cesta.
var fondoOriginalCesta = true;


function cambiarFondoCesta() {
  var div = document.getElementById("miDiv");
  if (fondoOriginal) {
    // Div de los productos
    div.style.backgroundColor = "black";
    div.style.color = "white"; // Cambiar color del texto a blanco

 

    fondoOriginalCesta = false;
  } else {
    div.style.backgroundColor = "white";
    div.style.color = "#000"; // Restaurar color del texto por defecto

    fondoOriginalCesta = true;
  }
}

