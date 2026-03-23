Feature: Login de usuario 

    Scenario: Tentativa de login com campos vazios
    Given I am on the login screen
    When I click in the login button
    Then I see the error message

    Scenario: Tentativa de login preenchendo apenas o campo username
    Given I am on the login screen
    And I fill my username
    When I click in the login button
    Then I see the error message

    Scenario: Tentativa de login preenchendo apenas o campo passoword
    Given I am on the login screen
    And I fill my passoword
    When I click in the login button
    Then I see the error message

    Scenario: Tentativa de login com credencias inválidas
    Given I am on the login screen
    And I fill my incorrect credentials
    When I click in the login button
    Then I see the invalid credentials alert

    Scenario: Login com sucesso 
    Given I am on the login screen
    And I fill my correct credentials
    When I click in the login button
    Then I should be logged in successfull

