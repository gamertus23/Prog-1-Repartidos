/*Escribir un programa que muestre el día actual y la hora en el siguiente formato:
 Día Actual: Domingo Hora: 10:45
Nota: investigar Date, getDay(), getHours(), getMinutes()*/

function crearFecha(){
    let dia=["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    let hoy = new Date();
    let min = hoy.getMinutes();
    
    if(min<10){
        min = "0" + min;
    }
    
    let resp = "Dia actual: " +dia[hoy.getDay()]+ " // Hora: "+hoy.getHours() +":"+ min;

    return resp;
}

console.log(crearFecha())