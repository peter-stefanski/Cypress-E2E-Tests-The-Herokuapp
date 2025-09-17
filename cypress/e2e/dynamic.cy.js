describe("Dynamic_test_01", () => {
  it("Wait for element", () => {
    cy.visit("/dynamic_loading/1");
    cy.get("#start button").click();
    cy.get("#loading").should("be.visible");
    cy.wait(6000);
    cy.get("#finish").should("contain", "Hello World!");
  });
});
