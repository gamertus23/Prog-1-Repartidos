/*4) Diseñar una página que permita ingresar 2 números y según la selección de un radio
button (+ - * /) realice la operación elegida.*/
const calcular = document.getElementById("calcular").addEventListener("click", function(){
    let resultado ="";
    const num1 = Number(document.getElementById("num1").value.trim());
    const num2 = Number(document.getElementById("num2").value.trim());
    let operacion;
    const radio = document.getElementsByName("igual");
    for (let i = 0; i < radio.length; i++){
        if (radio[i].checked) {
            operacion = radio[i].value;
        }
    }
    if (operacion == "+"){
        resultado = num1 + num2;
    }
    if (operacion == "-"){
        resultado = num1 - num2;
    }

    if (operacion == "*"){
        resultado = num1 * num2;
    }
    if (operacion == "/"){
        resultado = num1 / num2;
    }
    document.getElementById("resultado").value = resultado;
});
