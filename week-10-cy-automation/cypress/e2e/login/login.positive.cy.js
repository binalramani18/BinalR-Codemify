import homePage from "../../page_objects/home.page";
import registrationPage from "../../page_objects/registration.page";
import dashboardPage from "../../page_objects/dashboard.page";
import userCredential from "../../fixtures/testData/userCredential.json";
import verificationText from "../../fixtures/testData/verificationText.json";
import loginPage from "../../page_objects/login.page";


describe("Login", () => {
  it("Should log in with your existing account", () => {
    cy.visit("/");
    homePage.loginBtn.click();

    loginPage.emailInput.type(userCredential.email);
    loginPage.passwordInput.type(userCredential.password);
    loginPage.loginBtn.click();

    dashboardPage.roleLabel.should("have.text", verificationText.role);
    dashboardPage.fullNameLabel.should("have.text", verificationText.fullName);
  });
});
