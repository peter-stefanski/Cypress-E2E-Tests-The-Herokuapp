describe("Login_test_02", () => {
  beforeEach(function () {
    cy.fixture("users").then((users) => {
      this.user = users.invalidUser;
    });
  });
  it("Unsuccessful Login", function () {
    const user = this.user;
    cy.visit("/login");
    cy.get("#username").type(user.username);
    cy.get("#password").type(user.password);
    cy.get("button[type='submit']").click();
    cy.get(".flash.error").should("contain", "Your username is invalid!");
  });
});
