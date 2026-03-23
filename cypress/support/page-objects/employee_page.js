///<reference types="cypress"/>

export default{
    openPim(){
        cy.get('a[href="/web/index.php/pim/viewPimModule"]').click()
    },
    validarLista(){
        cy.contains("Records Found").should("be.visible")
    },
    pesquisarFuncionário(nome){
        cy.get('input[placeholder="Type for hints..."]').first().type(nome)
    },

    clicarBotão(){
        cy.get(".oxd-button--secondary").contains("Search").click()
    },

    validarFuncionário(){
        cy.contains("Record Found").should("be.visible")
    },

    mensagemNegativa(){
        cy.contains("No Records Found").should("be.visible")
    },

    pesquisarID(id){
        cy.get(':nth-child(2) > .oxd-input').type(id)

    },

    removeFilter(){
        cy.get(".oxd-button--ghost").click()
    },

    validarCamposVazios(){
    cy.get('input[placeholder="Type for hints..."]').should("have.value","")
    },

    status(){
        cy.get('.oxd-select-text-input').first().click()
        cy.contains('.oxd-select-option', 'Full-Time Permanent').click()
    },

    job(){
        cy.get('.oxd-select-text-input').eq(2).click()
        cy.contains('.oxd-select-option', 'QA Engineer').click()
    },

    adiconarFuncionário(){
        cy.contains("button","Add").click()
    },

    salvar(){
    cy.contains("button","Save").click()
    },

    required(){
        cy.contains('Required').should('be.visible')
    },

    nome(nome){
        cy.get(".orangehrm-firstname").type(nome)
    },

    sobrenome(sobrenome){
        cy.get(".orangehrm-middlename").type(sobrenome)
    },

    lastName(ultimo_nome){
        cy.get(".orangehrm-lastname").type(ultimo_nome)
    },

    funcionarioCadastrado(){
        cy.contains("Personal Details").should("be.visible")
    }

    



}