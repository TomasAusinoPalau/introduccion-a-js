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



// generar inputs
document.querySelector("#siguiente-paso").onclick = function(event) {
    const $numeroIntegrantes = document.querySelector("#cantidad-integrantes");
    const numeroIntegrantes = Number($numeroIntegrantes.value);
    console.log($numeroIntegrantes)

    consultarIntegrantes();

    for (let i = 0; i < numeroIntegrantes; i++) {
        generarInputs(i)
    }    

    document.getElementById("calcular").className = "";
    event.preventDefault();
}   


//  reset
function reset ()  {
    let $integrante = document.querySelectorAll(".integrante")

    for(let i = 0; i < $integrante.length; i++) {
        $integrante[i].remove()
    }

    document.querySelector("#analisis").className = "oculto";
}

document.querySelector("#resetear").onclick = reset

// borrar inputs anteriores
function consultarIntegrantes() {
    let $integrante = document.querySelectorAll(".integrante")

    if($integrante.length > 1) {
        reset();
    }
}

// calcular edades
document.getElementById("calcular").onclick = function (event) {
    calculoEdades();

    event.preventDefault();
}

// generar inputs
function generarInputs(n) {
    
    let $div = document.createElement("DIV");
    $div.className = 'integrante';

    let $label = document.createElement("LABEL");
    $label.textContent = "Edad del integrante #: " + ( n + 1 );

    let $input = document.createElement("INPUT");
    $input.type = 'number';
    $input.className = 'edad'

    $div.appendChild($label);
    $div.appendChild($input);

    const $integrantes = document.getElementById("integrantes")
    $integrantes.appendChild($div)
    
}




// calculo
function edadMayor (n) {
    let resultado = n[0];

    for (let j = 0; j < n.length; j++) {
        
        

        if (n[j] > resultado) {
            
            resultado = n[j]
        }
    }
    return resultado
}

function edadMenor (n) {
    let resultado = n[0];

    for (let j = 0; j < n.length; j++) {

        if (n[j] < resultado) {
            
            resultado = n[j]
        }
    }
    return resultado
    
}

function edadPromedio (n) {
    resultado = 0;
    
    for (let j = 0; j < n.length; j++) {
        resultado += n[j];
    }

    return (resultado / n.length)
}

function calculoEdades () {
    document.querySelector("#analisis").className = "";
    const $edades = document.querySelectorAll(".edad");
    console.log($edades[0].value)

    let edades = []
    for (let i = 0; i < $edades.length; i++) {
        if($edades[i].value === "") {
            continue;
        }
        edades.push(Number($edades[i].value))
    }

    document.querySelector("#mayor-edad").innerText = edadMayor(edades);
    document.querySelector("#menor-edad").innerText = edadMenor(edades);
    document.querySelector("#promedio-edad").innerText = edadPromedio(edades);
}


