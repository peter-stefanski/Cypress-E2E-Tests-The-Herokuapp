describe("Login_test_01", () => {
  beforeEach(function () {
    cy.fixture("users").then((users) => {
      this.users = users.validUser;
    });
  });
  it("Successful Login", function () {
    const user = this.users;
    cy.visit("/login");
    cy.get("#username").type(user.username);
    cy.get("#password").type(user.password);
    cy.get("button[type='submit']").click();
    cy.url().should("include", "/secure");
    cy.get(".flash.success").should(
      "contain",
      "You logged into a secure area!"
    );
    cy.wait(2000);
    cy.get(".button.secondary.radius").click();
  });
});
