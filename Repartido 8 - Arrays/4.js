/*4) Se tiene una caja fuerte rodeada de 100 sensores de alarma. Cada sensor puede estar
prendido o no. Implementar una función que recibe el array con la información de los
sensores y retorna la cantidad de sensores que cumplen que él y sus dos vecinos están
prendidos
Ejemplo con 10 sensores: (true, true, false, true, true, true, true, true, false, true), retorna 4 */
function detectarSensores(){
    let sensores = [true, true, false, true, true, true, true, true, false, true];
    let cantidad =0;
    for(let i = 1 ; i < sensores.length - 1; i++){
        if((sensores[i - 1]==sensores[i])&&(sensores[i]==sensores[i + 1])&&(sensores[i]==true)){
            cantidad++;

        }
    }
    return cantidad;
}

console.log(detectarSensores());