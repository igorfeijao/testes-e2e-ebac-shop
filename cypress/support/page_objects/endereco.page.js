class EnderecoPagina {

    editarEnderecoUsuario(pais, endereco, cidade, estado, cep, telefone) {
        
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(1) > .title > .edit').click()

        cy.get('#select2-billing_country-container').click().type(pais).get('[aria-selected="true"]').click()

        cy.get('#billing_address_1').clear().type(endereco)

        cy.get('#billing_city').clear().type(cidade)
        cy.get('#select2-billing_state-container').click().type(estado + '{enter}')

        cy.get('#billing_postcode').clear().type(cep)
        cy.get('#billing_phone').clear().type(telefone)

        cy.get(':nth-child(2) > .button').click()

    }

}

export default new EnderecoPagina()