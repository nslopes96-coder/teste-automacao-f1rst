Feature: Consulta API Trello

Scenario: Validar retorno da API Trello
  Given que realizo uma consulta na API do Trello
  Then o status code deve ser 200
  And deve exibir o campo name da lista