Cypress.Commands.add('fillMandatoryFieldsAndSubmit',function(){
    cy.get('#firstName').should('be.visible').type('Henrique',{delay: 0}).should('have.value', 'Henrique')
        cy.get ('#lastName').should('be.visible').type ('Calazans',{delay: 0}).should('have.value', 'Calazans')
        cy.get('#email').type('aplicacao@TAT.com',{delay: 0}).should('have.value','aplicacao@TAT.com')
        cy.get('#open-text-area').type("teste",{delay: 0})
        cy.contains('button','Enviar').click()
        cy.get ('.success').should('be.visible')
         

})