let fondo = document.querySelector("body");
let boton = document.querySelector("button");
let color = document.getElementById("currentColor");

function cambiarFondo() {
    let colorAleatorio = "#" + Math.floor(Math.random() * 16777215).toString(16);
    fondo.style.backgroundColor = colorAleatorio;
    color.textContent = colorAleatorio;
    color.style.color = colorAleatorio;
}

boton.addEventListener("click", cambiarFondo);