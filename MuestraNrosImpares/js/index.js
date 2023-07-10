/* Mostrar todos los numeros impares que hay entre dos numeros introducidos por el usuario */

let numero1 = parseInt(prompt("Ingrese un número: ",0));
let numero2 = parseInt(prompt("Ingrese otro número: ",0));

document.write("<h1>Desde el número "+numero1+" al número "+numero2+" solamente mostramos los impares </h1>");
while(numero1 < numero2){
    
	if(numero1 % 2 != 0){
		document.write(+numero1+" ");
	}
    numero1++;
}