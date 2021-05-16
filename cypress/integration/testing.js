/// <reference types="Cypress" />

const URL = "http://127.0.0.1:8080/";

context('Calculador Edades', () => {
    before(() => {
        cy.visit(URL);
    });
    
    const cantidadIntegrantes = 3;
    describe('completa la cantidad de integrantes', () => {

        it("se asegura que halla un input de cantidadIntegrantes", () => {
            cy.get("#cantidad-integrantes")
        });

        it('añade 3 integrantes', () => {
            cy.get('#cantidad-integrantes').type(cantidadIntegrantes)
            cy.get('#siguiente-paso').click()
        })
    })

    describe('completa las edades de integrantes', () => {
        const edades = [38, 11, 43];

        it("se asegura que halla 3 integrantes", () => {
            const cantidadIntegrantesHTML = cy.get(".edad");
            

            return (cantidadIntegrantes === cantidadIntegrantesHTML.length)
        })


        it("se asegura nuevamente que halla 3 integrantes", () => {
            return cy.get('#integrantes').children.length === 3
        })


        it("completa las edades de los integrantes", () => {
            cy.get('.edad').then(edadesIntegrantes => {
                edadesIntegrantes.each(function(i, edad) {
                    edad.value = edades[i]

                })
            })
            cy.get('#calcular').click()
        })

    })

    describe('resetea el formulario', () => {
        it("se asegura que funcione el botón reset", () => {
            cy.get('#resetear').click()
        })

        it("se asegura que no halla integrantes", () => {
            cy.get('#integrantes').children.length === 0 
        })
    })
})