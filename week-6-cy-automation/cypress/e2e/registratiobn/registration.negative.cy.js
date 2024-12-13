describe("Registration negative scenario", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should not register with an already existing email account", () => {
    cy.get('[href="/auth/register"]').click();
    cy.get('[name="firstName"]').type("Binal");
    cy.get('[name="lastName"]').type("Ramani");
    cy.get('[name="email"]').type("testuser2@codemify.com");
    cy.get('[name="password"]').type("Summer22*");
    cy.get('[type="submit"]').click();

    cy.contains("Register").click();
    // Verify user cannot be logged in
    cy.get('[role="alert"]').should("contain", "Input data validation failed");
    cy.title().should("eq", "Register | Delek Homes");
  });

  it("Should not register without filling in required fields_without last name", () => {
    cy.get('[href="/auth/register"]').click();
    cy.get('[name="firstName"]').type("Binal");
    cy.get('[name="lastName"]').type("Ramani");
    cy.get('[name="email"]').type("testuser2@codemify.com");
    cy.get('[name="password"]').type("1234");
    cy.get('[name="password"]').clear("1234");
    cy.get('[type="submit"]').click();
    //cy.wait(2000);

    cy.contains("Password is required"); 

    cy.contains("Register");
    cy.title().should("eq", "Register | Delek Homes");
  });
});
