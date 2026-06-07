/*5) Para poner moquette en una habitación rectangular se pueden combinar distintos recortes.
Se tienen varios trozos rectangulares. De cada uno se sabe largo y ancho. Esa información
está en un array.
Ej. 2 4 1 3 5 6 son 3 trozos (de 2*4, 1*3 y 5*6, totalizando 41 m2).
Implementar una función que reciba el array y el tamaño de la habitación y retorne si la cubre
o no.*/

    function cualcularEspacio (tamañoHabitacion, arr){
        let total=0;
        for(let i = 0; i<arr.length -1;i+=2){
            total += (arr[i]*arr[i+1]);
        }
        if (total >= tamañoHabitacion){
            return "si cubre";
        }else{
            return "no cubre";
        }
    }


    let medidas = [2, 4, 1, 3, 5, 6];
    console.log(cualcularEspacio(60, medidas));