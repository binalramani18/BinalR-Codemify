import loginPage from "../../../page_objects/login.page";
import homePage from "../../../page_objects/home.page";
import dashboardPage from "../../../page_objects/dashboard.page";

describe("Login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should log in with your existing account", () => {
    //click login button on homepage
    homePage.loginBtn.click(); //  //type in mail-cy.get('[href="/auth/login"]').click();
    loginPage.emailInput.type("testuser2@codemify.com"); //type in password
    loginPage.passwordInput.type("November22*"); //click login button
    loginPage.loginBtn.click(); // Verify user role and title
    dashboardPage.roleLabel.should("have.text", "role: user"); // Verify first name as well

    cy.get("a h6").should("have.text", "Binal  Ramani");
  });
});
