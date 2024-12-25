import loginPage from "../../page_objects/login.page";
import homePage from "../../page_objects/home.page";
import registrationPage from "../../page_objects/registration.page";
import dashboardPage from "../../page_objects/dashboard.page";
import userCredential from "../../fixtures/userCredential.json";
import verificationText from "../../fixtures/verificationText.json";

describe("Login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should log in with your existing account", () => {
    homePage.loginBtn.click();
    loginPage.emailInput.type(userCredential.email);
    loginPage.passwordInput.type(userCredential.password);
    loginPage.loginBtn.click();
    dashboardPage.roleLabel.should("have.text", verificationText.role);
    dashboardPage.fullNameLabel.should("have.text", verificationText.fullName);
  });
});
