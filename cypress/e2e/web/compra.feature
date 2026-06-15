Feature: Compra de produto

  Scenario: Buscar produto no site
    Given que o usuário acessa o site Automation Exercise
    When realizar a busca pelo produto "T-Shirt"
    Then o sistema deve exibir produtos relacionados