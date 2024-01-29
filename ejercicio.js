/*let nomAlum = prompt("Ingrese el nombre del alumno");
let materia = prompt("Ingrese el nombre de la materia");
*/
let n1 
let n2
let n3

let c2=n2;
let c3=n3;
do{
    n1 = parseFloat(prompt("Ingrese la primera nota"));
    debugger
    if(n1 >= 0 && n1 <= 10 ){
        alert("nota 1:" + n1);
    } else{
        let c=n1;
        alert("Ingrese nuevamente la nota 1 (rango de 0 a 10)");
        n1 = parseFloat(prompt("Ingrese la primera nota"));
        alert(c);
    }
}while(c<11)

do{
    n2 = parseFloat(prompt("Ingrese la segunda nota"));
    debugger
    if(n2 >= 0 && n2 <= 10 ){
        console.log("nota 2:" + n2);
    }
}while(c2<11)
alert("Ingrese nuevamente la nota 2 (rango de 0 a 10)");

do{
    n3 = parseFloat(prompt("Ingrese la tercera nota"));
    debugger
    if(n3 >= 0 && n3 <= 10 ){
        console.log("nota 3:" + n3);
    }
}while(c3<11)
alert("Ingrese nuevamente la nota 3 (rango de 0 a 10)");


/*if (n1 >= 0 && n1 <= 10) {
    let n2 = parseFloat(prompt("Ingrese la segunda nota"));
    debugger
    if (n2 >= 0 && n2 <= 10) {
        let n3 = parseFloat(prompt("Ingrese la tercera nota"));
    } else {
        alert("Ingrese nuevamente la nota 2 (rango de 0 a 10)");
        n2 = parseFloat(prompt("Ingrese la segunda nota"));
       
    }
} else {
    alert("Ingrese nuevamente la nota 1 (rango de 0 a 10)");
    n1 = parseFloat(prompt("Ingrese la primera nota"));
    
} */
/*if (n2 >= 0 && n2 <= 10) {
    let n3 = parseFloat(prompt("Ingrese la tercera nota"));
} else {
    alert("Ingrese nuevamente la nota 2 (rango de 0 a 10)");
    n2 = parseFloat(prompt("Ingrese la segunda nota"));
}
if (n3 >= 0 && n3 <= 10) {
    let prom = (n1 + n2 + n3) / 3;
    alert("El promedio es: " + prom);
} else {
    alert("Ingrese nuevamente la nota 3 (rango de 0 a 10)");
    n3 = parseFloat(prompt("Ingrese la tercera nota"));
}
if (prom >= 7) {
    alert(nomAlum + "¡Felicidades! Has aprobado con un promedio de " + prom);
} else {
    alert(nomAlum + ", gracias por tu esfuerzo. Nos vemos pronto en clases. El promedio obtenido es " + prom);
}*/



