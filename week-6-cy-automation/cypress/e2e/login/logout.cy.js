
describe("Logout", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should login and logout", () => {
    
    cy.get('[href="/auth/login"]').click();
    cy.get('[name="email"]').type("testuser2@codemify.com");
    cy.get('[name="password"]').type("November22*");
    cy.contains("Login").click();
    cy.get(
      '[class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-w5qhhs"]'
    ).click();
    cy.get(
      '[class="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters css-p9n58v"]'
    ).click();
    cy.get("h4").should("contain", "Sign in to Delek Homes");

    cy.title().should("eq", "Login | Delek Homes");
  });
});
