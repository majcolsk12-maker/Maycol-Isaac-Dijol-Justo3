function saludar() {
    let nombre = document.getElementById("nombre").value;
    let resultado = document.getElementById("resultado");

    if (nombre == "") {
        resultado.innerHTML = "Por favor, escribe tu nombre.";
    } else {
        resultado.innerHTML = " ¡Bienvenido/a! " + nombre + " que disfrutes de esta Presentacion"
    }
}