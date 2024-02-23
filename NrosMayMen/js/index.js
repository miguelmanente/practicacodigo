/* Ingresados dos numeros verificar si son iguales o cual es el mayor y/o el menor */
let numero1 = parseInt(prompt("Ingrese un número positivo: ",0));
let numero2 = parseInt(prompt("Ingrese otro número positivo: ",0));

while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){

    alert("Los caracteres ingresados NO SON números positivos o usted ingresó letras, por favor ingrese nuevamente... ")
    numero1 = parseInt(prompt("Ingrese un número positivo: ",0));
    numero2 = parseInt(prompt("Ingrese otro número positivo: ",0));
}

if (numero1 == numero2){
    alert("Los números son iguales");
} else if(numero1 > numero2){
    alert("El número mayor es: "+numero1);
    alert("El número menor es: "+numero2);
} else if(numero2 > numero1){
    alert("El número mayor es: "+numero2);
    alert("El número menor es: "+numero1);
}   else {
    alert("Los números ingresados no son correctos, ingreselos nuevamente");
}