import homePage from "../../page_objects/home.page";
import registrationPage from "../../page_objects/registration.page";
import dashboardPage from "../../page_objects/dashboard.page";
import userCredentias from "../../fixtures/testData/userCredentials.json";
import verificationText from "../../fixtures/testData/verificationText.json";
import loginPage from "../../page_objects/login.page";


describe("Login", () => {
  it("Should log in with your existing account", () => {
    cy.visit("/");
    homePage.loginBtn.click();

    loginPage.emailInput.type(userCredentias.email);
    loginPage.passwordInput.type(userCredentias.password);
    loginPage.loginBtn.click();

    dashboardPage.roleLabel.should("have.text", verificationText.role);
    dashboardPage.fullNameLabel.should("have.text", verificationText.fullName);
  });
});
