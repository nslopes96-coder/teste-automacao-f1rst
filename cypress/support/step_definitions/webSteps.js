const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("que o usuário acessa o site Automation Exercise", () => {
  cy.visit("https://www.automationexercise.com/");
});

When("realizar login com usuário válido", () => {
  cy.contains("Signup / Login", { timeout: 20000 }).click();

  cy.get('[data-qa="login-email"]', { timeout: 20000 })
  .should("be.visible")
  .type("ns.lopes96@gmail.com");

cy.get('[data-qa="login-password"]')
  .should("be.visible")
  .type("987654321");

  cy.get('[data-qa="login-button"]').click();

  cy.contains("Logged in as", { timeout: 20000 })
    .should("be.visible");
});

When("realizar a busca pelo produto {string}", (produto) => {
  cy.contains("Products", { timeout: 20000 }).click();

  cy.url({ timeout: 20000 })
    .should("include", "/products");

  cy.get("#search_product", { timeout: 20000 })
    .should("be.visible")
    .type(produto);

  cy.get("#submit_search").click();

  cy.contains("Searched Products", { timeout: 20000 })
    .should("be.visible");
});

When("adicionar o produto ao carrinho", () => {
  cy.get(".productinfo .add-to-cart", { timeout: 20000 })
    .first()
    .click();

  cy.contains("Continue Shopping", { timeout: 20000 })
    .should("be.visible")
    .click();
});

When("acessar o carrinho", () => {
  cy.contains("Cart", { timeout: 20000 }).click();
});

Then("o sistema deve exibir o produto no carrinho", () => {
  cy.get(".cart_description", { timeout: 20000 })
    .should("exist");

  cy.get(".cart_description a")
    .should("have.length.greaterThan", 0);
});