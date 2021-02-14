
document.querySelector("#calcular").onclick = function () {
    const horas = Number(document.querySelector("#horas").value);
    const minutos = Number(document.querySelector("#minutos").value);
    const segundos = Number(document.querySelector("#segundos").value);

    let resultado = document.querySelector("#resultado")

    resultado.innerText = `El tiempo total son ${calcularTiempo(horas, minutos, segundos)} segundos`


}

function calcularTiempo(horas, minutos, segundos) {

    horas *= 60;
    horas *= 60;
    minutos *= 60;
    return horas + minutos + segundos
}