import loginPage from "../../page_objects/login.page";
import homePage from "../../page_objects/home.page";
import registrationPage from "../../page_objects/registration.page";
import dashboardPage from "../../page_objects/dashboard.page";

describe("Login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should log in with your existing account", () => {
  
    homePage.loginBtn.click();
    loginPage.emailInput.type("testuser2@codemify.com");
    loginPage.passwordInput.type("November22*");
    loginPage.loginBtn.click();
    dashboardPage.roleLabel.should("have.text", "role: user");
    dashboardPage.fullNameLabel.should("have.text", "Binal  Ramani");
  });
});
