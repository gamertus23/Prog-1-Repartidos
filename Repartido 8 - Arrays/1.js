/*1) Dado un array y un valor, implementar una función que retorne el número más cercano al
valor dado. El más cercano puede ser un valor superior o inferior. Si hubiera más de un
posible resultado, retornar cualquiera de ellos.
Ejemplo: datos: 10 18 23 4 -5 50 , valor: 19, el más cercano es 18*/
let datos=[ 10, 18, 23, 4, -5, 50];

function numeroCercano (valor) {
    let menor = Infinity;
    let cualEsElMasCercano=0
    for(let i = 0; i < datos.length ; i++){
        let cerca = Math.abs(valor - datos[i]);
        if (cerca < menor) {
            menor = cerca;
            cualEsElMasCercano = datos[i]
        }
    }
return cualEsElMasCercano;
}

console.log(numeroCercano(19));
