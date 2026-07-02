window.addEventListener("load", inicio)

function inicio(){
    document.getElementById("sumador").addEventListener("click", proceso);
}

function proceso(){
    let num1 = document.getElementById("n1").value;
    let num2 = document.getElementById("n2").value;
    
    let totalSuma = parseInt(num1) + parseInt(num2);
    let totalProducto =  parseInt(num1) * parseInt(num2);

    document.getElementById("idResultado").innerHTML = "La suma de ambo es de: " + totalSuma +" - Y el producto de ambos valores es de: " + totalProducto; 
}