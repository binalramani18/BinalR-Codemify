import homePage from "../../page_objects/home.page";
import loginPage from "../../page_objects/login.page";
import dashboardPage from "../../page_objects/dashboard.page";

describe("Logout", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should login and logout", () => {
    homePage.loginBtn.click();

    loginPage.emailInput.type("testuser2@codemify.com");
    loginPage.passwordInput.type("November22*");
    loginPage.loginBtn.click();

    dashboardPage.roleLabel.should("have.text", "role: user");
    dashboardPage.fullNameLabel.should("have.text", "Binal  Ramani");

    dashboardPage.userIconBtn.click();
    cy.contains("Logout").click();

    loginPage.signInText.should("be.visible");
  });
});
