/*9) Dado un array ordenado de números, implementar una función que retorne un nuevo array
sin los elementos que estén duplicados en el array original.
Ej: [1,1,56,67,67,101,156] retorna [1, 56, 67, 101, 156]*/

function modificarArr(arr){
    let nuevoArr = [];
    for (let i = 0; i < arr.length ; i++){
        if (arr[i] !== arr[i + 1]){
            nuevoArr.push(arr[i]);
        }
    }
    return nuevoArr
}

let ejemplo = [1,1,56,67,67,101,156];
console.log(modificarArr(ejemplo));
