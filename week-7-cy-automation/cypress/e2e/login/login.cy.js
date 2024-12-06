describe("Login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should log in with your existing account", () => {
    //click login button on homepage
    cy.get('[href="/auth/login"]').click();
    //type in mail
    //loginPage.emailInput.type('testuser2@codemify.com')
    cy.get('[name="email"]').type("testuser2@codemify.com");
    //type in password
    cy.get('[name="password"]').type("November22*");
    //click login button
    cy.contains("Login").click();
    // Verify user role and title
    cy.get("a p").should("have.text", "role: user");
    // Verify first name as well
    cy.get("a h6").should("have.text", "Binal  Ramani");
  });
});
