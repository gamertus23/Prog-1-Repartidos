/*8) Dado un array cargado con números, indicar cuál es el número que aparece más veces y
su cantidad de ocurrencias. Si hubiera varios, cualquiera de ellos.
Ej: [1,5,1,5,7,8,1] retorna “el número 1 con 3 ocurrencias”*/
function contarVeces (arr){
    let valor = new Array(arr.length).fill(0);
    let contar = new Array(arr.length).fill(0);
    for (let i = 0; i < arr.length; i++){
        valor[arr[i]] = arr[i];
        contar[arr[i]] ++; 
    }

    let vecesRepetido = 0;
    let queNumeroEra = 0;
    for (let i = 0; i < arr.length ;i++ ){
        if(vecesRepetido < contar[i] ){
            vecesRepetido = contar[i];
            queNumeroEra = valor[i]; 
        }
    }
    return "El numero " + queNumeroEra + " con " + vecesRepetido + " ocurrencias"

}

let ejemplo = [1,5,1,5,7,8,1];
console.log(contarVeces (ejemplo));