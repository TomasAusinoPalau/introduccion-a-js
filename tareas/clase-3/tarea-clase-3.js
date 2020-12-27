// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!
const MY_NAME = "tomas";
const MOTHER_NAME = "victoria";

const nombreUsuario = (prompt("Escribe tu nombre por favor: " || "").toLowerCase());

if (MY_NAME === nombreUsuario) {
    console.log(`Hola, Tocayo! Yo también me llamo ${nombreUsuario}`)
} else if (MOTHER_NAME === nombreUsuario) {
    console.log(`Hola ${nombreUsuario}, te llamas igual que mi mamá`);
} else if (nombreUsuario.trim().length === 0) {
    console.log("No ingresaste ningún nombre");
} else {
    console.log(`Hola ${nombreUsuario}`);
}

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

const MY_AGE = 21;

const edadUsuario = Number(prompt("Cual es tu edad kingue? ")) 

if(MY_AGE > edadUsuario) {
    console.log("Eres menor que yo")
} else if (MY_AGE < edadUsuario) {
    console.log("Eres mayor que yo")
} else {
    console.log("Tú también tienes 21? qué bien compa")
}

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

const documento = (prompt("Tenés documento? Responde si o no" || "").toLowerCase())

if ("si" == documento && 18 <= edadUsuario) {

    console.log("Podes pasar")

} else if ("no" == documento) {
    console.log("No podes pasar")
} else {
    console.log("No te entendí, volvé a cargar la página")
}