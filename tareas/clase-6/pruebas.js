function probarCantidadIntegrantes () {
    console.assert( 
        validarCantidadIntegrantes(0) ===
        "El número de integrantes debe ser mayor a 0",
        "cantidad Integrantes no validó que integrantes sea mayor a 0",
    );
    console.assert( 
        validarCantidadIntegrantes((4.5)) ===
        "El número de integrantes tiene que ser un número entero",
        "cantidad Integrantes no validó que integrantes no sea un número entero",
    );
    console.assert( 
        validarCantidadIntegrantes(51) ===
        "El número de integrantes no puede ser mayor a 50",
        "cantidad Integrantes no validó que integrantes sea menor a 50",
    );
}

function probarValidarEdades () {
    console.assert(
        validarEdades([1, 0, 4, 2]) ===
        `La edad del integrante 2 tiene que ser mayor a 0`,
        "edad Integrante no valido que la edad sea menor a 0",
    );
    console.assert(
        validarEdades([1, 4.5, 4, 2]) ===
        `La edad del integrante 2 tiene que ser un número entero`,
        "edad Integrante no valido que la edad sea un número entero",
    );
    console.assert(
        validarEdades([2, "asd", 57, 8]) ===
        `La edad del integrante 2 tiene que ser solo números`,
        "edad Integrante no valido que la edad sea solo numeros",
    )

    
}

probarCantidadIntegrantes();
probarValidarEdades();