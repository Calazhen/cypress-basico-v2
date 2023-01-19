//  Aula07:https://github.com/wlsf82/cypress-basico-v2/blob/main/lessons/07.md
it.only('Verifica que a política de privacidade de forma independente', function(){
    cy.visit ('./src/privacy.html')
    cy.contains('Talking About Testing').should('be.visible')

})