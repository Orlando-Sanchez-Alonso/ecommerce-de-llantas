var saludos = "Hola estas en Mexico \n¿Como te llamas?";
console.log(saludos);

let ciudad = "Izucar de Matamoros, Puebla"

let nombre = "Orlando";
console.log(nombre);

const apellido = "Sanchez Alonso";
console.log(apellido);

const edad = 32
console.log(edad);

console.log(`Tu nombre es: ${nombre} con los siguientes apellidos  ${apellido}, tu edad es ${edad} años`);

console.log(`${saludos} Mi nombre es ${nombre} y tengo ${edad} años, soy de ${ciudad}`);

let numero = 50;
let numero2 = 10;
let numero3 = 4;

const resu = numero + numero2;
console.log(`${nombre} El resultado de ${numero} + ${numero2} es = ${resu}`);
const resu1 = resu * numero3;
console.log(`${nombre} tu multiplicacion de ${resu} X ${numero3} = ${resu1}`);

const edadUsuario = parseInt(prompt("Cuantos años tienes: "));
if (edadUsuario >= 18){
    console.log("Puedes ir al Antro");
}
else{
    console.log("Estas morro todavia :(");
}
