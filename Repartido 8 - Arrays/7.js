/*7) Se tiene la información de temperaturas de diversos puntos de control meteorológico del
país. Esa información está en un array. Por cada medida, se indica punto de control (número
entre 1 y 50) y temperatura observada.
Ej.: datos: (1, 20, 4, 12, 1, 22, 3, 18, 4,16, 5,17, 8, 21,1, 21, 3, 6)
Corresponde a: punto de control 1, temperatura 20; punto 4, temperatura 12; punto 1,
temperatura 22, etc.
Implementar una función que reciba un array cargado de esta manera y un valor y retorne
un array con los puntos de control donde el respectivo promedio de temperatura sea menor
que el valor dado. Para el ejemplo, si se indica valor 16, debe retornarse (3 4)
Nota: solamente considerar aquellos puntos en los que se registraron datos. */

function temperatura(arr, valor){
    let contar = new Array(51).fill(0);
    let resultado = new Array(51).fill(0);

    for (let i = 0; i< arr.length -1; i += 2){
        resultado[arr[i]]+=arr[i + 1];
        contar[arr[i]]++;
    }
    
    let res = [];

    for (let i = 1 ; i <= 50; i++){
        if(contar[i]>0){
            let promedio = resultado[i]/contar[i];
            if (promedio < valor){
                res.push(i)
            }
        }
    }       

    return res;

} 


let tempArr = [1, 20, 4, 12, 1, 22, 3, 18, 4,16, 5,17, 8, 21,1, 21, 3, 6];
console.log(temperatura(tempArr, 16 ))