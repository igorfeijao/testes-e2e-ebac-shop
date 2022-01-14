/// <reference types="cypress" />
const perfil = require('../fixtures/perfil.json')
const endereco = require('../fixtures/endereco.json')

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br')
        cy.get('.icon-user-unfollow').click()
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()

        cy.get('#account_first_name').clear().type(perfil.name)
        cy.get('#account_last_name').clear().type(perfil.lastname)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(1) > .title > .edit').click()

        cy.get('#select2-billing_country-container').click().type(endereco.pais).get('[aria-selected="true"]').click()

        cy.get('#billing_address_1').clear().type(endereco.endereco)
        cy.get('#billing_city').clear().type(endereco.cidade)

        cy.get('#select2-billing_state-container').click().type(endereco.estado + '{enter}')

        cy.get('#billing_postcode').clear().type(endereco.cep)
        cy.get('#billing_phone').clear().type(endereco.telefone)

        cy.get(':nth-child(2) > .button').click()

        cy.get('#primary-menu > .menu-item-629 > a').click()

        cy.get('.post-3073 > .product-block').click()

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

        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()

        cy.get('#payment_method_cod').click()
        cy.get('[type="checkbox"]').click()

        cy.get('#place_order').click()

    });

});