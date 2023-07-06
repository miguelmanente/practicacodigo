/*
Utilizando un bucle, mostrar la suma y la media de los numeros introducidos
hasta introducir un numero negativo y ahí mostrar el resultado
*/
'use strict'

let suma = 0;
let cuenta = 0;
let numero = 0;

do{
    numero = parseInt(prompt("Ingrese números, para terminar ingrese un número negativo",0));

    if(isNaN(numero)){
        numero = 0;
    } else if(numero > 0){
        suma += numero;
        cuenta++;
    }
}while(numero >= 0);

alert("La suma de todos los números ingresados es: "+suma);
alert("La media de todos los números ingresados es: "+(suma/cuenta));



