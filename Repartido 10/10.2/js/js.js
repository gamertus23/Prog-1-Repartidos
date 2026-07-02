//2) Diseñar una página que permita ingresar un número y al presionar un botón muestre en
//una lista cada número ingresado y la indicación de si es par o impar.


let listaNumeros = [];

document.getElementById("botonAgregar").addEventListener("click",  function() {
    const numeroAgregar = document.getElementById("numeroAgregado").value.trim();

    listaNumeros.push(numeroAgregar);
    


    if (parseInt(numeroAgregar) % 2 == 0){
        document.getElementById("imprimir").innerHTML += "<li>" + numeroAgregar + "  Es PAR" + "</li>";
    } else {
        document.getElementById("imprimir").innerHTML += "<li>" + numeroAgregar + "  Es IMPAR" + "</li>";

    }

});
