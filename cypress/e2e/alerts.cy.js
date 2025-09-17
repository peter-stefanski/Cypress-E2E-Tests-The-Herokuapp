describe("Alerts_test_01", () => {
  it("It's checking alerts in JavaScript", () => {
    cy.visit("//javascript_alerts");
    cy.on("window:alert", (str) => {
      expect(str).to.equal("I am a JS Alert");
    });
    cy.contains("Click for JS Alert").click();
    cy.get("#result").should("contain", "You successfully clicked an alert");
  });
});
