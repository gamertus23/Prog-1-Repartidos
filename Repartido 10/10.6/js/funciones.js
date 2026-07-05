/*6) Diseñar una página que ingrese un nombre, y si no está repetido, lo muestra en una lista */

let nombres = [];
window.addEventListener("load", inicio);

function inicio(){
    document.getElementById("siguiente").addEventListener("click", agregarNombre());
}

function agregarNombre() {
    let nombreIngresado = document.getElementById("nombre").value.trim();
    if (nombres.includes(nombreIngresado)){
        alert("Este nombre ya existe");
    } else {
        nombres.push(nombreIngresado);
        agregarEnLaLista(nombreIngresado);
    }
    document.getElementById("nombre").value = "";
}

function (agregarEnLaLista){
    let lista = document.getElementById("lista");
    let li = document.createElement("li");
    let unNombre = document.createTextNode(nombre);
    li.appendChild(unNombre);
    lista.appendChild(li);      
}
