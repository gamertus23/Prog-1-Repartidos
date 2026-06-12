/*10) Dado un array cargado con números y un valor, indicar en qué posiciones (índices) se
encuentran dos elementos que sumados tienen como resultado el valor indicado. En caso de
de haber más de un par, mostrar cualquiera de ellos. En caso de que no exista ningún par
posible indicarlo.
Ej: [23, 4, 56, 67, 8, 55] y valor: 64 mostrar “2 y 4”*/

function suma (arr, valor){
    let v1 = -1;
    let v2 = -1;
    for(let i = 0; i < arr.length; i++){
        for(let j = 1; j < arr.length; j++ ){
            if((arr[i]+arr[j]) == valor){
                v1 = i;
                v2 = j;
            }        
        }
    }

    if (v1 == -1 || v2 == -1){
        return "no hay ningun par que sume " + valor
    } else {
        return v1+" y "+v2
    }
    
}

console.log(suma([23, 4, 56, 67, 8, 55], 64));
