
const $numeros = document.querySelectorAll("li");
const numerosArray = Array.prototype.slice.call($numeros);
const numerosValue = numerosArray.textContent
console.log(numerosValue)

let resultadoMayor = 0;
let resultadoMenor = 0;
let resultadoPromedio = 0;

for(let i = 0; i < numerosString.length; i++) {
    if (numerosString[i].value > numerosString[i + 1].value) {
        resultadoMayor = numeros[i].value
    }
}