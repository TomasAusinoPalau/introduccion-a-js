/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/


/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

document.querySelector("#siguiente-paso").onclick = function(event) {
    const $numeroIntegrantes = document.querySelector("#cantidad-integrantes");
    const numeroIntegrantes = Number($numeroIntegrantes.value);

    for (let i = 0; i < numeroIntegrantes; i++) {
        generarInputs(i)
    }
    document.getElementById("calcular").className = "";
    event.preventDefault();
}   

document.querySelector("#resetear").onclick = function () {

}

function generarInputs(n) {
    
    let $div = document.createElement("DIV");
    $div.className = 'integrante';

    let $label = document.createElement("LABEL");
    $label.textContent = "Edad del integrante #: " + ( n + 1 );

    let $input = document.createElement("input");
    $input.type = 'number';

    $div.appendChild($label);
    $div.appendChild($input);

    const $integrantes = document.getElementById("integrantes")
    $integrantes.appendChild($div)
    
}

function calculo () {

}


