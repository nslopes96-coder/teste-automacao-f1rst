const { Given, Then } = require("@badeball/cypress-cucumber-preprocessor");

let response;

Given("que realizo uma consulta na API do Trello", () => {
  cy.request({
    method: "GET",
    url: "https://api.trello.com/1/actions/592f11060f95a3d3d46a987a"
  }).then((res) => {
    response = res;
  });
});

Then("o status code deve ser 200", () => {
  expect(response.status).to.eq(200);
});

Then("deve exibir o campo name da lista", () => {
  expect(response.body.data.list.name).to.not.be.empty;

  cy.log("Nome da lista: " + response.body.data.list.name);
});