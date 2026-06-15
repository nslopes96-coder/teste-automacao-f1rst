const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("que o usuário acessa o site Automation Exercise", () => {
  cy.visit("https://www.automationexercise.com/");
});

When("realizar a busca pelo produto {string}", (produto) => {
  cy.get('a[href="/products"]', { timeout: 20000 }).click();

  cy.url({ timeout: 20000 })
    .should("include", "/products");

  cy.get("#search_product", { timeout: 20000 })
    .should("be.visible")
    .type(produto);

  cy.get("#submit_search").click();
});

Then("o sistema deve exibir produtos relacionados", () => {
  cy.contains("Searched Products", { timeout: 20000 })
    .should("be.visible");

  cy.get(".productinfo", { timeout: 20000 })
    .should("have.length.greaterThan", 0);
});