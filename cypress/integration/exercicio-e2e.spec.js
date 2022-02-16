/// <reference types="cypress" />
import EnderecoPagina from '../support/page_objects/endereco.page'
const perfil = require('../fixtures/perfil.json')
const endereco = require('../fixtures/endereco.json')

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    
    beforeEach(() => {
        cy.visit('/')
        cy.get('.icon-user-unfollow').click()
        cy.login('iaraujo@teste.com', '@igor135')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        
       cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()

        cy.get('#account_first_name').clear().type(perfil.name)
        cy.get('#account_last_name').clear().type(perfil.lastname)
        cy.get('.woocommerce-Button').click()

        EnderecoPagina.editarEnderecoUsuario('Brasil', 'Rua das Amoras, 15', 'Rio de Janeiro', 'Rio de Janeiro', '22789-468', '21 24038348')

        cy.get('#primary-menu > .menu-item-629 > a').click()

        cy.addProdutos('Abominable Hoodie', 'M', 'Red')
        cy.addProdutos('Aero Daily Fitness Tee', 'L', 'Black')
        cy.addProdutos('Aether Gym Pant', '36', 'Brown')
        cy.addProdutos('Atlas Fitness Tank', 'S', 'Blue')

        cy.checkout()

        cy.get('.woocommerce-notice').should('contain', 'Seu pedido foi recebido')

    });

});