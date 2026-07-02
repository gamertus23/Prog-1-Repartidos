/*5) 
1- Diseñar una página que permita ingresar números, los vaya mostrando en una tabla.
2- Simultáneamente muestra el mayor de los ingresados y el promedio. */
document.getElementById("siguiente").addEventListener("click", function(){
    let num1 = Number(document.getElementById("num1").value.trim());
    let num2 = Number(document.getElementById("num2").value.trim());
    let masGrande;
    if (num1 > num2){
        masGrande = num1 + " - Es el mas grande";
    } else {
        masGrande= num2 + " - Es el mas grande"; 
    }





    document.getElementById("tabla").innerHTML += "<td>"+num1+"</td>" + "<td>"+num2+"</td>" + "<td>"+ masGrande +"</td>"+ "<td>" + ((num1 + num2)/2) +"</td>";  
});