import "cypress-file-upload";

Cypress.Commands.add("Login", (userType) => {
  cy.fixture("users").then((users) => {
    const user = users[userType];
    cy.visit("/login");
    cy.get("#username").type(user.username);
    cy.get("#password").type(user.password);
    cy.get("button[type='submit']").click();
  });
});
