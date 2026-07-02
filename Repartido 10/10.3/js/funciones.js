/*3) Diseñar una página que permita ingresar una palabra y al presionar un botón muestre en
una tabla la palabra original y la indicación de si es palíndroma o no. Con cada nueva consulta
se agrega la información en la tabla.*/

    let listaDePalabras = [];

    document.getElementById("verificar").addEventListener("click", function() {
        
        let palabra = document.getElementById("palabra").value.trim();
        listaDePalabras.push(palabra);

        let espejo = "";
        for (let i = palabra.length - 1; i >= 0; i--) {
            espejo += palabra[i];
            
        }

        if (espejo == palabra) {
            document.getElementById("tabla").innerHTML += "<td>" + palabra +"</td>"+ "<td>   SI es Palíndroma  </td>";
        
        } else {
            document.getElementById("tabla").innerHTML += "<td>" + palabra +"</td>"+ "<td>   NO es Palíndroma  </td>";
        
        } 

    });






