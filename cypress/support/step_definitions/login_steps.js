///<reference types="cypress"/>

import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import login_page from "../page-objects/login_page";
import dados_login from "../../fixtures/dados_login.json"


Given("I am on the login screen",()=>{
    login_page.acessarLogin()
})

Given("I fill my username",()=>{
    login_page.preencherUsername(dados_login.valido.username)
})

Given("I fill my passoword",()=>{
    login_page.preencherPassword(dados_login.valido.password)
})

Given("I fill my incorrect credentials",()=>{
    login_page.preencherUsername(dados_login.invalido.username)
    login_page.preencherPassword(dados_login.invalido.password)
})

Given("I fill my correct credentials",()=>{
    login_page.preencherUsername(dados_login.valido.username)
    login_page.preencherPassword(dados_login.valido.password)
})

When("I click in the login button",()=>{
    login_page.cliclarBotao()
})

Then("I see the error message",()=>{
    login_page.validarMessage()
})

Then("I see the invalid credentials alert",()=>{
    login_page.alertaErro()
})

Then("I should be logged in successfull",()=>{
    login_page.loginSucesso()

})