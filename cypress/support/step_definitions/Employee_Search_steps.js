///<reference types="cypress"/>

import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import login_page from "../page-objects/login_page";
import employee_page from "../page-objects/employee_page";
import dados_login from "../../fixtures/dados_login.json"
import dados_funcionario from "../../fixtures/dados_funcionario.json"

Given("I am logged in",()=>{
    login_page.acessarLogin()
    login_page.preencherUsername(dados_login.valido.username)
    login_page.preencherPassword(dados_login.valido.password)
    login_page.cliclarBotao()

})



When("I navigate to PIM",()=>{
    employee_page.openPim()
})

When("I search for an existing employe",()=>{
    employee_page.pesquisarFuncionário("Emily")

})

When("I search for an non-existent employe",()=>{
    employee_page.pesquisarFuncionário("Ichiban")

})

When("I search or an existing employee by ID",()=>{
    employee_page.pesquisarID("0320")
})



When("I fill the employee name",()=>{
    employee_page.pesquisarID("Emily")
})

When("I click reset",()=>{
    employee_page.removeFilter()
})

When("I search or an existing employee by status",()=>{
    employee_page.status()
})

When("I search or an existing employee by job",()=>{
    employee_page.job()
})

When("I click in the button add",()=>{
    employee_page.adiconarFuncionário()
})

When("I click in the button save",()=>{
    employee_page.salvar()
})

When("I fill in the new employee information",()=>{
    employee_page.nome(dados_funcionario.nome)
    employee_page.sobrenome(dados_funcionario.sobrenome)
    employee_page.lastName(dados_funcionario.last)
})



Then("I should see the employee list",()=>{
    employee_page.validarLista()

})

Then("I should see the employee in the results",()=>{
    employee_page.clicarBotão()
    employee_page.validarFuncionário()
})



Then("the filters should be cleared",()=>{
    employee_page.validarCamposVazios()
})

Then("I should see a message saying it was not found",()=>{
    employee_page.mensagemNegativa()
})

Then("an error message should be shown",()=>{
    employee_page.required()
})

Then("the employee should be saved successfully",()=>{
    employee_page.funcionarioCadastrado()
})