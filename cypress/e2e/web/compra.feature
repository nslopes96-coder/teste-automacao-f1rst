Feature: Compra de produto

Scenario: Realizar fluxo de compra com login
  Given que o usuário acessa o site Automation Exercise
  When realizar login com usuário válido
  And realizar a busca pelo produto "T-Shirt"
  And adicionar o produto ao carrinho
  And acessar o carrinho
  Then o sistema deve exibir o produto no carrinho