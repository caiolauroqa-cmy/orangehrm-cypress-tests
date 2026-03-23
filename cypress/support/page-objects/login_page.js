///<reference types="cypress"/>

export default{
    acessarLogin(){
        cy.visit("/")},


    cliclarBotao(){
        cy.get(".orangehrm-login-button").click()
    },

    validarMessage(){
        cy.get(".oxd-input-field-error-message").should("be.visible")
    },

    preencherUsername(username){
        cy.get('[name="username"]').type(username)
    },

    preencherPassword(password){
        cy.get('[name="password"]').type(password)
    },

    alertaErro(){
        cy.get(".oxd-alert--error").should("be.visible")
    },

    loginSucesso(){
         cy.contains("Dashboard").should("be.visible")
    }












}