import loginPage from "../../../page_objects/login.page";
import dashboardPage from "../../../page_objects/dashboard.page";
import homePage from "../../../page_objects/home.page";

describe("Logout", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should log out", () => {
    homePage.loginBtn.click(); //cy.get('[href="/auth/login"]').click();
    loginPage.emailInput.type("testuser2@codemify.com");
    loginPage.passwordInput.type("November22*");
    loginPage.loginBtn.click();
    dashboardPage.userIconBtn.click();
    dashboardPage.logoutBtn.click();
    cy.get("h4").should("contain", "Sign in to Delek Homes"); //cy.contain('Sign in to Delek Homes')

    cy.title().should("eq", "Login | Delek Homes");
  });
});
