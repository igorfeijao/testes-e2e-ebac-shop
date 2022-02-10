// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha)
    cy.get('.woocommerce-form > .button').click()
});

Cypress.Commands.add('addProdutos', () => {
    
    cy.get('.button-variable-item-36').click()
    cy.get('.button-variable-item-Blue').click()
    cy.get('.single_add_to_cart_button').click()

    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.get('.post-3111 > .product-block').click()

    cy.get('.button-variable-item-L').click()
    cy.get('.button-variable-item-Yellow').click()
    cy.get('.single_add_to_cart_button').click()

    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.get('.post-3374 > .product-block').click()

    cy.get('.button-variable-item-32').click()
    cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
    cy.get('.single_add_to_cart_button').click()

    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.get('.post-2622 > .product-block').click()

    cy.get('.button-variable-item-M').click()
    cy.get('.button-variable-item-Red').click()
    cy.get('.single_add_to_cart_button').click()

})

