Feature: Employee Search



Scenario: Exibir lista de funcionários existentes
Given I am logged in
When  I navigate to PIM
Then I should see the employee list

Scenario: Buscar um funcionário existente pelo nome
Given I am logged in 
When I navigate to PIM
And I search for an existing employe
Then I should see the employee in the results

Scenario: Buscar um funcionário inexistente pelo nome
Given I am logged in 
When I navigate to PIM
And I search for an non-existent employe
Then I should see a message saying it was not found

Scenario: Buscar um funcionário pelo id
Given I am logged in 
When I navigate to PIM
And I search or an existing employee by ID 
Then I should see the employee in the results

Scenario: Resetar filtros 
Given I am logged in 
When I navigate to PIM
And I fill the employee name
And I click reset
Then the filters should be cleared

Scenario: Busca de fucionário por tipo de contrato 
Given I am logged in 
When I navigate to PIM
And I search or an existing employee by status
Then I should see the employee list

Scenario: Busca de funcionário por cargo 
Given I am logged in 
When I navigate to PIM
And I search or an existing employee by job
Then I should see the employee list

Scenario: Cadastro de funcionário com campos vazios
Given I am logged in 
When I navigate to PIM
And I click in the button add
And I click in the button save 
Then an error message should be shown

Scenario: Cadastro de funcionário com sucesso 
Given I am logged in 
When I navigate to PIM
And I click in the button add
And I fill in the new employee information
And I click in the button save 
Then the employee should be saved successfully



