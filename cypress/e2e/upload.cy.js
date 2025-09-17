describe("Upload_test_01", () => {
  it("File Upload Successfully", () => {
    cy.visit("/upload");
    cy.get("#file-upload").selectFile("cypress/fixtures/test.jpg", {
      force: true,
    });
    cy.get("#file-submit").click();
    cy.get("#uploaded-files").should("contain", "test.jpg");
  });
});
