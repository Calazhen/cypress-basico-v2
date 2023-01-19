// CAC-TAT.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/// <reference types="Cypress" />


//AULA01: https://github.com/wlsf82/cypress-basico-v2/blob/main/lessons/01.md

describe('Central de Atendimento ao Cliente TAT', function() {
    const THREE_SECONDS_IN_MS = 3000

    beforeEach(function()  {    
            cy.visit ('./src/index.html')
        })
      
    it ('Verifica o título da aplicação',function (){
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
      })

//  Aula02: https://github.com/wlsf82/cypress-basico-v2/blob/main/lessons/02.md
    Cypress._.times(2,function(){
        it('Preenche os campos obrigatórios e envia o formulário',function() {
            
            const longText = 'Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,'
             
            cy.clock()
            cy.get('#firstName').should('be.visible').type('Henrique',{delay: 0}).should('have.value', 'Henrique')
            cy.get ('#lastName').should('be.visible').type ('Calazans',{delay: 0}).should('have.value', 'Calazans')
            cy.get('#email').type('aplicacao@TAT.com',{delay: 0}).should('have.value','aplicacao@TAT.com')
            cy.get('#open-text-area').type(longText, {delay: 0})
            cy.contains('button','Enviar').click()
            cy.get ('.success').should('be.visible')
            cy.tick(THREE_SECONDS_IN_MS)
            cy.get ('.success').should('not.be.visible')
    
    })
   
})
    it ('Exibe mensagem de erro ao submeter o formulário com um email com formatação inválida',function(){
        cy.clock()
        cy.get('#firstName').should('be.visible').type('Henrique',{delay: 0}).should('have.value', 'Henrique')
        cy.get ('#lastName').should('be.visible').type ('Calazans',{delay: 0}).should('have.value', 'Calazans')
        cy.get('#email').type('aplicacaoTAT.com').should('have.value','aplicacaoTAT.com')
        cy.contains('button','Enviar').click()
        cy.get ('.error').should ('be.visible')
        cy.tick(THREE_SECONDS_IN_MS)
        cy.get ('.error').should ('not.be.visible')
})
    it ('Campo telefone continua vazio quando preenchido com um valor não numérico', function(){

        cy.get ('#phone').type ('kajdbkBSDLKBSAKJB').should('have.value', '')

})
// Contém refatoração da aula 05    
    it('Exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido', function(){
        cy.clock()
        cy.get('#firstName').should('be.visible').type('Henrique',{delay: 0}).should('have.value', 'Henrique')
        cy.get ('#lastName').should('be.visible').type ('Calazans',{delay: 0}).should('have.value', 'Calazans')
        cy.get('#email').type('aplicacao@TAT.com',{delay: 0}).should('have.value','aplicacao@TAT.com')
        cy.get ('#phone-checkbox').check()
        cy.get ('.phone-label-span').should ('be.visible')
        cy.get('#open-text-area').type('teste', {delay: 0})
        cy.contains('button','Enviar').click()
        cy.get ('.error').should ('be.visible')
        cy.tick(THREE_SECONDS_IN_MS)
        cy.get ('.error').should ('not.be.visible')
})
    it ('Preenche e limpa os campos: nome, sobrenome, email e telefone', function(){
        cy.get('#firstName').should('be.visible').type('Henrique').should('have.value', 'Henrique').clear().should('be.visible','')
        cy.get ('#lastName').should('be.visible').type ('Calazans').should('have.value', 'Calazans').clear().should('be.visible','')
        cy.get('#email').type('aplicacao@TAT.com').should('have.value','aplicacao@TAT.com').clear().should('be.visible', '')
        cy.get('#open-text-area').type('teste', {delay: 0}).should('have.value','teste').clear().should('be.visible','')
})
    it ('Exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function(){
        cy.clock ()
        cy.get('button[type="submit"]').click()
        cy.get ('.error').should ('be.visible')
        cy.tick(THREE_SECONDS_IN_MS)
        cy.get ('.error').should ('not.be.visible')

})
    it ('Envia o formulário usando um comando customizado', function(){
        cy.clock()
        cy.fillMandatoryFieldsAndSubmit()
        cy.tick(THREE_SECONDS_IN_MS)
        cy.get ('.success').should('not.be.visible')
})

//  Aula03:https://github.com/wlsf82/cypress-basico-v2/blob/main/lessons/03.md

    it ('Seleciona um produto (Youtube) por seu texto', function(){
        cy.get('#product').select('YouTube').should ('have.value','youtube')
})
    it('Seleciona um produto (Mentoria) por seu texto (value)', function(){
        cy.get('#product').select('mentoria').should ('have.value', 'mentoria')
})
    it('Seleciona um produto (Blog) por seu índice', function(){
        cy.get('#product').select(1).should ('have.value', 'blog')
})

//  Aula04:https://github.com/wlsf82/cypress-basico-v2/blob/main/lessons/04.md

    it ('Marca o tipo de atendimento "Feedback"', function (){
        cy.get ('input[type="radio"][value = "feedback"]').check().should('have.value', 'feedback')

})
    it ('Marca cada tipo de atendimento.', function (){
        cy.get ('input[type="radio"]').should('have.length', 3)
            .each(function($radio){
                cy.wrap($radio).check()
                cy.wrap($radio).should('be.checked')
             })
})  

//  Aula05: https://github.com/wlsf82/cypress-basico-v2/blob/main/lessons/05.md
    it('Marca ambos checkboxes, depois desmarca o último.', function (){
        cy.get('input[type="checkbox"]').check().should('be.checked').last().uncheck().should('not.be.checked')
})

//  Aula06: https://github.com/wlsf82/cypress-basico-v2/blob/main/lessons/06.md
    it ('Seleciona um arquivo da pasta fixtures',function(){
        cy.get('input[type="file"]').should('not.have.value').selectFile('./cypress/fixtures/example.json').should(function($input){
        expect ($input[0].files[0].name).to.equal('example.json')
        })
})
    it('Seleciona um arquivo simulando um drag-and-drop', function(){
        cy.get('input[type="file"]').should('not.have.value').selectFile('./cypress/fixtures/example.json',{action:'drag-drop'})
        .should(function($input){ expect ($input[0].files[0].name).to.equal('example.json')
        })      
})
    it('Selecionar um arquivo utilizando um fixture para a qual foi dada um alias',function (){
        cy.fixture('example.json').as('sampleFile')
        cy.get('input[type="file"]')
        .selectFile('@sampleFile')
        .should(function($input){ expect ($input[0].files[0].name).to.equal('example.json')
        })

})

//  Aula07:https://github.com/wlsf82/cypress-basico-v2/blob/main/lessons/07.md
    it('Verifica que a política de privacidade abre em outra aba sem a necessidade ', function(){
        cy.get ('#privacy a').should ('have.attr', 'target','_blank')
})   
    it('Verifica que a política de privacidade removendo o target e depois clicanco no link ', function(){
        cy.get ('#privacy a')
        .invoke('removeAttr','target')
        .click()
        cy.contains('Talking About Testing').should('be.visible')

})
    it('Verifica que a política de privacidade de forma independente', function(){
        cy.visit ('./src/privacy.html')
        cy.contains('Talking About Testing').should('be.visible')

})
// Aula08:https://github.com/wlsf82/cypress-basico-v2/blob/main/lessons/08.md 
  // Apenas configurar o arquivo package.json mudando o tamanho da execução simulando a pagina web pelo mobile
   

  // Aula 09:https://github.com/wlsf82/cypress-basico-v2/blob/main/lessons/09.md
  // Arrumando o arquivo README.md para criar minha própria documentação do projeto. 

  //Aula 10: https://github.com/wlsf82/cypress-basico-v2/blob/main/lessons/10.md (Arquivo .github/workflow/ci.yml)

  //Aula 11: https://github.com/wlsf82/cypress-basico-v2/blob/main/lessons/11.md

   it('exibe e esconde as mensagens de sucesso e erro usando o .invoke', () => {
        cy.get('.success')
        .should('not.be.visible')
        .invoke('show')
        .should('be.visible')
        .and('contain', 'Mensagem enviada com sucesso.')
        .invoke('hide')
        .should('not.be.visible')
        cy.get('.error')
        .should('not.be.visible')
        .invoke('show')
        .should('be.visible')
        .and('contain', 'Valide os campos obrigatórios!')
        .invoke('hide')
        .should('not.be.visible')
})

    it('Simulando o atalho CTRL+V para colar o texto longo', function(){
        const longText = Cypress._.repeat('0123456789', 20) 

        cy.get ('#open-text-area').invoke('val', longText).should('have.value', longText)
})
    it('Faz uma requisição HTTP', () => {
 
     cy.request ('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html').should(function(response){
        const { status, statusText, body} = response     
        expect (status).to.eq(200)
        expect (statusText).to.eq('OK') 
        expect (body).to.include ('CAC TAT')
        })
})

    it('Encontra o gato escondido',function(){
        cy.get('#cat').invoke('show').should('be.visible')
        cy.get('#title').invoke('text', 'CAT TAT')
        cy.get('#subtitle').invoke('text','Eu 💙 gatos!')

    })

})