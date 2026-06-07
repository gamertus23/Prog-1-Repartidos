/*3) Escribir una función que reciba un array cargado con números y retorne verdadero si
dichos números ya están ordenados en forma estrictamente ascendente.*/

function esAscendente (){
    let datos = [1, 2, 3,4,6];
    for(let i = 0; i < datos.length - 1 ; i++){
        if(datos[i]>datos[i+1]){
            return "no es ascendente";
        }
    }
return "es ascendente";
}

console.log(esAscendente())