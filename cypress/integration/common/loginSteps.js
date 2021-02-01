import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I am at login page", () => {
  cy.visit("https://www.saucedemo.com");
});

When(
  "I input username {string} and password {string}",
  (userName, password) => {
    cy.get("#user-name").clear().type(userName);
    cy.get("#password").clear().type(password);
  }
);

When("Click the submit button", () => {
  cy.get("#login-button").click();
});

Then("I should be able to load main page successfully", () => {
  cy.get("body").should("contain", "Products");
});

Then("I should not be able to load main page successfully", () => {
  cy.get("h3").should("contain", "Epic sadface");
});
