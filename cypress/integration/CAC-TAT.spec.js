// CAC-TAT.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/// <reference types="Cypress" />


describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function()  {
        
            cy.visit ('./src/index.html')
        })
      
    it ('Verifica o título da aplicação',function (){
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
      })
    it ('Preenche os campos obrigatórios e envia o formulário',function() {

        const longText = 'Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,'
         
        cy.get('#firstName').should('be.visible').type('Henrique').should('have.value', 'Henrique')
        cy.get ('#lastName').should('be.visible').type ('Calazans').should('have.value', 'Calazans')
        cy.get('#email').type('aplicacao@TAT.com').should('have.value','aplicacao@TAT.com')
        cy.get('#open-text-area').type(longText, {delay: 0})
        cy.contains('button','Enviar').click()
        cy.get ('.success').should('be.visible')

    })
    it ('Exibe mensagem de erro ao submeter o formulário com um email com formatação inválida',function(){
        cy.get('#firstName').should('be.visible').type('Henrique').should('have.value', 'Henrique')
        cy.get ('#lastName').should('be.visible').type ('Calazans').should('have.value', 'Calazans')
        cy.get('#email').type('aplicacaoTAT.com').should('have.value','aplicacaoTAT.com')
        cy.contains('button','Enviar').click()
        cy.get ('.error').should ('be.visible')
    })
    it ('Campo telefone continua vazio quando preenchido com um valor não numérico', function(){

        cy.get ('#phone').type ('kajdbkBSDLKBSAKJB').should('have.value', '')

    })
    it ('Exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido', function(){
        cy.get('#firstName').should('be.visible').type('Henrique').should('have.value', 'Henrique')
        cy.get ('#lastName').should('be.visible').type ('Calazans').should('have.value', 'Calazans')
        cy.get('#email').type('aplicacao@TAT.com').should('have.value','aplicacao@TAT.com')
        cy.get ('#phone-checkbox').click()
        cy.get ('.phone-label-span').should ('be.visible')
        cy.get('#open-text-area').type('teste', {delay: 0})
        cy.contains('button','Enviar').click()
        cy.get ('.error').should ('be.visible')
    })
    it ('Preenche e limpa os campos: nome, sobrenome, email e telefone', function(){
        cy.get('#firstName').should('be.visible').type('Henrique').should('have.value', 'Henrique').clear().should('be.visible','')
        cy.get ('#lastName').should('be.visible').type ('Calazans').should('have.value', 'Calazans').clear().should('be.visible','')
        cy.get('#email').type('aplicacao@TAT.com').should('have.value','aplicacao@TAT.com').clear().should('be.visible', '')
        cy.get('#open-text-area').type('teste', {delay: 0}).should('have.value','teste').clear().should('be.visible','')
  })
    it ('Exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function(){
        cy.get('button[type="submit"]').click()
        cy.get ('.error').should ('be.visible')

})
    it ('Envia o formulário usando um comando customizado', function(){
        cy.fillMandatoryFieldsAndSubmit()

})
    it ('Seleciona um produto (Youtube) por seu texto', function(){
        cy.get('#product').select('YouTube').should ('have.value','youtube')
})
    it('Seleciona um produto (Mentoria) por seu texto (value)', function(){
        cy.get('#product').select('mentoria').should ('have.value', 'mentoria')

    })

    it.only('Seleciona um produto (Blog) por seu índice', function(){
        cy.get('#product').select(1).should ('have.value', 'blog')

    })




})