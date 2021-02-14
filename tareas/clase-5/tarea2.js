document.querySelector("#ingresar").onclick = function () {
    const nombreUsuario = document.querySelector("#nombre-usuario").value;
    const edadUsuario = document.querySelector("#edad-usuario").value;

    let title = document.querySelector("#resultado");
    title.innerText += ` ${nombreUsuario}`
}