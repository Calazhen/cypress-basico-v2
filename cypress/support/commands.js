Cypress.Commands.add('fillMandatoryFieldsAndSubmit',function(){
    cy.get('#firstName').should('be.visible').type('Henrique').should('have.value', 'Henrique')
        cy.get ('#lastName').should('be.visible').type ('Calazans').should('have.value', 'Calazans')
        cy.get('#email').type('aplicacao@TAT.com').should('have.value','aplicacao@TAT.com')
        cy.get('#open-text-area').type("teste")
        cy.contains('button','Enviar').click()
        cy.get ('.success').should('be.visible')

})