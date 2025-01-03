import homePage from "../../page_objects/home.page";
import loginPage from "../../page_objects/login.page";
import dashboardPage from "../../page_objects/dashboard.page";
import userCredential from "../../fixtures/testData/userCredential.json";


describe("Logout", () => {});

it("Should login and logout", () => {
  cy.loginApi(userCredential.email, userCredential.password);
  cy.visit("/dashboard/user/profile");
  cy.fixture("testData/verificationText").then((data) => {
    dashboardPage.roleLabel.should("have.text", data.role);
    dashboardPage.fullNameLabel.should("have.text", data.fullName);
  });

  dashboardPage.userIconBtn.click({ force: true });
  cy.contains("Logout").click();

  loginPage.signInText.should("be.visible");
});